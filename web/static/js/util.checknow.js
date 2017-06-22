/** 在localstorage中的customer增加个人信息(头像，昵称，性别) */
function storeUserInfo(customer,data){
	var customer_json = JSON.parse(customer);
	if(data){
		if(data.logo!=null && data.logo!= ''){
		 	customer_json.logo = WEBROOT_SNS + data.logo;
		}else{
			customer_json.logo = "";
		}
		if(data.nickName!=null && data.nickName!= ''){
			customer_json.nickName = data.nickName;
		}else{
			delete customer_json.nickName;
		}
	    if(data.sex!=null){
	    		customer_json.sex = data.sex;
	    }else{
			delete customer_json.sex;
		}
	    if(data.mobile!=null && data.mobile!= ''){
	    		customer_json.mobile = data.mobile;
	    }else{
			delete customer_json.mobile;
		}
	    if(data.level!=null && data.level!= ''){
	    		customer_json.level = data.level;
	    }else{
			delete customer_json.level;
		}
	    if(data.entityId!=null && data.entityId!= ''){
	    		customer_json.entityId = data.entityId;
	    }else{
			delete customer_json.entityId;
		}
	    if(data.pwd!=null){
	    		customer_json.pwd = data.pwd;
	    }else{
			delete customer_json.pwd;
		}
	}
	var str = JSON.stringify(customer_json);
	window.localStorage.setItem(customer_cachekey, str);
	return customer_json;
}
/** 更新在localstorage中的customer(性别和标签) */
function updateUserInfoSexTag(customer,sex,tagmap){
	var customer_json = JSON.parse(customer);
	 if(sex!=null){
    		customer_json.sex = sex;
    }
	if(tagmap!=null && tagmap.values()){
		var tagarray = tagmap.values();
		var taginfo = '';
		for(var i = 0; i < tagarray.length; i++) {
			taginfo = taginfo + tagarray[i] + ",";
		}
		customer_json.taginfo = taginfo;
	}
	var str = JSON.stringify(customer_json);
	window.localStorage.setItem(customer_cachekey, str);
}
/** 更新在localstorage中的customer(昵称) */
function updateUserInfoNickName(customer,nickName){
	var customer_json = JSON.parse(customer);
	if(nickName!=null && nickName!= ''){
		customer_json.nickName = nickName;
	}
	var str = JSON.stringify(customer_json);
	window.localStorage.setItem(customer_cachekey, str);
}
/** 在localstorage中的customer增加个人标签信息 */
function storeUserInfoTag(customer,taglist){
	var customer_json = JSON.parse(customer);
	var taginfo = '';
	if($.isEmptyObject(taglist) || taglist.length == 0){
	}else{
		for(var i = 0; i < taglist.length; i++) {
			taginfo = taginfo + taglist[i].tagname + ",";
		}
	}
	customer_json.taginfo = taginfo;
	var str = JSON.stringify(customer_json);
	window.localStorage.setItem(customer_cachekey, str);
}
//判断是否为ios9及以下系统
function isPhoneIOS9(){
	if((navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i))){
		var ver = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);  
		if(parseInt(ver[1], 10) <= 9){
			return true;
		}
		return false;
	}
	return false;
}

