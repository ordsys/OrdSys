// 图片提交
var imgtype = 'jpg',
	url_customer_info = '',
	url_customer_updateheadimg = '',
	url_customer_updateinfo = '',
	tagmap,
	haspwd = "1";

function getUploadImgServiceString(customerkey, picture, imgType) {	//保存
	var req = {
		'req_device': 'iphone',
		'language': 1
	}
	var request = {
		'customerKey': customerkey,
		'req': req
	}
	if(picture != null) {
		request.picture = picture;
	}
	if(imgType != null) {
		request.imgType = imgType;
	}
	var req_str = JSON.stringify(request);
	return req_str;
}
//
$(function() {
	$('#head').delegate('#s_dpage', 'tap', function() {  //点击图片
		//$('.htmleaf-container').fadeIn(300);
		//$('#dpage').addClass('show');
		$('#alert-select').show();
		$('.mui-backdrop').show();
	});
	$('#alert-select').delegate('button', 'tap', function(){
		$('#alert-select').hide();
		$('.mui-backdrop').hide();
	})
	// var obUrl = ''
	$('#clipArea').photoClip({
		width: 280,
		height: 280,
		file: '#file',
		view: '#view',
		ok: '#clipBtn',
		loadStart: function() {
			log('照片读取中');
		},
		loadComplete: function() {
			log('照片读取完成');
			$('#alert-select').hide();
			$('.mui-backdrop').hide();
			$('.htmleaf-container').fadeIn(300);
			$('#dpage').addClass('show');
		},
		clipFinish: function(dataURL) {
			//log(dataURL);
			$('#head').empty();
			$('#head').append('<img src="' + imgsource + '" align="absmiddle" style="width:100%;">');
			$('#head').append('<img id="s_dpage" src="'+img_section_url+'img/personal/information/camera.png" class="personl-camera">');
			$('.htmleaf-container').hide();
			$('#dpage').removeClass('show');
			cutimgafter();
		}
	});

});

function cutimgafter() {	//保存
	var customerkey = getCustomereEncryKey();
	var data = {
		inJson: getUploadImgServiceString(customerkey, imgsource, imgtype)
	};
	getLoadding();
	networkRequest(SNS_UPLOAD_HEAD_IMG, data, null, true, function(result) {
		if(result.code == "0") {
			//清空用户信息
			storeUserInfo(window.localStorage.getItem(customer_cachekey), {});
			maiDianStatistics($('#clipBtn'));
		}
		closeLoadding();
	}, null);
}

function operaterImg(uploadresult) {
	if(uploadresult) {
		$('#head').empty();
		$('#head').append('<img src="' + imgsource + '" align="absmiddle" style="width:100%;">');
		$('#head').append('<img id="s_dpage" src="'+img_section_url+'img/personal/information/camera.png" class="personl-camera">');
		$('.htmleaf-container').hide();
		$('#dpage').removeClass('show');
	} else {
		mui.toast('头像上传失败，请重新上传!');
		$('.htmleaf-container').fadeIn(300);
		$('#dpage').addClass('show');
	}
}

require.config({
	// baseUrl:'/',
	shim: {

	},
	paths: {
		'jquery': '../jquery-1.11.1.min',
		'mui': '../mui.min'
	}
});
require(['jquery', 'mui'], function($, mui) {
	//图片
	var imgData ={
		'headimg' : 'img/personal/personal-mohead.png',
		's_dpage' : 'img/personal/information/camera.png',
		'customer_sexy_girl':'img/personal/information/dheckbox2.png',
		'customer_sexy_boy' :'img/personal/information/dheckbox2.png',
		'img_close_icon' : 'img/icon/close.png'
	}
	//调用切片加载的方法
    loadSectionImg(imgData);
	var opration = {
		/**
		 * 初始化操作
		 */
		init: function() {
			this.mmui.init();
			this.mmui.bindBtn();
			// 加载个人信息
			this.loadPersonalInfomation();
			//个人标签map
			tagmap = new HashMap();
			// 先加载个人标签 在加载全部标签 在加载全部全部标签的时候过滤掉个人标签
			this.loadPersonalTagData();
		},
		updateCustomerTagInfo: function(tagmap,resultFun,errerFun) {
			var tagarray = tagmap.keys(),
				tagobj = [],
				obj;
			for(var i = 0; i < tagarray.length; i++) {
				obj = {};
				obj.tagid = tagarray[i];
				tagobj.push(obj);
			}
			var tagStr = JSON.stringify(tagobj),
				customerkey = getCustomerKey(),
				data = {
					'customerkey': customerkey,
					'tag': tagStr
				};
			ajaxTokenPost(CATER_TAG_MERGE_URL, data, function(result) {
				closeLoadding();
				if(result.resultMessage.messageCode == '0000') {
					resultFun();
					//更新缓存中数据
					updateUserInfoSexTag(window.localStorage.getItem(customer_cachekey),null,tagmap);
				}else{
					errerFun();
				}
			});
		},
		updateCustomerSexy: function(sexy,resultFun,errorFun) {
			getLoadding();
			//点击保存按钮保存修改信息
			customerkey = getCustomereEncryKey(),
			data = {
				inJson: opration.requestForService(customerkey, sexy, null, null, null)
			};
			//修改客户性别
			networkRequest(SNS_UPDATE_USER_INFO, data,null,true, function(result) {
				closeLoadding();
				if(result && result.code == '0') {
					updateUserInfoSexTag(window.localStorage.getItem(customer_cachekey),sexy,null);
					resultFun();
				}else{
					errorFun();
				}
			}, function(xhr, type, errorThrown){
				errorFun();
				closeLoadding();
			});
		},
		mmui: {
			init: function() {
				mui.init();
			},
			bindBtn: function() {
				//保存用户信息(男女，标签等)
				/*document.getElementById('user_info_sure_btn').addEventListener('touchstart', function(event) {
					opration.updateCustomerInfo();
				});*/
				// 返回
				$('body').on('tap', '.go-perIndex', function() {
					window.location.href = '/homepage/personal';
				});
				// 昵称修改
				$('body').on('tap', '.go-changePetname', function() {
					maiDianStatistics($(this).find("a"));
					window.location.href = 'changePetname.html';
				});
				//截取头像返回
				$('body').on('tap', '.close-txup', function() {
					$('.htmleaf-container').css({
						display: 'none'
					});
					$('#dpage').removeClass('show');
				});
				$('.personl-dheckbox-container').on('tap', '.dheckbox-show', function() {
					maiDianStatistics($(this).parents(".personl-dheckbox"));
					var img_currentobj = $(this);
					var tempSexy = '0';
					// 判断是否改改变图片的路径(性别单选)
					if(img_currentobj.attr('data-ischeck') == '0') {
						img_currentobj.attr('src', img_section_url+'img/personal/information/dheckbox.png');
						img_currentobj.attr('data-ischeck', '1');
						if(img_currentobj.attr('id') == 'customer_sexy_girl') {
							tempSexy = '1';
						} else if(img_currentobj.attr('id') == 'customer_sexy_boy') {
							tempSexy = '0';
						}
						opration.updateCustomerSexy(tempSexy,function(){
							opration.setSexyData(tempSexy == '1')
							mui.toast('修改成功！');
						},function(){
							opration.setSexyData(tempSexy == '0');
							mui.toast('修改失败！');
						});
					}
				});
				
				// 修改密码
				mui('body').on('tap', '.go-changePassword', function() {
					maiDianStatistics($(this).find("a"));
					window.location.href = 'changePassword.html';
				});
				// 设置密码
				mui('body').on('tap', '.go-setPassword', function() {
					maiDianStatistics($(this).find("a"));
					window.location.href = 'setPassword.html';
				});
				// 删除标签
				$('.label-wrapper').delegate(
					'.personalLabel1',
					'tap',
					function() {
						maiDianStatistics($(this));
						var _this = this;
						var personalLabel_id = $(_this).attr('data-tagid');
						$(_this).hide();
						var personalLabel_text = $(_this).children('.personaltext').text();
						$(_this).remove();
						var Li1 = $('<li class="personalLabel2" data-tagid="' + personalLabel_id + '"> <span class="personaltext">' +
							personalLabel_text + '</span> </li>')
						$('.label-wrapper2').append(Li1);
						$('.label-wrapper2 li').each(function(i) {
							$(_this).children('.mui-minus').remove();
						});
						tagmap.remove(personalLabel_id);
						
						opration.updateCustomerTagInfo(tagmap,function(){
							mui.toast('删除成功！');
						},function(){
							mui.toast('删除失败！');
						});
					});
				// 添加标签
				$('.label-wrapper2').delegate(
					'.personalLabel2',
					'tap',
					function() {
						maiDianStatistics($(this));
						var _this = this;
						$('#user-inline').show();
						$('.label-wrapper').show();
						var personalLabel_text2 = $(_this).text(),
							personalLable_id = $(_this).attr('data-tagid'),
							Li2;
						tagmap.put(personalLable_id, personalLabel_text2);
						$(_this).remove();
						Li2 = $('<li class="personalLabel1"  data-tagid="' + personalLable_id + '"><span class="personaltext">' +
							personalLabel_text2 + '</span><span class="mui-minus">一' + '</span></li>')
						$('.label-wrapper').append(Li2);
						opration.updateCustomerTagInfo(tagmap,function(){
							mui.toast('添加成功！');
						},function(){
							mui.toast('添加失败！');
						});
					});
			}
		},
		setSexyData:function(tag){//点击事件的性别设置
			
			if(tag){
				$('#customer_sexy_boy').attr('src', img_section_url+'img/personal/information/dheckbox2.png');
				$('#customer_sexy_boy').attr('data-ischeck', '0');
				$('#customer_sexy').attr('data-sexy', '1');
			}else{
				$('#customer_sexy_girl').attr('src', img_section_url+'img/personal/information/dheckbox2.png');
				$('#customer_sexy_girl').attr('data-ischeck', '0');
				$('#customer_sexy').attr('data-sexy', '0');
			}
		},
		requestForService: function(customerkey, sex, nickName, pwd, newPwd) {
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
		},
		// 请求个人信息
		loadPersonalInfomation: function() {
			var customer = window.localStorage.getItem(customer_cachekey);
			var customer_json = JSON.parse(customer);
			/*if(customer_json.entityId && customer_json.entityId != ''){
				opration.renderCustomerInfo(customer_json);
				closeLoadding();
			}*/
				var customerkey = getCustomereEncryKey(),
				data = {
					inJson: opration.requestForService(customerkey)
				};
				networkRequest(SNS_QUERY_USER_INFO, data, null, true, function(result) {
					/////
					///alert("resutl"+JSON.stringify(result));
					var code = result.code;
					if(code == '0') {/////////
						customer_json = storeUserInfo(customer,result.data);
						opration.renderCustomerInfo(customer_json);
					} else {
						/*mui.alert('系统内部错误', '系统提示', function() {
							mui.back();
						});
						*/
					}
					closeLoadding();
				}, null);
			
		},
		// 请求客户标签信息
		loadPersonalTagData: function() {
			var data = {};
			ajaxTokenPost(CATER_TAG_FIND_URL, data, function(result) {
				log("客户标签信息"+JSON.stringify(result));
				var code = result.resultMessage.messageCode;
				if(code == '0000') {
					opration.renderPersonalTag(result);
				}
			});
			var data = {};
			ajaxTokenPost(CATER_TAG_FIND_ALL_URL, data, function(result) {
				var code = result.resultMessage.messageCode;
				if(code == '0000') {
					opration.renderTag(result);
				}
			});
		},
		renderCustomerInfo: function(data) {
			if(data.logo != null && data.logo != "") {
				$('#head').children().eq(0).attr("src",data.logo);
			}
			$('#customer_nickname').text(data.nickName);
			if(data.sex == '0' || data.sex == 0) { // 0 是男（sns是这样的）
				$('#customer_sexy').attr('data-sexy', '1');
				$('#customer_sexy_girl').attr('src', img_section_url+'img/personal/information/dheckbox2.png');
				$('#customer_sexy_boy').attr('src', img_section_url+'img/personal/information/dheckbox.png');
			} else { // 1 是女
				$('#customer_sexy').attr('data-sexy', '0');
				$('#customer_sexy_girl').attr('src', img_section_url+'img/personal/information/dheckbox.png');
				$('#customer_sexy_boy').attr('src', img_section_url+'img/personal/information/dheckbox2.png');
			}
			//alert("返回密码类型"+data.pwd);
			if(data.pwd == "0") {
				$('.go-setPassword').show();
				$('.go-changePassword').hide();
			}
		},
		// 加载个人标签
		renderPersonalTag: function(data) {
			var $dateBox = $('.label-wrapper'),
				$dataitemTp1 = $dateBox.find('li:eq(0)'),
				$item, arrays = [];
			$dateBox.html('');
			var result = data.resultData.body.result;
			if(result == null || result == '') {
				$('#user-inline').hide();
				$('.label-wrapper').hide();
				return;
			}
			for(var i = 0; i < result.length; i++) {
				var obj = result[i];
				$item = $dataitemTp1.clone().show();
				$item.attr('data-tagid', obj.tagid);
				$item.children('.personaltext').text(obj.tagname);
				$item.removeAttr('style');

				tagmap.put(obj.tagid, obj.tagname);
				arrays.push($item[0].outerHTML);
			}
			$dateBox.append(arrays.join(''));
		},
		// 加载全部标签
		renderTag: function(data) {
			var result = data.resultData.body.result;
			var $dateBox = $('.label-wrapper2'),
				$dataitemTp1 = $dateBox.find('li:eq(0)'),
				$item, arrays = [];
			$dateBox.html('');
			//log(tagmap.keys());
			for(var i = 0; i < result.length; i++) {
				var obj = result[i];

				if(!tagmap.containsKey(obj.id)) {
					$item = $dataitemTp1.clone().show();
					// log(obj.paramName);
					$item.attr('data-tagid', obj.id);
					$item.html('');
					$item.append('<span class="personaltext">' + obj.paramName + '</span>');
					$item.removeAttr('style');
					// log($item[0].outerHTML);
					arrays.push($item[0].outerHTML);
				}
			}
			$dateBox.append(arrays.join(''));
		}
	};
	opration.init();
});