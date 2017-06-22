<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<title>个人中心首页</title>
		<meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1,user-scalable=no">
		<meta name="apple-mobile-web-app-capable" content="yes">
		<!-- 忽略页面中的数字识别为电话号码,email识别 -->
   	    <meta name="format-detection"content="telephone=no, email=no" />
		<meta name="apple-mobile-web-app-status-bar-style" content="black">
		<link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/mui.min.css">
		<link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/reset.css" />
		<link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/personl.css" />
		<script type="text/javascript" src="${pageContext.request.contextPath}/static/js/publicMethods.js?v=1.0" ></script>
		<script>
			//getLoadding();
			//gotoResignLoginPage('',GobackSource.GOBACK_HOME_PAGE_SOURCE);
		</script>
	</head>

	<body>
		<header class="mui-bar mui-bar-nav header-transparent">
		    <a class="mui-icon mui-icon-left-nav mui-pull-left go-homepage"></a>
		    <h1 class="mui-title"></h1>
		    <a class="mui-pull-right personl-set-icon go-set analyze_action" data-code="10049" description="个人中心设置"><img id="img_set_icon" src=""/></a>
		</header>
		<ul class="mui-table-view personl-head" style="height: 260px;">
			<!--默认状态的背景为类名personl-head-bg,上传头像头加类名bg-blur的类加毛玻璃效果-->
			<li class="personl-head-bg" id="img_per"></li>
			<li class="personl-head-wrapper">
				<div class="head-img-wrapper">
					<img class="go-personalinformation analyze_action" data-code="10050" description="进入修改个人资料" id="img_perMohead" src="" data-img="false"/>
					<!--会员级别级别1加类rank1,以此类推-->
					<span id="span_level" class="personl-vip-rank rank1"></span>
				</div>
				<div class="mui-media-body">
					<!--此处加性别logo,男加类名为male-logo,女为female-logo-->
					<h4><span></span><span class="personl-gender-logo"></span></h4>
					<p class='mui-ellipsis'>会员卡号:5690485<span></span></p>
					<p class="show-label-wrapp"><span class="show-label">未添加任何标签</span></p>
				</div>
			</li>
			<div class="blur-zd"></div>
		</ul>
		<ul class="mui-table-view">
			<li class="mui-table-view-cell go-myorder analyze_action" data-code="10051" description="进入我的订单" >
				<a class="mui-navigate-right personl-listlogo" style="  line-height: 22px;"><img id="img_myorder_icon" class="personl-order-icon" src=""/>我的订单</a>
			</li>
			<li class="mui-table-view-cell go-myintegrateInd analyze_action" data-code="10052" description="进入我的积分">
				<a class="mui-navigate-right personl-listlogo" style="  line-height:19px;"><img id="img_integrate_icon" src=""/>我的积分</a>
			</li>
			<li class="mui-table-view-cell go-myaddressInd analyze_action" data-code="10053" description="进入我的收货地址">
				<a class="mui-navigate-right personl-listlogo" style="  line-height:17px;"><img id="img_address_icon" src=""/>收货地址</a>
			</li>
		</ul>

		<ul class="mui-table-view">
			<li class="mui-table-view-cell go-myspreed analyze_action" data-code="10154" description="进入我的推广">
				<a class="mui-navigate-right personl-listlogo"><img id="img_spreed_icon" src=""/>我的推广</a>
			</li>
			<li class="mui-table-view-cell go-award analyze_action" data-code="10155" description="进入我的奖励">
				<a class="mui-navigate-right personl-listlogo"><img id="img_award_icon" src=""/>我的奖励</a>
			</li>
			<li class="mui-table-view-cell go-reportinstall analyze_action" data-code="10156" description="进我的报装">
				<a class="mui-navigate-right personl-listlogo"><img id="img_reportinstall_icon" src=""/>我的报装</a>
			</li>
			<li class="mui-table-view-cell go-reportfix analyze_action" data-code="10157" description="进我的报修">
				<a class="mui-navigate-right personl-listlogo"><img id="img_reportfix_icon" src=""/>我的报修</a>
			</li>
			
		</ul>
</body>
<script type="text/javascript" src="${pageContext.request.contextPath}/static/js/util.checknow.js"></script>
<script data-main="${pageContext.request.contextPath}/static/js/PersonlIndex.js" src="${pageContext.request.contextPath}/static/js/require-2.1.11.js" ></script>
<script data-main="${pageContext.request.contextPath}/static/js/PersonlIndex.js" src="${pageContext.request.contextPath}/static/js/des3.js" ></script>
</html>