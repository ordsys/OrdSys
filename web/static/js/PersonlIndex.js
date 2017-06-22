/**
 * 个人中心维护操作实现
 */
require.config({
	// baseUrl:'/',
	shim: {

	},
	paths: {
		'jquery': '../js/jquery-1.11.1.min',
		'mui': '../js/mui.min'
	}
});
require(['jquery', 'mui'], function($, mui) {
	//图片
	var imgData = {
			'img_set_icon': 'img/personal/set.png',
			'img_myorder_icon': 'img/personal/personI-myorder.png',
			'img_integrate_icon': 'img/personal/integrate.png',
			'img_address_icon': 'img/personal/car.png',
			'img_spreed_icon': 'img/personal/pointLottery.png',
			'img_award_icon': 'img/personal/mycard-tk.png',
			'img_reportinstall_icon': 'img/personal/Hiss.png',
			'img_reportfix_icon': 'img/personal/Hidp.png',
		}
		//调用切片加载的方法
	loadSectionImg(imgData);
	var opration = {
		/**
		 * 初始化操作
		 */
		init: function() {
			this.mmui.init();
			this.loadData();
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
		mmui: {
			init: function() {
				mui.init();
				this.bindEvent();
				/*判断是否微信浏览*/
				if(isWeiXin()) { //微信中
					//监听微信头部返回
					pushHistory();
					window.addEventListener("popstate", function(e) {
						if(!isZhiFuBao()){
							if(sessionStorage.getItem('weChatPara') == 'weChat') {
								gobackWeChatHomePage('../');
							} else {
								gobackSourcePage('../');
							}
						}
					}, false);
					$('.go-myorder').css({
						display: 'none'
					});
					$('.go-myintegrateInd').css({
						display: 'none'
					});
					$('.go-lottery').css({
						display: 'none'
					});
				} else {
					$('.dashang').css({
						display: 'none'
					});
				}
				if(getQueryString("weixin_user_id")) {
					var weixinUserId = getQueryString("weixin_user_id");
					//					alert("----"+weixinUserId);
					localStorage.setItem("weixin_user_id", weixinUserId);
					//					alert('微信id-----'+localStorage.getItem("weixin_user_id"));
				}
				$('#img_per').css("background-image", "url(" + img_section_url + 'img/personalIndex-bg.png' + ")");
				$('#img_perMohead').attr("src", img_section_url + 'img/personal/information/defaultAvator.png');
			},
			bindEvent: function() {
				//返回到首页
				$('body').on('tap', '.go-homepage', function() {
					//window.location.href="../h5app/delicacy/HomePage.html";
					gobackSourcePage('');
				});
				//去设置
				$('body').on("tap", '.go-set', function() {
					maiDianStatistics($(this));
					window.location.href = "set.html";
				});
				//到修改资料
				$('body').on("tap", '.go-personalinformation', function() {
					maiDianStatistics($(this));
					window.location.href = "/homepage/information";
				});
				//到我的订单
				$('.mui-table-view').on("tap", '.go-myorder', function() {
					maiDianStatistics($(this));
					//	window.location.href="myorder.html";
					gotoJumpParaPage('../', GobackSource.GOBACK_MY_ORDER_SOURCE);
				});
				//到我的排号
				$('.mui-table-view').on("tap", '.go-myarrange', function() {
					//	window.location.href="../reservation/myQueue.html";
				});
				//到我的积分
				$('.mui-table-view').on("tap", '.go-myintegrateInd', function() {
					maiDianStatistics($(this));
					//	window.location.href="integrate/mypointsIndex.html";
					gotoJumpParaPage('../', GobackSource.GOBACK_MY_INTEGRAL_SOURCE);
				});
				//到积分抽奖
				$('.mui-table-view').on("tap", '.go-lottery', function() {
					maiDianStatistics($(this));
					//	window.location.href="integrate/intergrateShopdetail.html";
					gotoJumpParaPage('../', GobackSource.GOBACK_INTEGRAL_PRIZE_DRAW_SOURCE);
				});
				//到我的收货地址
				$('.mui-table-view').on("tap", '.go-myaddressInd', function() {
					maiDianStatistics($(this));
					window.location.href = "mycard/mycardIndex.html";
				});
				//到我的推广
				$('.mui-table-view').on("tap", '.go-myspreed', function() {
					maiDianStatistics($(this));
					//					window.location.href="goreward.html";//嵌头用这个
					opration.initDaShangUrl();
				});
				//我的奖励
				$('.mui-table-view').on("tap", '.go-award', function() {
					maiDianStatistics($(this));
					window.location.href = "reportinstall.html";
				});
				//我的报装
				$('.mui-table-view').on("tap", '.go-reportinstall', function() {
					maiDianStatistics($(this));
					window.location.href = "reportinstall.html";
				});
				//我的报修
				$('.mui-table-view').on("tap", '.go-reportfix', function() {
					maiDianStatistics($(this));
					if(isWeiXin()) {
						window.location.href = "reportfix.html";
					} else {
						window.location.href = "reportfix.html";//USER_Auth + '?custKey=' + getCustomerKey();
					}
				});
			}
		},
		/**
		 * 异步请求后台获取菜品信息。后台判断有用户是否登录状态
		 */
		initDaShangUrl: function() {
			var weixinUserId = localStorage.getItem("weixin_user_id");
			//			alert("微信id"+weixinUserId);
			var data = {};
			data.weixin_user_id = weixinUserId;
			ajaxTokenPost(HI_DASAHNG_ACTION, data, function(result) {
				//				log(result);
				var dashangURL = result.resultData.body.result
				window.location.replace(dashangURL);

			});
		},

		loadData: function() {
			var customer = window.localStorage.getItem(customer_cachekey);
			var customer_json = JSON.parse(customer);
			if(customer_json.entityId && customer_json.entityId != '') {
				opration.renderData(customer_json);
				var taginfo = '';
				if(customer_json.taginfo) {
					taginfo = customer_json.taginfo;
					$('.show-label').html(taginfo);
				} else {
					$('.show-label').html("未添加任何标签");
				}

				closeLoadding();
			} else {

				var customerkey = getCustomereEncryKey(),
					data = {
						inJson: opration.requestForService(customerkey)
					};
				networkRequest(SNS_QUERY_USER_INFO, data, null, true, function(result) {
					var code = result.code;
					if(code == '0') {
						customer_json = storeUserInfo(customer, result.data);
						opration.renderData(customer_json);
						//获取用户标签
						opration.getUserTagInfo();
					} else {
						closeLoadding();
						mui.alert('系统内部错误', '系统提示', function() {
							mui.back();
						});
					}
				}, null);
			}
		},
		/**
		 * 将获取的数据渲染到前端页面中
		 * @param {Object} data
		 */
		renderData: function(data) {
			log(data);
			var exist = data.logo.indexOf("personal-mohead.png");
			if(data.logo != null && data.logo != "" && exist == -1) {
				//				var start=data.logo.lastIndexOf("/");
				//				var name=data.logo.substring(start, data.logo.length);
				var curImg = $("#img_perMohead").attr("data-img");
				/*$('#img_per').css("background-image", "url("+ img_section_url+ 'img/personalIndex-bg.png' + ")");
				$('#img_perMohead').attr("src", img_section_url+ 'img/personal-mohead.png');
				$("#img_perMohead").attr("data-img","true");*/
				/*if(curImg=="false"){
						
				}else{
					$('.personl-head-bg').addClass("bg-blur").css("background-image", "url(" + data.logo + ")")
					$('.head-img-wrapper').children('.go-personalinformation').attr("src", data.logo);
					$("#img_perMohead").attr("data-img","false");
					}*/
				$('.personl-head-bg').addClass("bg-blur").css("background-image", "url(" + data.logo + ")")
				$('.head-img-wrapper').children('.go-personalinformation').attr("src", data.logo);
			}

			//会员卡号  就是 客户电话号码 
			log(data.level);
			if(data.level) {
				$("#span_level").attr("class", "personl-vip-rank rank" + data.level);
			}
			$('.mui-ellipsis > span:eq(0)').html(data.mobile + "&nbsp;&nbsp;");
			$('.mui-media-body > h4 > span:eq(0)').html(data.nickName + "&nbsp;&nbsp;");
			if(data.sex == '1' || data.sex == 1)
				$('.mui-media-body > h4 > span:eq(1)').addClass('female-logo');
			if(data.sex == '0' || data.sex == 0)
				$('.mui-media-body > h4 > span:eq(1)').addClass('male-logo');
		},
		renderPersonalTag: function(taglist) {
			if($.isEmptyObject(taglist) || taglist.length == 0) {
				return;
			}
			var taginfo = '';
			for(var i = 0; i < taglist.length; i++) {
				taginfo = taginfo + taglist[i].tagname + ",";
			}
			$('.show-label').html(taginfo);
		},
		getUserTagInfo: function() {
			//获取用户标签
			var data = {};
			ajaxTokenPost(CATER_TAG_FIND_URL, data, function(result) {
				if(result != null && result.resultMessage != null && result.resultMessage.messageCode != "") {
					var code = result.resultMessage.messageCode;
					if(code == '0000') {
						var taglist = result.resultData.body.result;
						opration.renderPersonalTag(taglist);
						storeUserInfoTag(window.localStorage.getItem(customer_cachekey), taglist);
					}
					//隐藏等待 状态图标
					closeLoadding();
				} else {
					closeLoadding();
				}
			});
		}
	};
	opration.init();
});