function storageCustomerStorage(result) {
	var customer = new Object();
	customer.customerKey1 = result.customerKey1;
	customer.customerKey2 = result.customerKey2;
	customer.token = result.token;
	customer.customerId = result.customerId;
	//	customer.mobile = result.mobile;
	//	customer.logo = result.logo;

	//	customer.userName = result.userName;
	//	var imgUrl = result.logo;
	//	if(imgUrl){
	//		var imgArray = imgUrl.split("haidilao");
	//		if(imgArray.length >1){
	//			customer.logo = WEBROOT_SNS+imgArray[1];
	//		}
	//	}
	var str = JSON.stringify(customer);
	window.localStorage.setItem("lastloginsession", result.sessionid);
	window.localStorage.setItem(customer_cachekey, str);
}
/**
 * 支付宝登陆
 * @param {Object} alipayUserId
 * @param {Object} isSuccess
 * @param {Object} baseUrl
 * @param {Object} locationSearch
 * @param {Object} sourceUrl
 */
function alipayValidateLogin(alipayUserId, isSuccess, baseUrl, locationSearch, sourceUrl) {
	var data = {
		'alipayUserId': alipayUserId
	};
	if(isCustomerNull()) { //未登陆状态
		networkRequest(ALIPAY_LOGIN_ATCION, data, null, null, function(response) {
			if(response.status == "success") {
				storageCustomerStorage(response);
				storageUserInfo2Customer(function() {
					if(isSuccess) {
						isSuccess();
					}
				});
			} else {
				window.location.href = baseUrl + 'bindOtherLogin.html' + locationSearch + '&oauthId=alipay&sourceUrl=' + sourceUrl;
			}
		}, null);
	} else {
		if(isSuccess) {
			isSuccess();
		}
	}
}

/**
 * 登录后请求sns到个人中心数据
 * @param {Object} gotoPage
 */
function storageUserInfo2Customer(gotoPage) {
	var customer = window.localStorage.getItem(customer_cachekey);
	var customer_json = JSON.parse(customer);
	if(customer_json.entityId && customer_json.entityId != '') {
		//已经缓存
	} else {
		var customerkey = getCustomereEncryKey(),
			data = {
				inJson: requestForService(customerkey)
			};

		$.ajax({
			type: "post",
			dataType: "json",
			data: data,
			url: SNS_QUERY_USER_INFO,
			success: function(result) {
				var code = result.code;
				if(code == '0') {
					storeUserInfo(customer, result.data);
				}
				getUserTagInfo(gotoPage);
			},
			error: function() {
				closeLoadding();
				clearLocalStorageCustomer();
			}
		});
		//		networkRequest(SNS_QUERY_USER_INFO, data, null, true, function(result) {
		//			var code = result.code;
		//			if(code == '0') {
		//				storeUserInfo(customer, result.data);
		//			}
		//			getUserTagInfo(gotoPage);
		//		}, function(xhr, type, errorThrown) {
		//			closeLoadding();
		//			clearLocalStorageCustomer();
		//		});
	}
}

/*
 * 用户名和密码登录
 */
function login(userName, passWord) {
	/* longing */
	getLoadding();

	var data = {
		username: userName,
		password: passWord,
		loginType: '1'
	};
	networkRequest(CATER_LOGIN_URL, data, null, true, function success(response) {
		log("登录成功");
		if(response.message == "success") {
			localUserInfoCustomer(response, 1, userName, passWord);
		} else {
			mui.toast(response.message);
			closeLoadding();
		}
	}, function error(xhr, type, errorThrown) {
		closeLoadding();
		mui.toast("登录失败");
	});
};
//获取用户标签
function getUserTagInfo(gotoPage) {
	var data = {};
	ajaxAsyncTokenPost(CATER_TAG_FIND_URL, data, function(result) {
		if(result != null && result.resultMessage != null && result.resultMessage.messageCode != "") {
			var code = result.resultMessage.messageCode;
			if(code == '0000') {
				var taglist = result.resultData.body.result;
				storeUserInfoTag(window.localStorage.getItem(customer_cachekey), taglist);
			}
			//隐藏等待 状态图标
			closeLoadding();
			gotoPage();
		} else {
			gotoPage();
			closeLoadding();
		}
	});
}

function localUserInfoCustomer(result, index, userName, passWord) {

	if(index == 1) {
		if($('.dian').attr('attr-data') == "true") {
			window.localStorage.setItem(USER_LOGIN_USER_NAME, userName);
			window.localStorage.setItem(USER_LOGIN_PASS_WORD, passWord);
			window.localStorage.setItem(IS_REM_USER, "true");
		} else {
			window.localStorage.removeItem(USER_LOGIN_USER_NAME);
			window.localStorage.removeItem(USER_LOGIN_PASS_WORD);
			window.localStorage.removeItem(IS_REM_USER);
		}
	}
	storageCustomerStorage(result);
	storageUserInfo2Customer(function() {
		if(isFromReward) {
			window.location.href = WAP_CATER_LOGIN_URL + '?data=' + getRequestPara().data +
				'&openid=' + getRequestPara().openid + '&userPhone=' + getCustomerMobile();
		} else if(isFromPrint) {
			window.location.href = GO_TO_QYX_PRINT_URL;
		} else {
			gotoJumpPage('');
		}
	});
}

function requestForService(customerkey, sex, nickName, pwd, newPwd) {
	var req = {
			'req_device': 'iphone',
			'language': 1
		},
		request = {
			'customerKey': customerkey,
			'req': req
		};
	if(sex != null) {
		request.sex = sex;
	}
	if(nickName != null) {
		request.nickName = nickName;
	}
	if(pwd != null) {
		request.pwd = pwd;
	}
	if(newPwd != null) {
		request.newPwd = newPwd;
	}
	var req_str = JSON.stringify(request);
	return req_str;
}