var USER_LOGIN_USER_NAME = 'login_userName_app';
var USER_LOGIN_PASS_WORD = 'login_passWord_app';
var IS_REM_USER = 'isRem';
var num = 60,
	t, login_userName_app, login_userPass_app, isRem = false;
// CACHE_LOGIN_CHOICE_WAY = 'login.choic.way'
var isFromReward = false; //是否来自打赏页面
var isFromPrint = false; //是否来自趣印像页面

$(document).ready(function() {
	//登陆操作
	var alipayUserData = JSON.parse(sessionStorage.getItem('alipayUserData'));
	if(alipayUserData && alipayUserData.alipayUserId) {
		alipayValidateLogin(alipayUserData.alipayUserId, function() {
			var urlSearch = '?storeId='+alipayUserData.storeId+'&source='+
			alipayUserData.source+'&alipayUserId='+
			alipayUserData.alipayUserId+'&marketType='+alipayUserData.marketType;
			if(alipayUserData.sourceUrl == '1'){//排号
				window.location.href = 'reservation/queueFillout.html'+urlSearch;
			}else{//订餐
				window.location.href = 'reservation/fillout.html'+urlSearch;
			}
		}, '', location.search, alipayUserData.sourceUrl);
	} else {
		initPageData();
	}
});

function initPageData() {
	loadAllimg();
	login_userName_app = window.localStorage.getItem(USER_LOGIN_USER_NAME);
	login_userPass_app = window.localStorage.getItem(USER_LOGIN_PASS_WORD);
	isRem = window.localStorage.getItem(IS_REM_USER);
	$('#phone').val(login_userName_app);
	$('#password').val(login_userPass_app);
	if(isRem == "true") {
		$('.dian').attr('attr-data', "true").css({
			display: "block"
		});
	}
	closeLoadding();
	//初始化是否打赏判断
	isFromReward = getRequestPara().to == 'interactive';
	//初始化是否来自趣印像判断
	isFromPrint = getRequestPara().to == 'point'; //to=point
}

function loadAllimg() {
	//门店详情所有图片
	var imgData = {
			'img_login_logo': 'img/loginlogo.png',
			'img_user1': 'img/user1.png',
			'img_pwd': 'img/pwd.png',
			'img_qq': 'img/QQ.png',
			'img_wect': 'img/wect.png',
			'img_qq2': 'img/QQ.png',
			'img_wect2': 'img/wect.png',
			'img_resignIcon_03': 'img/resignIcon_03.png',
			'img_resignIcon_08': 'img/resignIcon_08.png',
			'img_sad': 'img/sad.png'
		}
		//调用切片加载的方法
	loadSectionImg(imgData);
	$(".wrapperBox").css("background", 'url(' + img_section_url + 'img/loginBg.png) no-repeat');
}

/*
 * $('.borderBottom .mui-control-item').on('click', function(){
 * localStorage.setItem(CACHE_LOGIN_CHOICE_WAY, $(this).attr('href')); });
 */
// 返回监听
$('.resign_login_go_back').on('touchstart', function() {
	maiDianStatistics($(this));
	gobackSourcePage('');
});
if(isWeiXin()) {
	pushHistory();
	window.addEventListener("popstate", function(e) {
		if(!isZhiFuBao() && !isPhoneIOS9()) {
			if(isFromReward || isFromPrint) {
				window.history.back(); //打赏页面需要返回特殊处理
			} else if(sessionStorage.getItem('weChatPara') == 'weChat') {
				gobackWeChatHomePage(''); //预点餐页面特殊处理
			} else {
				gobackSourcePage('');
			}
		}
	}, false);
	$('.otherLogin').hide();
}

var auths = {};
// 获取登录认证通道
function plusReady() {
	plus.oauth.getServices(function(services) {
		var txt = "登录认证通道信息：";
		for(var i in services) {
			var service = services[i];
			auths[service.id] = service;
		}
	}, function(e) {
		log("获取登录认证失败：" + e.message);
	});
}
document.addEventListener('plusready', plusReady, false);

// 注销登录
function logoutAll() {
	log("----- 注销登录认证 -----");
	for(var i in auths) {
		logout(auths[i]);
	}
}

function logout(auth) {
	auth.logout(function() {
		log("注销\"" + auth.description + "\"成功");
	}, function(e) {
		log("注销\"" + auth.description + "\"失败：" + e.message);
	});
}

// 登录认证
function otherLoginOauth(id) {
	var url = '';
	if('qq' == id) { //QQ
		url = QQ_LOGIN_ACTION;
	} else if('sinaweibo' == id) { //:新浪微博
		mui.toast('亲,新浪微博暂未实现!');
		return;
	} else if('weixin' == id) { //微信
		url = WEIXIN_LOGIN_ACTION;
	} else {
		mui.toast('亲,系统出错啦!');
		return;
	}
	var auth = auths[id];
	if(auth) {
		getLoadding();
		document.addEventListener("pause", function() {
			setTimeout(function() {
				closeLoadding();
			}, 2000);
		}, false);
		auth.login(function() {
			closeLoadding();
			otherUserInfo(auth, url, id);
		}, function(e) {
			closeLoadding();
			log("登录认证失败：");
		});
	} else {
		log("无效的登录认证通道！");
	}
}
// 获取用户信息
function otherUserInfo(auth, url, oauthId) {
	getLoadding();
	auth.getUserInfo(function() {
		var nickname = auth.userInfo.nickname || auth.userInfo.name;
		sessionStorage.setItem('auth_userInfo', JSON.stringify(auth));
		var data = {
			nickname: nickname,
			openid: auth.authResult.openid
		};
		networkRequest(url, data, null, false,
			function success(result) {
				log('result=' + JSON.stringify(result));
				if(result.code == "personindex") {
					storageCustomerStorage(result);
					getLoadding();
					storageUserInfo2Customer(function() {
						closeLoadding();
						gotoJumpPage('');
					});
				} else if(result.code == "personregister") {
					if(location.search && location.search != '') {
						log('123&oauthId=' + oauthId);
						window.location.href = "bindOtherLogin.html" + location.search + '&oauthId=' + oauthId;
					} else {
						log('321&oauthId=' + oauthId);
						window.location.href = "bindOtherLogin.html?oauthId=" + oauthId;
					}
				}
				closeLoadding();
			},
			function error(xhr, type, errorThrown) {
				closeLoadding();
				mui.toast('亲,系统出错啦!'); // 获取验证码失败
			}
		);

	}, function(e) {
		log("获取用户信息失败：");
		log("[" + e.code + "]：" + e.message);
		plus.nativeUI.alert("获取用户信息失败！", null, "登录");
	});
}

$(".qqLogin").on("touchend", function() {
	otherLoginOauth('qq');
});
$(".wcLogin").on("touchend", function() {
	otherLoginOauth('weixin');
});

// 绑定验证函数
$("#btnmu").on("click", function() {
	var codePhone = $("#codePhone").val(),
		code = $("#code").val();
	if(!checkMobile(codePhone)) {
		mui.toast("手机号码格式错误");
		return;
	}
	if($.isEmptyObject(codePhone) || $.isEmptyObject(code)) {
		mui.toast("手机号或者验证码不能为空"); // 请手机号或者验证码不能为空手机号码
		return false;
	} else {
		localStorage.setItem("loginUserPhone", $("#codePhone").val());
		window.localStorage.setItem("appLoginUserPhone",
			$("#codePhone").val());
		window.localStorage.setItem("appLoginUserDate", (new Date())
			.valueOf());
		loginByCode(code);
	}
});
// 绑定获取验证码
$('#code_getting').on("click", function() {
	if(!checkMobile($("#codePhone").val()) || $("#codePhone").val() == "") {
		mui.toast("手机号码格式错误");
	} else {
		$('#code_getting').attr("disabled", true);
		t = setInterval("timeInterval()", 1000);

		var data = {
			uri: 'validateCode',
			phone: $("#codePhone").val()
		};
		networkRequest(GET_VERIFY_CODE_ACTION, data, null, true,
			function success(response) {
				if($("#codePhone").val() == "") {
					mui.toast("请输入手机号码"); // 请输入手机号码
					return false;
				} else {
					var returncode = response.body[0].returncode;
					if(returncode == "0") {
						mui.toast("验证码已成功发送"); // 验证码已成功发送
					} else {
						mui.toast("验证码已超过每日最大限"); // 验证码已超过每日最大限
					}
				}
			},
			function error(xhr, type, errorThrown) {
				mui.toast("获取验证码失败"); // 获取验证码失败
			}
		);
	}
});

$("#login").on("click", function() {
	if(!checkMobile($("#phone").val())) {
		mui.toast("手机号码格式错误");
		return;
	}
	if($("#phone").val() == "" || $("#password").val() == "") {
		mui.toast("请输入手机号和密码");
		return false;
	} else {
		localStorage.setItem("loginUserPhone", $("#phone").val());
		if($('#rmPassword').val() == 'on') {
			localStorage.setItem("appLoginUserPhone", $("#phone").val());
			localStorage.setItem("appLoginUserpassword", $("#password").val());
		}
		login($("#phone").val(), $("#password").val());
	}
});
//去注册
$('.mui-navigate-right').click(function() {
	window.location.href = "/user/register";
});

/* 登录 */
function loginByCode(phoneCode) {
	/* longing */
	getLoadding();

	var data = {
		phone: $("#codePhone").val(),
		phonecode: phoneCode,
		loginType: '9',
		wapver: '3'
	};
	networkRequest(PHONE_AND_CODE_LOGIN_ACTION, data, null, true,
		function success(data) {
			log("验证码登录成功:" + JSON.stringify(data));
			if(data.returncode == "1") {
				localUserInfoCustomer(data, 2, '', '');
				closeLoadding();
				return;
			} else if(data.returncode == "-2") {
				mui.toast(data.returnmsg);
				closeLoadding();
				return;
			} else if(data.returncode == "-1") {
				var backdropS = '<div class="mui-backdrop" style="display: block;"></div>';
				$('body').append(backdropS);
				$('#gotoRegister').show();

				mui('.public-alert').on('tap', '.button-bottom-right', function() {
					window.location.href = "/user/register";
				});
				mui('.public-alert').on('tap', '.button-bottom-left', function() {
					$('.mui-backdrop').remove();
					$('#gotoRegister').hide();
				});
				closeLoadding();
				return;
			} else {
				mui.toast("请求失败");
				closeLoadding();
			}
		},
		function error(xhr, type, errorThrown) {
			closeLoadding();
			mui.toast("登录失败");
		});
}

function checkMobile(s) {
//	var regu = /^\d{11}$/;
	var regu = /^\d{8,12}$/;
	var re = new RegExp(regu);
	if(re.test(s)) {
		return true;
	} else {
		return false;
	}
}

function timeInterval() {
	if(num == 0) {
		$('#code_getting').html('获取验证码');
		num = 60;
		//		onClick();
		$('#code_getting').attr("disabled", false);
		clearInterval(t);
	} else {
		$('#code_getting').html(num + " s");
		num--;
	}
}

// 点击会员须知进入会员须知页面
$("#Hyuan").on("tap", function() {
	window.location.href = "huiYuan.html";
});
$("#Hyuan").on("tap", function() {
	window.location.href = "huiYuan.html";
});
// 点击忘记密码进入忘记密码界面
$(".forPwd").on("tap", function() {
	window.location.replace("forgetPwd.html?sourcePara=" + getRequestPara().sourcePara);
});
// 当点击确认时判断是否密码相同
$("#confirmBtn").on("click", function() {
	if($("#newPwd").val() == "" || $("#repeatPwd").val() == "") {
		mui.toast("新旧密码不能为空");
	} else {
		if($("#newPwd").val() == $("#repeatPwd").val()) {
			var modifyPwdPhone = window.sessionStorage
				.getItem("modifyPwdPhone");
			modifyPwdByPhone(modifyPwdPhone, $("#newPwd").val());
		} else {
			mui.toast("您输入的两次密码不一致！");
		}
	}

});

/*
 * //找回密码 $("#zhmm").on("click", function() { if(!checkMobile($("#pwd").val())){
 * mui.alert("手机号码格式错误"); return false; } if ($("#pwd").val() == "" ||
 * $("#yzm").val() == "") { mui.alert("请输入手机号和验证码"); return false; } else {
 * login($("#pwd").val(), $("#yzm").val()); }
 * 
 * });
 */
/* mui('#code_getting').off('click'); */
/*
 * $("#rmPassword").off('click').on("click",function(){
 * 
 * var isflag=true; if($(this).attr("checked")){ mui.alert(1); } })
 */
// 记住密码按钮可以多次点击
$(".remPwd").on("click", "label", function() {
	var attrAn = $(this).siblings(".anniu").find(".dian").attr("attr-data");
	if(attrAn == "false") {
		$(this).siblings(".anniu").find(".dian").css("display", "block");
		$(this).siblings(".anniu").find(".dian").attr("attr-data", "true")
	} else if(attrAn == "true") {
		$(this).siblings(".anniu").find(".dian").css("display", "none");
		$(this).siblings(".anniu").find(".dian").attr("attr-data", "false");
	}
});

$(".anniu").on("click", function() {
	var attrAn = $(this).find(".dian").attr("attr-data");
	if(attrAn == "false") {
		$(this).find(".dian").css("display", "block");
		$(this).find(".dian").attr("attr-data", "true")
	} else if(attrAn == "true") {
		$(this).find(".dian").css("display", "none");
		$(this).find(".dian").attr("attr-data", "false");
	}
});

/**
 * 修改密码
 */
function modifyPwdByPhone(phone, pwd) {
	getLoadding();

	var data = {
		phone: phone,
		pwd: pwd
	};
	networkRequest(UPDATE_PWD_ACTION, data, null, true, function success(data) {
		closeLoadding();
		if(data.resultMessage.messageCode == '0000') {
			mui.alert('密码修改成功!', '消息提示', function() {
				window.location.replace("resign-login.html?sourcePara=" + getRequestPara().sourcePara);
			});
		} else {
			mui.toast("密码修改失败");
		}
	}, function error(xhr, type, errorThrown) {
		closeLoadding();
		mui.toast("密码修改失败");
	});
}

function storageQQCustomerStorage(result) {
	if(result.code == "personindex") {
		storageCustomerStorage(result);
		storageUserInfo2Customer(function() {
			gotoJumpPage('');
		});
	} else if(result.code == "personregister") {
		window.location.href = "thirdlogin_qq.html" + location.search;
		closeLoadding();
	}
}

function storageWeixinCustomerStorage(result) {
	if(result.code == "personindex") {
		storageCustomerStorage(result);
		storageUserInfo2Customer(function() {
			gotoJumpPage('');
		});
	} else if(result.code == "personregister") {
		window.location.href = "thirdlogin_weixin.html" + location.search;
	}
}
//微信适配
if(isWeiXin()) {
	if(!isZhiFuBao()) {
		$(".topNull").css({
			"height": "145px"
		});
		$(".topNull").find("img").css("margin-top", "11%")
		$(".zhuce").css("margin-top", "22px");
		$("body").css({
			"position": "relative"
		});
		$(".loginWrapper").css({
			"position": "absolute",
			"top": "0"
		});
		$(".wrapperBox").css({
			"position": "absolute",
			"bottom": "0"
		});
	}
}