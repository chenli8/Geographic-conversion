import axios from 'axios';
import env from '../config/env';

let util = {

};
util.title = function(title) {
    title = title ? title + ' - Home' : 'iView project';
    window.document.title = title;
};

util.toFormData = function(data){
	let params = new URLSearchParams();

	for(let k in data){
		params.append(k, data[k]);
	}

	return params
}


const ajaxUrl = 'http://192.168.1.200:8000';


// util.ajax = axios.create({
//     baseURL: ajaxUrl,
//     timeout: 30000,
//     transformRequest: function(data, headers) {
// 	    return util.toFormData(data)
// 	},
//     headers: {
// 		'Content-Type': 'application/x-www-form-urlencoded'
// 	}
// });


util.ajax = axios.create({
    baseURL: '',
    timeout: 30000,
    transformRequest: function(data, headers) {
	    return util.toFormData(data)
	}
});


export default util;