<%--
  Created by IntelliJ IDEA.
  User: lixufeng
  Date: 2017/6/21
  Time: 14:32
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
    <title>登录注册</title>
    <link href="${pageContext.request.contextPath}/static/css/reset.css" rel="stylesheet" />
    <link href="${pageContext.request.contextPath}/static/css/mui.min.css" rel="stylesheet" />
    <link href="${pageContext.request.contextPath}/static/css/resign-login.css" rel="stylesheet" />
    <style>
        .public-alert .public-alert-container .public-alert-content p {
            width: 100%;
            text-align: center;
            margin-top: 10px;
            margin-bottom: 0;
            font-size: 18px;
            color: #333;
        }

        .public-alert .public-alert-footer .button-bottom-right {
            border-bottom-right-radius: 8px;
            color: #fff;
            background: #d43d3d;
            border: none;
            float: right;
        }

        .public-alert .public-alert-footer .button-bottom-left {
            border-bottom-left-radius: 8px;
            border: none;
        }
    </style>
    <script src="${pageContext.request.contextPath}/static/js/mui.min.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/static/js/publicMethods.js?v=1.0"></script>
    <script>
        getLoadding();
    </script>
</head>

<body>
<section class="wrapperBox">
    <div class="loginWrapper">
        <div class="topNull">
            <a class="mui-icon mui-icon-left-nav mui-pull-left analyze_action resign_login_go_back" data-code="10401" description="返回上一级"></a> <small class="mui-pull-right mui-navigate-right zhuce">注册</small>
            <img src="" id="img_login_logo">
        </div>
        <div class="tabWrapper">
            <div class="mui-segmented-control mui-segmented-control-inverted mui-segmented-primary borderBottom" id="patternLogin">
                <a class="mui-control-item mui-active" href="#item2"> 密码登录 </a>
                <a class="mui-control-item" href="#item1"> 验证码登录 </a>

            </div>
            <div id="item2" class="item mui-control-content mui-active">
                <ul>
                    <li><img src="" id="img_user1" /> <input type="number" placeholder="请输入手机号" id="phone" /></li>
                    <li><img src="" id="img_pwd" style="  width: 15px;" /> <input type="password" placeholder="密码" id="password" /></li>
                </ul>
                <div class="remPwd">
                    <div class="anniu">
                        <div class="dian" attr-data="false"></div>
                    </div>
                    <label>记住密码</label>
                </div>
                <div class="forPwd">忘记密码</div>
                <button type="button" class="mui-btn mui-btn-danger buttonScale " id="login">登录</button>
                <p class="otherLogin">
                    其他方式登录 <img src="" id="img_qq" class="qqLogin" /> <img src="" id="img_wect" class="wcLogin" />
                </p>
            </div>

            <div id="item1" class="item mui-control-content">
                <ul>
                    <li><img src="" id="img_resignIcon_03" style="width: 12px;" /> <input type="number" placeholder="请输入手机号" id="codePhone" /></li>
                    <li><img src="" id="img_resignIcon_08" /> <input type="text" placeholder="验证码" id="code" />
                        <button id="code_getting" class="code_getting">获取验证码</button></li>
                </ul>

                <button type="button" class="mui-btn mui-btn-danger buttonScale buttonScaleO" id="btnmu">
                    登录</button>
                <p class="otherLogin">
                    其他方式登录 <img src="" id="img_qq2" class="qqLogin" /><img src="" id="img_wect2" class="wcLogin" />
                </p>
            </div>
        </div>
        <div class="public-alert alert" id="gotoRegister" style="display: none">
            <div class="public-alert-container">
                <div class="public-alert-content">
                    <img src="" id="img_sad" class="sadImg">
                    <p>您不是华夏源洁会员,去注册一下呗？</p>
                </div>
            </div>
            <div class="public-alert-footer">
                <button type="button" class="public-alert-button-min button-bottom-left cancelPot">取消</button>
                <button type="button" class="public-alert-button-min button-bottom-right confirmPot">确定</button>
            </div>
        </div>
    </div>
</section>
<script src="${pageContext.request.contextPath}/static/js/util.checknow.js "></script>
<script src="${pageContext.request.contextPath}/static/js/jquery-1.11.1.min.js" type="text/javascript" charset="utf-8"></script>
<script src="${pageContext.request.contextPath}/static/js/resign-login.js?v=1.1" type="text/javascript" charset="utf-8"></script>
<script src="${pageContext.request.contextPath}/static/js/loginUtils.js?v=1.1"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/static/js/common.js"></script>
</body>

</html>
