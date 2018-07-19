<style lang="less">
.searchCon {
  margin: 30px 20px;
  .locationCon {
    float: left;
    width: 750px;
    height: 450px;
    padding: 10px 25px;
    border: solid 1px #ccc;
    overflow-y: auto;
    table {
      .name {
        td {
          font-size: 14px;
          width: 183px;
          text-align: center;
          margin-right: 0;
          background: none;
          color: #000;
          &:first-child {
            width: 324px;
          }
        }
      }
      td {
        margin-right: 20px;
        font-size: 14px;
        text-align: center;
        background: #5ca9f9;
        color: #fff;
      }
    }
  }
}
</style>
<template>
    <div class="searchCon">
       <div style="margin:0 0 20px 10px">
         <Dropdown>
            <a href="javascript:void(0)">
                下拉菜单
                <Icon type="arrow-down-b"></Icon>
            </a>
            <DropdownMenu slot="list">
                <DropdownItem key='1'>全国</DropdownItem>
                <DropdownItem key='2'>北京</DropdownItem>
            </DropdownMenu>
          </Dropdown>
       </div>
       <div>
         <textarea name="" id="" cols="32" rows="20" v-model="address" style="float:left;width: 420px;padding:10px;font-size: 14px;"></textarea>
         <Button type="primary"  @click="getLocation" style="float:left;margin:0 10px;">转换经纬度</Button>
         <div  class="locationCon">
           <table>  
             <tr class="name">
               <td>地址</td>
               <td>经度</td>
               <td>纬度</td>
             </tr>
             <tr v-for="item in locationList">
               <td>{{item.address}}</td>
               <td>{{item.lng}}</td>
               <td>{{item.lat}}</td>
             </tr>
           </table>
          </div>
       </div>
    </div>
</template>
<script>
import util from "../../libs/util.js";
import jsonp from "jsonp";
export default {
  data() {
    return {
      ak: "3DsteGKkU3kKKG9opvF6XaKRET2gkGZd",
      address: "",
      locationList: [],
    };
  },
  computed: {
    transformLocation() {
      return this.locationList.join("\n");
    }
  },
  methods: {
    indexOfLocaltion(item) {
      for (var i = 0; i < this.locationList.length; i++) {
        if (this.locationList[i].lat == item.lat) {
          return false;
        } else {
          return true;
        }
      }
    },
    all(url){
        return new Promise((resolve,reject) => {
            var random=parseInt(Math.random()*1000);
            var cb='jsonCallBack'+random;
            window[cb] =(result) => {
                resolve(result)
            }
            var JSONP=document.createElement("script");
            JSONP.type="text/javascript";
            JSONP.src=`${url}&callback=${cb}`;
            document.getElementsByTagName("head")[0].appendChild(JSONP);
            setTimeout(() => {
                document.getElementsByTagName("head")[0].removeChild(JSONP)
            },500)
        })
      },
    getLocation() {
      var arr = this.address.trim().split("\n");
      var pr=[];
      this.locationList.length=0;
      this.locationList = [];
      for (var i = 0; i < arr.length; i++) {
        if (arr[i]) {
          pr.push(this.all("http://api.map.baidu.com/geocoder/v2/?address=" +
          arr[i] +
          "&output=json&ak=G9aOubqVn5dC8y1dUl66ZSlAgvhk9Dv3"));
        }
      }
     if(arr.length&&arr[0]!==""){
        Promise.all(pr).then((data)=>{
          var newData=data.map((item,index)=>{
              return {
                address:arr[index],
                lng:(item&&item.result&&item.result.location&&item.result.location.lng)||0,
                lat: (item&&item.result&&item.result.location&&item.result.location.lat)||0
              }
          })
          this.locationList = newData;
      })
    }
    }
  },
  mounted() {
    this.getLocation();
  }
};
</script>