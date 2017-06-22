<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>编辑个人资料</title>
		<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
		<link href="${pageContext.request.contextPath}/static/css/mui.min.css" rel="stylesheet" />
		<link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/reset.css" />
		<link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/personl.css" />
		<script type="text/javascript" src="${pageContext.request.contextPath}/static/js/publicMethods.js?v=1.0" ></script>
		<script>
			//getLoadding();
		</script>
		<style>
			.mui-backdrop{
				background-color: rgba(0,0,0,0.4);
			}
			#alert-select{
			    width: 60px;
			    height: 70px;
			    border-radius:100%;
			    position: fixed;
			    top: 95px;
			    left: 50%;
			    margin-left: -30px;
			}
			#alert-select #select-image{
				width: 100%;
			    height: 100%;
			   border-radius: 100%;
			}
		</style>
	</head>
	<body style="overflow:hidden;">
		<header class="mui-bar mui-bar-nav bar-nav-header header-hidden">
		    <a class="go-perIndex mui-icon mui-icon-left-nav mui-pull-left"></a>
		    <h1 class="mui-title">编辑个人资料</h1>
		</header>
		<div style="position:absolute;bottom:0;top:52px;width: 100%;overflow-y:scroll;" id="wrapper">
		<ul class="mui-table-view">
			<li class="mui-table-view-cell personl-head-img">
				<div id="head" class="head-img-wrapper">
					<img  id="headimg" src=""/>
					<img id="s_dpage" class="personl-camera analyze_action" src=""/>
					<!--<div id="select-image">
						<input type="button" name="file" class="button" value="选择图片">
						<input id="file" type="file"  accept="image/*"/>
					</div>-->
				</div>
			</li>
			<li class="mui-table-view-cell go-changePetname">

				<a id="head" class="mui-navigate-right analyze_action" data-code="10056" description="修改昵称">昵称
				<span id="customer_nickname" class="mui-pull-right color-9">捞粉儿</span>


			</a>
			</li>
			<li id="customer_sexy" class="mui-table-view-cell"  data-sexy="0">
				<a class="mui-pull-left">性别</a>
				<div class="mui-row mui-pull-right personl-dheckbox-container" >
					<div class="dheckbox radio personl-dheckbox analyze_action" data-code="10057" description="修改资料性别女">
						<div>
							<img id="customer_sexy_girl" src="" data-ischeck="0" class="dheckbox-show">
							女
						</div>
					</div>
					<div class="dheckbox radio personl-dheckbox analyze_action" data-code="10058" description="修改资料性别男">
						<div>
							<img id="customer_sexy_boy" src="" data-ischeck="0" class="dheckbox-show">
							男
						</div>
					</div>
				</div>
			</li>
		</ul>
		<ul class="mui-table-view go-changePassword">
			<li class="mui-table-view-cell">
				<a class="mui-navigate-right analyze_action" data-code="10059" description="进入修改密码">修改密码</a>
			</li>
		</ul>
		<!-- 第三方登录和手机号验证码登录  没有密码 需要设置密码 -->
		<ul class="mui-table-view go-setPassword"  style="display:none">
			<li class="mui-table-view-cell">
				<a class="mui-navigate-right analyze_action" data-code="10066" description="进入设置密码">设置密码</a>
			</li>
		</ul>
		<div class="Label">
			<div class="mui-inline" id="user-inline">正在使用的个人标签</div>
			<ul class="label-wrapper">

			<li class="personalLabel1 analyze_action" data-code="10060" description="删除个性标签" data-id="" data-tagid="" style="display:none;">
			<span class="personaltext">火锅达人</span>
			<span class="mui-minus" >一</span>
			</li>

			</ul>
			<div class="mui-inline">热门标签</div>
			<ul class="label-wrapper2">
				<li class="personalLabel2 analyze_action" data-code="10061" description="添加个性标签" data-id="" data-tagid="">
				<span class="personaltext">火锅达人</span>
				</li>

			</ul>
		</div>
		<div class="htmleaf-container">
			<!--<div class="close-txup">
				<img id="img_close_icon" src=""/>
			</div>-->
			<header class="mui-bar mui-bar-nav bar-nav-header">
			    <a class="mui-icon mui-icon-left-nav mui-pull-left close-txup" style="background: #fff;"></a>
			    <h1 class="mui-title">裁剪</h1>
			</header>
			<div id="clipArea"></div>
			<div id="view"></div>
		</div>
		</div>
		<!--<footer>
			<button id="user_info_sure_btn">保存</button>
		</footer>-->
		<div id="alert-select">
			<div id="select-image">
				<a href="javascript:void(0);">
					<!--<input type="button" name="file" class="button" value="选择图片" style="border-radius: 100%;z-index: 100000;opacity: 0;padding: 0;">-->
					<input id="file" type="file" style="border-radius: 100%;z-index: 100000;opacity: 0;"  runat="server" accept="image/*"/>
				</a>
			</div>
			<button type="button" style="color: #3965e8;font-size: 16px;display: none;">取消</button>
		</div>
		
<!--截取图片选择的DIV  -->
<div id="dpage">
	<!--<a href="javascript:void(0);">
		<input type="button" name="file" class="button" value="选择图片">
		<input id="file" type="file"  accept="image/*"/>
	</a>-->
 	<a href="javascript:void(0);" class="qx" id="clipBtn"  data-code="10055" description="上传头像" ><button class="clipBtn">保存</button></a>
</div>
<script src="${pageContext.request.contextPath}/static/js/mui.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/static/js/jquery-1.11.1.min.js" ></script>
<script src="${pageContext.request.contextPath}/static/js/information/iscroll-zoom.js"></script>
<script src="${pageContext.request.contextPath}/static/js/information/hammer.js"></script>
<script src="${pageContext.request.contextPath}/static/js/information/jquery.photoClip.js"></script>
<script src="${pageContext.request.contextPath}/static/js/information/util.hashmap.js"></script>
<script src="${pageContext.request.contextPath}/static/js/util.checknow.js"></script>
<script  data-main="${pageContext.request.contextPath}/static/js/information/personlInformation.js" src="${pageContext.request.contextPath}/static/js/require-2.1.11.js" ></script>
<script>
if(isWeiXin()){
	$("#wrapper").css("top","0");
	$('#alert-select').css({top:'44px'});
}
	
</script>
</body>

</html>