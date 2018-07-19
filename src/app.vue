<style lang="less">
    html,
    body{
        height: 100%;
    }
    /* ============================================================
   flex：定义布局为盒模型
   flex-v：盒模型垂直布局
   flex-1：子元素占据剩余的空间
   flex-align-center：子元素垂直居中
   flex-pack-center：子元素水平居中
   flex-pack-justify：子元素两端对齐
   兼容性：ios 4+、android 2.3+、winphone8+
   ============================================================ */

.flex {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}

.flex-v {
    -webkit-box-orient: vertical;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
}

.flex-1 {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
}

.flex-align-center {
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}

.flex-pack-center {
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
}

.flex-pack-justify { 
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
}


.box-sizing {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        height: 100%;
        border-radius: 4px;
        overflow: hidden;
        .layout-row{
            height: 100%;
        }
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 400px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
        height: 48px;
    }
    .layout-menu-left{
        background: #464c5b;
    }
    .layout-header{
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .layout-ceiling-main a{
        color: #9ba7b5;
    }
    .layout-hide-text .layout-text{
        display: none;
    }
    .ivu-col{
        transition: width .2s ease-in-out;
    }
</style>
<template>
    <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
        <Row type="flex" class="layout-row">
                <div class="layout-content flex-1">
                    <router-view></router-view>
                </div>
        </Row>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                spanLeft: 5,
                spanRight: 19,
                activeName: 'sensorMap',
                routers: [{
                    icon: 'ios-navigate',
                    path: 'sensorMap',
                    name: '热力图',
                    router: 'sensor-map'
                },
                {
                    icon: 'ios-navigate',
                    path: 'dotMap2',
                    name: '点图1',
                    router: 'dot-map2'
                },
                  {
                    icon: 'ios-navigate',
                    path: 'dotMap6',
                    name: '点图2',
                    router: 'dot-map6'
                },
                 {
                    icon: 'ios-navigate',
                    path: 'dotMap7',
                    name: '点图3',
                    router: 'dot-map7'
                },
                {
                    icon: 'ios-navigate',
                    path: 'dotMap1',
                    name: '气泡图1',
                    router: 'dot-map1'
                }
                ,{
                    icon: 'ios-navigate',
                    path: 'dotMap3',
                    name: '气泡图2',
                    router: 'dot-map3'
                },
                {
                    icon: 'ios-navigate',
                    path: 'dotMap4',
                    name: '气泡图3',
                    router: 'dot-map4'
                },
                {
                    icon: 'ios-navigate',
                    path: 'dotMap5',
                    name: '气泡图4',
                    router: 'dot-map5'
                },
              
                {
                    icon: 'ios-navigate',
                    path: 'gridMap',
                    name: '网格1',
                    router: 'gridMap'
                },
                 {
                    icon: 'ios-navigate',
                    path: 'gridMap2',
                    name: '网格2',
                    router: 'gridMap2'
                },
                {
                    icon: 'ios-navigate',
                    path: 'honeyMap',
                    name: '蜂窝',
                    router: 'honeyMap'
                },
                 {
                    icon: 'ios-navigate',
                    path: 'boundMap1',
                    name: '围栏1',
                    router: 'boundMap1'
                },
                 {
                    icon: 'ios-navigate',
                    path: 'boundMap2',
                    name: '围栏2',
                    router: 'boundMap2'
                },
                 {
                    icon: 'ios-navigate',
                    path: 'boundMap3',
                    name: '围栏3',
                    router: 'boundMap3'
                },
                 {
                    icon: 'ios-navigate',
                    path: 'boundMap4',
                    name: '围栏4',
                    router: 'boundMap4'
                },
                 {
                    icon: 'ios-navigate',
                    path: 'boundMap5',
                    name: '围栏5',
                    router: 'boundMap5'
                },
                 {
                    icon: 'ios-navigate',
                    path: 'boundMap6',
                    name: '围栏6',
                    router: 'boundMap6'
                }
                ]
            }
        },
        computed: {
            iconSize () {
                return this.spanLeft === 5 ? 14 : 24;
            }
        },
        methods: {
            toggleClick () {
                if (this.spanLeft === 5) {
                    this.spanLeft = 2;
                    this.spanRight = 22;
                } else {
                    this.spanLeft = 5;
                    this.spanRight = 19;
                }
            },
            changeMenu(active){
                this.$router.push({
                    path: '/' + active
                })
            }
        }
    }
</script>