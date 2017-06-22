
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
    <title>注册</title>
    <script src="${pageContext.request.contextPath}/static/js/mui.min.js"></script>
	<link href="${pageContext.request.contextPath}/static/css/reset.css" rel="stylesheet" />
	<link href="${pageContext.request.contextPath}/static/css/mui.min.css" rel="stylesheet" />
	<link href="${pageContext.request.contextPath}/static/css/resign-login.css" rel="stylesheet" />
    <script src="${pageContext.request.contextPath}/static/js/setfontsize.js"></script>
   	<script type="text/javascript" src="${pageContext.request.contextPath}/static/js/publicMethods.js?v=1.0" ></script>
	<script>
		getLoadding();
	</script>
</head>
<body>
	<section class="wrapperBox">
		<div class="topNull topNull1">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left analyze_action" data-code="10401" description="返回上一级"></a>
			<small class="mui-pull-right mui-navigate-right" id="resign">登录</small>
			<img src="" id="img_loginlogo">
		</div>
		<div id="patternLogin">
			<div class="item mui-control-content mui-active">
				<ul>    
					<li>
						<img src="" id="img_resignIcon_03"/>
						<input type="number" placeholder="请输入手机号" id="resgiterPhone"/>
					</li>
					<li>
						<img src="" id="img_pwd"/>
						<input type="password" placeholder="6-16位字母或数字" id="resgiterPassword"/>
					</li>
					<li>
						<img src="" id="img_resignIcon_08"/>
						<input type="text" placeholder="验证码" id="resgiterCode"/>
						<span id="code_getting" class="code_getting code_getting1">获取验证码</span>
					</li>
				</ul>
					<div class="huiYuaninfo">						
						<div class="anniu">
							<div class="dian" attr-data="true"></div>
						</div>
						<label id="Hyuan">我已阅读了《会员须知》</label>
						</input>
				</div>
					<button type="button" class="mui-btn mui-btn-danger buttonScale buttonBig" id="but_register">
					注册
					</button>
					
				
			</div>
			
		</div>
		
	</section>
</body>
 <script src="${pageContext.request.contextPath}/static/js/jquery-1.11.1.min.js" type="text/javascript" charset="utf-8"></script>
	<script src="${pageContext.request.contextPath}/static/js/resign-once.js?v=1.0" type="text/javascript" charset="utf-8"></script>
	<script src="${pageContext.request.contextPath}/static/js/loginUtils.js"></script>
	<script src="${pageContext.request.contextPath}/static/js/util.checknow.js "></script>
</html>