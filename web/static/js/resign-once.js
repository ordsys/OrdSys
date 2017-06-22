var num = 60,
	t;
var USER_LOGIN_USER_NAME = 'login_userName_app';
var USER_LOGIN_PASS_WORD = 'login_passWord_app';
var IS_REM_USER = 'isRem';
var isFromReward = false; //是否来自打赏页面
var isFromPrint = false; //是否来自趣印像页面
$(document).ready(function() {
	loadAllimg();
});
$(".mui-action-back").on("tap",function(){
	maiDianStatistics($(this));
})
function loadAllimg() {
	//门店详情所有图片
	var imgData = {
			'img_loginlogo': 'img/loginlogo.png',
			'img_resignIcon_03': 'img/resignIcon_03.png',
			'img_pwd': 'img/pwd.png',
			'img_resignIcon_08': 'img/resignIcon_08.png'
		}
		//调用切片加载的方法
	loadSectionImg(imgData);
	$(".wrapperBox").css("background", 'url(' + img_section_url + 'img/loginBg.png) no-repeat');
}

$('#but_register').on('click', function() {
	if(!checkData())
		return;

	if(!codeReg()) {
		return;
	}

	registerByCode($('#resgiterPhone').val(), $('#resgiterPassword').val(), $('#resgiterCode').val());
});

function checkData() {
	var result = false;
	if(!checkMobile($('#resgiterPhone').val())) {
		mui.toast('手机号码格式错误');
		return result;
	}

	if($('#resgiterPassword').val() == '') {
		mui.toast('密码不能为空');
		return result;
	}

	if(!pwdReg()) {
		return result;
	}

	if("false" === $('.dian').attr('attr-data')) {
		mui.toast('您还没有阅读《会员须知》');
		return result;
	}

	result = true;

	return result;
}

var getCode = function() {
	if(!checkData())
		return;

	$('#code_getting').off('click');
	t = setInterval('timeInterval()', 1000);

	var data = {
		uri: 'validateCode',
		phone: $('#resgiterPhone').val()
	};
	networkRequest(GET_VERIFY_CODE_ACTION, data, null, true,
		function success(response) {
			log(response);
			if($('#codePhone').val() == '') {
				mui.toast('请输入手机号码'); // 请输入手机号码
				// $('#code_getting').removeClass('hui');
				return false;
			} else {
				var returncode = response.body[0].returncode;
				if(returncode == '0') {
					mui.toast('验证码已成功发送'); // 验证码已成功发送
				} else {
					mui.toast('验证码已超过每日最大限'); // 验证码已超过每日最大限
				}
			}
		},
		function error(xhr, type, errorThrown) {
			mui.toast('获取验证码失败'); // 获取验证码失败
		}
	);
}

// 绑定获取验证码
$('#code_getting').bind('click', getCode);

/*
 *根据验证码注册
 */
function registerByCode(phone, password, code) {
	getLoadding();

	var data = {
		phone: phone,
		password: password,
		code: code
	};
	networkRequest(REGISTER_BY_CODE_ACTION, data, null, true,
		function success(response) {
			closeLoadding();
			if(response){
				if(response.resultData){
					if(response.resultData.body.result.resultCode) {
						if(response.resultData.body.result.resultCode == '412') {
							mui.toast('该号码已注册');
						} else if(response.resultData.body.result.resultCode){
							mui.toast('注册失败:'+response.resultMessage.messageText);
						}else {
							mui.toast('注册失败');
						}
					}else{
						mui.toast('注册失败!');
					}
				}else{
					if(response.resultMessage){
						if(response.resultMessage.messageCode == '0000') {
							mui.alert('注册成功!', '消息提示', function() {
//								window.location.replace('resign-login.html?sourcePara=' + getQueryString('sourcePara'));
								login(phone, password);
							});
						}else if(response.resultMessage.messageCode == '9991'){
							mui.toast('注册失败:请检查手机号或验证码是否正确!');
						}else{
							mui.toast('注册失败:'+response.resultMessage.messageText);
						}
					}else{
						mui.toast('注册失败!');
					}
				}
			}else{
				mui.toast('服务器异常,注册失败！');
			}
		},
		function error(xhr, type, errorThrown) {
			closeLoadding();
			mui.toast('注册失败');
		}
	);
}

function timeInterval() {
	if(num == 0) {
		$('#code_getting').html('获取验证码');
		num = 60;
		clearInterval(t);
		$('#code_getting').bind('click', getCode);
	} else {
		$('#code_getting').html(num + " s");
		$('#code_getting').attr("disabled", true);
		num--;
	}

}

function checkMobile(s) {
//	var regu = /^[1][34578][0-9]{9}$/;
	var regu = /^\d{8,12}$/;
	var re = new RegExp(regu);
	if(re.test(s)) {
		return true;
	} else {
		return false;
	}
}
//会员须知按钮可以多次点击
$(".anniu").on("click", function() {
	var attrAn = $(this).find(".dian").attr("attr-data");
	if(attrAn == "false") {
		$(this).find(".dian").css("display", "block");
		$(this).find(".dian").attr("attr-data", "true")
	} else if(attrAn == "true") {
		$(this).find(".dian").css("display", "none");
		$(this).find(".dian").attr("attr-data", "false")
	}
})

$('#resign').click(function() {
	window.location.href = '/user/login?sourcePara=' + getQueryString('sourcePara');
});

$('#Hyuan').on('tap', function() {
	window.location.href = './personl/memberNotice.html';
})

function pwdReg() {
	//验证密码
	var pwdreg = /^[0-9a-zA-Z]{6,16}$/;
	var yz = new RegExp(pwdreg);
	if(!yz.test($('#resgiterPassword').val())) {
		mui.toast("密码设置有误!");
		return false;
	};
	return true;

}

function codeReg() {
	var codereg = /^[0-9]{6}$/;
	var yz = new RegExp(codereg);
	if(!yz.test($('#resgiterCode').val())) {
		mui.toast("验证码格式有误!");
		return false;
	};
	return true;
}

//微信适配
if(isWeiXin()) {
	$(".topNull").css({
		"height": "145px"
	});
	$(".topNull").find("img").css("margin-top", "12%")
	$("#resign").css("margin-top", "27px")
	$("body").css({
		"position": "relative"
	});
	$(".sign").css({
		"position": "absolute",
		"top": "0"
	});
	$(".wrapperBox").css({
		"position": "absolute",
		"bottom": "0"
	});

};

closeLoadding();