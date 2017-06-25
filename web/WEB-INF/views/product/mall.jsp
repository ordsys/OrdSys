<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html class="" lang="zh-cmn-Hans">
<head>
    <meta charset="utf-8">
    <meta name="keywords" content="华夏源洁旗舰店"/>
    <meta name="description" content="华夏源洁，优质的产品，放心保障！"/>
    <meta name="HandheldFriendly" content="True">
    <meta name="MobileOptimized" content="320">
    <meta name="format-detection" content="telephone=no">
    <meta http-equiv="cleartype" content="on">
    <meta name="referrer" content="always">
    <link rel="shortcut icon" href="https://b.yzcdn.cn/v2/image/yz_fc.ico"/>
    <title>华夏源洁旗舰店</title>

    <%--<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>--%>
    <script>
        !function (e) {
            e.onReady = function (t, o) {
                if (o) {
                    var n = function () {
                        e[t] ? o() : setTimeout(function () {
                            n()
                        }, 500)
                    };
                    n()
                }
            };
            var t = /complete|loaded/;
            e.afterLoad = function (o) {
                t.test(document.readyState) && document.body ? setTimeout(o) : e.addEventListener("load", o, !1)
            }
        }(window), function (e) {
            function t(e) {
                var t = e.match(/(https?:)?\/\/(.*?)\/.*/);
                return t ? t[2] : null
            }

            function o(e) {
                var t = 0 === l.indexOf(e) ? 1 : 0;
                return l[t]
            }

            function n(e) {
                return l.concat("static.koudaitong.com").indexOf(e) !== -1
            }

            function r(e, t) {
                if ("undefined" == typeof XMLHttpRequest)return !1;
                var o = new XMLHttpRequest;
                if (!(o && "withCredentials" in o))return !1;
                o.open("POST", e, !0), o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                var n = [];
                for (var r in t)t.hasOwnProperty(r) && n.push(r + "=" + encodeURIComponent(JSON.stringify(t[r])));
                o.send(n.join("&"))
            }

            function a(t, o) {
                o = !!o, r("https://probe.youzan.com", {
                    appName: "jserror-cdn",
                    logIndex: "request_error",
                    level: "info",
                    name: "CdnRequestError",
                    message: t + ", isSecondTime: " + o,
                    detail: {resource: t, module: e.location.href, platform: navigator.userAgent}
                })
            }

            var i, c = {script: "src", link: "href"}, l = ["b.yzcdn.cn", "su.yzcdn.cn"];
            e._cdnFallback = function (r) {
                var l, d, f, u, s, m, g;
                if (l = r.nodeName.toLowerCase(), (d = c[l]) && (f = u = r[d])) {
                    if (r.getAttribute("data-fallbacked"))return i || (e.motify && e.motify.error && e.motify.error("啊哦，有东西加载失败了，刷新下试试~"), i = !0), void(r.getAttribute("data-fallback-loged") && a(u, !0));
                    var p = t(f);
                    n(p) && (f = f.replace(p, o(p)), s = document, m = s.head || s.getElementsByTagName("head")[0] || s.documentElement, g = s.createElement(l), "link" === l && (g.rel = "stylesheet"), g[d] = f, g.onerror = function () {
                        e._cdnFallback(g)
                    }, g.setAttribute("data-fallbacked", 1), g.setAttribute("crossorigin", "anonymous"), g.async = !1, m.appendChild(g), Math.random() <= .05 && (g.setAttribute("data-fallback-loged", 1), a(u, !1)))
                }
            }
        }(window), function (e) {
            "use strict";
            var t;
            e.localStorage;
            try {
                var o = new Date;
                try {
                    localStorage.setItem(o, o)
                } catch (e) {
                    if (22 === e.code || 1014 === e.code && "NS_ERROR_DOM_QUOTA_REACHED" === e.name)throw localStorage.clear && localStorage.clear(), "localstorage define error"
                }
                var n = localStorage.getItem(o) == o;
                if (localStorage.removeItem(o), !n)throw"localstorage define error";
                if ("FUNCTION" != (typeof localStorage.clear).toUpperCase())throw"localstorage define error";
                t = localStorage
            } catch (e) {
                var r = function () {
                    return null
                };
                t = {getItem: r, setItem: r, removeItem: r, clear: r}
            }
            "function" == typeof define && define.amd && define(function () {
                return t
            }), e.YZLocalStorage = t
        }(window), function (e) {
            e.motify = e.motify || {
                    error: function (e) {
                        setTimeout(function () {
                            document.body.insertAdjacentHTML("afterbegin", '<div style="color:red;padding:5px;background:#fff;font-size:12px;border-bottom:1px solid #ddd;margin-bottom:5px;"><a style="border-radius:3px;line-height:18px;text-align:center;float:right;margin-left:5px;padding:4px 7px;color:#fff;background-color:#00BF05;" onclick="location.reload();">刷新</a> <p style="line-height:28px;padding-right:53px;word-break:break-all;margin:0;">' + e + "</p></div>")
                        }, 500)
                    }
                }, e.zenjs = e.zenjs || {}, e.__logs = [], e.Logger = {
                log: function (t) {
                    e.__logs.push(t)
                }
            }
        }(window);    </script>


    <link rel="stylesheet"
          href="${pageContext.request.contextPath}/static/css/product/base_cf3f7ec4feac9d439a763e43c8303ffb.css"
          onerror="_cdnFallback(this)" media="screen">
    <link rel="stylesheet"
          href="${pageContext.request.contextPath}/static/css/product/showcase_with_components_59a2815eb143f62555750e9b032419f8.css"
          onerror="_cdnFallback(this)" media="screen">
    <style>
        .content {
            background-color: #f9f9f9;
        }
    </style>
    <script>
        var _global = {
            "kdt_id": 1299446,
            "user_id": 0,
            "run_mode": "online",
            "debug": false,
            "project": "default",
            "online_debug": false,
            "js": {
                "js_compress": true,
                "css_compress": true,
                "use_js_cdn": true,
                "use_css_cdn": true,
                "message_report": true,
                "checkbrowser": true,
                "hide_wx_nav": true,
                "qn_public": "kdt_img",
                "qn_private": "kdt-private"
            },
            "query_path": "\/showcase\/homepage",
            "query_key": null,
            "real_query_path": "get:\/showcase\/homepage\/index.html",
            "module": "showcase",
            "controller": "Showcase_Homepage_Controller",
            "action": "index",
            "full_action": "getIndexHtml",
            "method": "get",
            "format": "html",
            "platform": "mobile",
            "is_mobile": true,
            "authorize": "unknown",
            "platform_version": "",
            "mobile_system": "ios",
            "youzan_app_login": false,
            "isFromShare": false,
            "page_size": 320,
            "isShopDomain": false,
            "share": {
                "title": "\u53d1\u73b0\u4e00\u5bb6\u597d\u5e97\uff1a\u6d77\u5e95\u635e\u5b98\u65b9\u65d7\u8230\u5e97",
                "desc": "\u6d77\u5e95\u635e\u5b98\u65b9\u65d7\u8230\u5e97",
                "cover": "https:\/\/img.yzcdn.cn\/upload_files\/2017\/04\/12\/149196578902467019.jpeg",
                "link": "https:\/\/shop1491614.youzan.com\/v2\/home\/vuux4e1e?"
            },
            "jsBradgeSupport": true,
            "wuxi1_0_0": false,
            "source": "",
            "track": "",
            "nobody": "gt81vlblbjubl03l0ftasm0hs6",
            "mp_changed": false,
            "team_certificate": true,
            "is_secured_transactions": 1,
            "hide_shopping_cart": 0,
            "hide_top_bar": 0,
            "mp_data": {
                "logo": "https:\/\/img.yzcdn.cn\/upload_files\/2017\/04\/12\/149196578902467019.jpeg",
                "team_name": "\u6d77\u5e95\u635e\u5b98\u65b9\u65d7\u8230\u5e97",
                "intro": "",
                "is_display_footbar": "1",
                "is_display_suffix_name": "1",
                "suffix_name": "\u6d77\u5e95\u635e\u5b98\u65b9\u65d7\u8230\u5e97",
                "shopping_cart_style": "2",
                "team_type": "youzan",
                "shop_type": "0",
                "created_time": 1427680974,
                "mobile": "",
                "team_physical": 0,
                "copyright_pic_url": "",
                "mp_id": "286382",
                "kdt_id": "1299446",
                "mp_weixin": "",
                "mp_nickname": "\u635e\u6d3e\u65d7\u8230\u5e97",
                "tmp_token": "",
                "quick_subscribe": "1",
                "quick_subscribe_url": "http:\/\/mp.weixin.qq.com\/s?__biz=MzA5MTUxODQ3Mg==&mid=400315420&idx=1&sn=ba8f072a73cf55c7bc5aff1bb735f19c"
            },
            "wxpay_big": false,
            "alipay_env": true,
            "wxpay_env": false,
            "wxaddress_env": false,
            "is_owner_team": false,
            "weixin_jssdk_use": 1,
            "mp_id": 0,
            "isWishOpen": 0,
            "wishUrl": "https:\/\/trade.koudaitong.com\/wxpay\/wish?kdt_id=1299446",
            "pause": {
                "business_status": 1,
                "text": "",
                "business_status_origin": 1,
                "business_time_status": 0,
                "custom_time_start": "00:00:00",
                "custom_time_end": "00:00:00",
                "auto_start_business": 0,
                "auto_start_business_time": "0000-00-00 00:00:00"
            },
            "lifecycle": {
                "kdt_id": 1299446,
                "shop_type": "0",
                "product_lifecycle": {
                    "wsc": {
                        "current_status": "valid",
                        "begin_time": "2016-09-01 13:17:15",
                        "end_time": "2017-10-08 16:28:30"
                    }
                }
            },
            "directSeller": {"is_display_directseller_button": false},
            "fans_id": 0,
            "is_fans": 2,
            "fans_nickname": "",
            "fans_type": 0,
            "fans_token": "",
            "fans_picture": "",
            "youzan_fans_id": 0,
            "youzan_fans_nickname": "",
            "youzan_fans_picture": "",
            "youzan_user_id": 0,
            "no_user_login": true,
            "buyer_id": 0,
            "change_password_url": "",
            "buyer": {"id": 0, "phone": ""},
            "open_token": [],
            "offline_id": 0,
            "wap_url": {
                "wap": "https:\/\/h5.youzan.com\/v2",
                "tj": "https:\/\/tj.youzan.com\/",
                "probe": "https:\/\/probe.youzan.com\/"
            },
            "showcase_type": "homepage",
            "have_goods": true,
            "homepage_template": "",
            "spm": {"logType": "f", "logId": 47589724},
            "alias": "vuux4e1e",
            "city_name": "\u897f\u5b89",
            "ajaxURL": [],
            "no_sidebar": 0,
            "open_app_config": {
                "bind_yz_account": false,
                "hide_copyright": false,
                "hide_foot_nav": false,
                "hide_pay_success_page": false,
                "hide_share_order": false,
                "hide_shop_nav": false,
                "hide_stroll": false,
                "use_native_address": false
            },
            "url": {
                "base": "\/\/www.youzan.com",
                "bbs": "http:\/\/bbs.youzan.com",
                "cdn": "\/\/b.yzcdn.cn",
                "cdn_static": "https:\/\/b.yzcdn.cn\/v2",
                "daxue": "http:\/\/xuetang.youzan.com",
                "fenxiao": "\/\/fx.youzan.com",
                "fuwu": "http:\/\/fuwu.youzan.com",
                "img": "\/\/img.youzan.com",
                "imgqn": "https:\/\/img.yzcdn.cn",
                "login": "\/\/login.youzan.com",
                "open": "\/\/open.youzan.com",
                "static": "https:\/\/static.youzan.com\/v2",
                "trade": "https:\/\/trade.koudaitong.com",
                "v1": "https:\/\/www.youzan.com\/v1",
                "v1_static": "\/\/b.yzcdn.cn\/v1",
                "v2": "\/\/www.youzan.com\/v2",
                "wap": "https:\/\/h5.youzan.com\/v2",
                "ws": "ws:\/\/s.im.youzan.com:83",
                "www": "\/\/www.youzan.com\/v2",
                "youzan": "\/\/www.youzan.com",
                "cloud": "https:\/\/dl.yzcdn.cn",
                "pf": "https:\/\/pifa.youzan.com",
                "uic": "https:\/\/uic.youzan.com",
                "store": "\/\/store.youzan.com",
                "market": "https:\/\/pfmarket.youzan.com",
                "im": "http:\/\/b-im.youzan.com",
                "help": "\/\/help.youzan.com",
                "materials": "\/\/materials.youzan.com"
            }
        };</script>
</head>
<body class=" feature-content">


<div class="container ">
    <div class="header">
    </div>
    <div class="content no-sidebar">
        <div class="content-body js-page-content">


            <!-- 商品搜索 -->
            <div class="custom-search" style="background-color: #000000;">
                <form action="https://h5.youzan.com/v2/search" method="GET">
                    <input type="text" class="custom-search-input" name="q" placeholder="搜索商品" value="">
                    <input type="hidden" name="kdt_id" value="1299446">
                    <button type="submit" class="custom-search-button">搜索</button>
                </form>
            </div>

            <!-- 图片广告 -->
            <ul class="custom-image clearfix js-image-ad-seperated js-view-image-list js-lazy-container">
                <li class="">
                    <a href="https://h5.youzan.com/v2/goods/27a25k274ens6">


                        <img class=""
                             src="${pageContext.request.contextPath}/static/img/product/waterPure.png"/>

                    </a>
                </li>
            </ul>

            <ul class="custom-coupon">
                <li>
                    <a href="https://h5.youzan.com/v2/ump/promocard/fetch?alias=fxfzwvuc">
                        <div class="custom-coupon-price">
                            <span>¥</span>10.00
                        </div>
                        <div class="custom-coupon-desc">
                            满80.00元可用
                        </div>
                    </a>
                </li>
                <li>
                    <a href="https://h5.youzan.com/v2/ump/promocard/fetch?alias=1crpco3d6">
                        <div class="custom-coupon-price">
                            <span>¥</span>5.00
                        </div>
                        <div class="custom-coupon-desc">
                            满50.00元可用
                        </div>
                    </a>
                </li>
            </ul>

            <div class="custom-notice">
                <div class="custom-notice-inner">
                    <div class="custom-notice-scroll">
                        <span class="js-scroll-notice scroll-notice-default">公告：温馨提示：领取优惠券亲们在提交订单的时候记得先填写地址哦，要不然是看不到优惠券的哦</span>
                    </div>
                </div>
            </div>


            <ul class="js-goods-list sc-goods-list pic clearfix size-1 " data-size="1" data-showtype="card"
                style="visibility:visible;">


                <!-- 商品区域 -->
                <!-- 展现类型判断 -->


                <li class="js-goods-card goods-card small-pic card ">
                    <a href="http://localhost:8080/product/detail" class="js-goods link clearfix" target="_blank"
                       data-goods-id="17245381" title="官方正品">
                        <div class="photo-block" data-width="800" data-height="800">
                            <%--<img class="goods-photo js-goods-lazy"--%>
                                 <%--data-src="https://img.yzcdn.cn/upload_files/2017/03/31/Fs02a6tw1huzRSEbfrG6RLYyGVo-.jpg?imageView2/2/w/280/h/280/q/75/format/webp"/>--%>
                       <img src="${pageContext.request.contextPath}/static/img/product/waterPure.png">
                        </div>
                        <div class="info clearfix info-title info-price btn1">
                            <p class=" goods-title ">官方正品</p>
                            <p class="goods-sub-title c-black hide"></p>
                            <p class="goods-price">
                                <em>¥15.90</em>
                            </p>
                            <p class="goods-price-taobao ">18.9</p>
                        </div>
                        <div class="goods-buy btn1 info-title">
                        </div>
                        <div class="js-goods-buy buy-response" data-alias="s2u5t1ax" data-postage="900" data-buyway="1"
                             data-id="17245381" data-title="官方正品" data-price="15.90"
                             data-isvirtual="0"></div>
                    </a>
                </li>
                <li class="js-goods-card goods-card small-pic card ">
                    <a href="https://h5.youzan.com/v2/goods/s2u5t1ax" class="js-goods link clearfix" target="_blank"
                       data-goods-id="17245381" title="官方正品">
                        <div class="photo-block" data-width="800" data-height="800">
                            <%--<img class="goods-photo js-goods-lazy"--%>
                            <%--data-src="https://img.yzcdn.cn/upload_files/2017/03/31/Fs02a6tw1huzRSEbfrG6RLYyGVo-.jpg?imageView2/2/w/280/h/280/q/75/format/webp"/>--%>
                            <img src="${pageContext.request.contextPath}/static/img/product/waterPure.png">
                        </div>
                        <div class="info clearfix info-title info-price btn1">
                            <p class=" goods-title ">官方正品</p>
                            <p class="goods-sub-title c-black hide"></p>
                            <p class="goods-price">
                                <em>¥15.90</em>
                            </p>
                            <p class="goods-price-taobao ">18.9</p>
                        </div>
                        <div class="goods-buy btn1 info-title">
                        </div>
                        <div class="js-goods-buy buy-response" data-alias="s2u5t1ax" data-postage="900" data-buyway="1"
                             data-id="17245381" data-title="官方正品" data-price="15.90"
                             data-isvirtual="0"></div>
                    </a>
                </li>
                <li class="js-goods-card goods-card small-pic card ">
                    <a href="https://h5.youzan.com/v2/goods/s2u5t1ax" class="js-goods link clearfix" target="_blank"
                       data-goods-id="17245381" title="官方正品">
                        <div class="photo-block" data-width="800" data-height="800">
                            <%--<img class="goods-photo js-goods-lazy"--%>
                            <%--data-src="https://img.yzcdn.cn/upload_files/2017/03/31/Fs02a6tw1huzRSEbfrG6RLYyGVo-.jpg?imageView2/2/w/280/h/280/q/75/format/webp"/>--%>
                            <img src="${pageContext.request.contextPath}/static/img/product/waterPure.png">
                        </div>
                        <div class="info clearfix info-title info-price btn1">
                            <p class=" goods-title ">官方正品</p>
                            <p class="goods-sub-title c-black hide"></p>
                            <p class="goods-price">
                                <em>¥15.90</em>
                            </p>
                            <p class="goods-price-taobao ">18.9</p>
                        </div>
                        <div class="goods-buy btn1 info-title">
                            购物车
                        </div>
                        <div class="js-goods-buy buy-response" data-alias="s2u5t1ax" data-postage="900" data-buyway="1"
                             data-id="17245381" data-title="官方正品" data-price="15.90"
                             data-isvirtual="0"></div>
                    </a>
                </li>
                <li class="js-goods-card goods-card small-pic card ">
                    <a href="https://h5.youzan.com/v2/goods/s2u5t1ax" class="js-goods link clearfix" target="_blank"
                       data-goods-id="17245381" title="官方正品">
                        <div class="photo-block" data-width="800" data-height="800">
                            <%--<img class="goods-photo js-goods-lazy"--%>
                            <%--data-src="https://img.yzcdn.cn/upload_files/2017/03/31/Fs02a6tw1huzRSEbfrG6RLYyGVo-.jpg?imageView2/2/w/280/h/280/q/75/format/webp"/>--%>
                            <img src="${pageContext.request.contextPath}/static/img/product/waterPure.png">
                        </div>
                        <div class="info clearfix info-title info-price btn1">
                            <p class=" goods-title ">官方正品</p>
                            <p class="goods-sub-title c-black hide"></p>
                            <p class="goods-price">
                                <em>¥15.90</em>
                            </p>
                            <p class="goods-price-taobao ">18.9</p>
                        </div>
                        <div class="goods-buy btn1 info-title">
                        </div>
                        <div class="js-goods-buy buy-response" data-alias="s2u5t1ax" data-postage="900" data-buyway="1"
                             data-id="17245381" data-title="官方正品" data-price="15.90"
                             data-isvirtual="0"></div>
                    </a>
                </li>
            </ul>
          <!-- 图片广告 -->
            <div class="custom-image-single clearfix">
                <a href="javascript:void(0);">
                    <img class="js-res-load js-view-image"
                         src="https://img.yzcdn.cn/upload_files/2017/05/15/FuWF047ZFNAQB6MKmT9f2g6NHc8g.jpg?imageView2/2/w/730/h/0/q/75/format/webp"/>
                </a>
            </div>


            <!-- 商品搜索 -->
            <div class="custom-search" style="background-color: #000000;">
                <form action="https://h5.youzan.com/v2/search" method="GET">
                    <input type="text" class="custom-search-input" name="q" placeholder="搜索商品" value="">
                    <input type="hidden" name="kdt_id" value="1299446">
                    <button type="submit" class="custom-search-button">搜索</button>
                </form>
            </div>

        </div>
        <div id="shop-nav"></div>
    </div>
</div>

<div class="js-footer" style="min-height: 1px;">
    <div>
    <textarea id="js-footer-textarea" class="js-lazy" style="display:none;">
        
                
                    <div class="footer">
                <div class="copyright">
                                                                                            <div class="ft-links">
                                <a href="https://h5.youzan.com/v2/showcase/homepage?kdt_id=1299446"
                                   target="_blank">店铺主页</a>
                                <a href="https://h5.youzan.com/v2/showcase/usercenter?kdt_id=1299446" target="_blank">会员中心</a>
                                                                    <a href="javascript:;"
                                                                       class="js-open-follow">关注我们</a>
                                                                                                <a href="https://h5.youzan.com/v2/showcase/cert"
                                                                                                   target="_blank">店铺信息</a>
                                                                                                <!-- 第三方app隐藏topbar时，需要在底部显示购物记录入口 -->
                                                            </div>
                                            
                    
                        <div class="ft-copyright ">
     <a href="javascript:;">XJ提供技术支持</a> </div>

                                    </div>
            </div>
        
    </textarea>
    </div>

</div>
<script src="${pageContext.request.contextPath}/static/js/product/common_7338368d80.js" onerror="_cdnFallback(this)"/>
<script src="${pageContext.request.contextPath}/static/js/product/base_1907976439.js" onerror="_cdnFallback(this)"/>
<script>
    var showcase_js_map =
        {
            "0": {
                "url": "https:\/\/b.yzcdn.cn\/v2\/build\/wap\/showcase\/modules\/swp_goods_e876250d2e.js",
                "deps": []
            },
            "1": {"url": "https:\/\/b.yzcdn.cn\/v2\/build\/wap\/showcase\/modules\/cube2_e3e0832fef.js", "deps": []},
            "3": {"url": "https:\/\/b.yzcdn.cn\/v2\/vendor\/u_b.js", "deps": []},
            "4": {"url": "https:\/\/b.yzcdn.cn\/v2\/build\/wap\/showcase\/sku_c344dfed6f.js", "deps": ["u_b"]},
            "5": {
                "url": "https:\/\/b.yzcdn.cn\/v2\/build\/wap\/showcase\/modules\/goods_list_05e02e7696.js",
                "deps": []
            }
        }</script>


<script>
    "use strict";
    !function (n, e) {
        "function" == typeof define && define.amd ? define("tiny-loader", [], e(n, n.document)) : n.Loader = e(n, n.document)
    }(this, function (n, e) {
        function t(n) {
            return "complete" === n.readyState || "loaded" === n.readyState
        }

        function o(n, t, o) {
            var i = e.createElement("link");
            i.rel = "stylesheet", a(i, o, "css"), i.async = !0, i.href = n, s.appendChild(i)
        }

        function i(n, t, o) {
            var i = e.createElement("script");
            i.charset = "utf-8", a(i, o, "js"), i.async = !t.sync, i.src = n, s.appendChild(i)
        }

        function c(n, e) {
            var t;
            n.sheet && (t = !0), setTimeout(function () {
                t ? e() : c(n, e)
            }, 20)
        }

        function a(e, o, i) {
            function a() {
                e.onload = e.onreadystatechange = null, e = null, o()
            }

            var r = "onload" in e;
            if ("css" === i && (l || !r))return void setTimeout(function () {
                c(e, o)
            }, 1);
            r ? (e.onload = a, e.onerror = function () {
                e.onerror = null, n._cdnFallback(e)
            }) : e.onreadystatechange = function () {
                t(e) && a()
            }
        }

        function r(n, e, t, c) {
            function a() {
                var t = e.indexOf(n);
                t > -1 && e.splice(t, 1), 0 === e.length && c()
            }

            d.test(n) ? o(n, t, a) : i(n, t, a)
        }

        function u(n, e, t) {
            var o = function () {
                t && t()
            };
            if (n = Array.prototype.slice.call(n || []), 0 === n.length)return void o();
            for (var i = 0, c = n.length; i < c; i++)r(n[i], n, e, o)
        }

        function f(e, o) {
            if (t(e)) o(); else {
                var i = !1;
                n.addEventListener("load", function () {
                    i || (o(), i = !0)
                }), setTimeout(function () {
                    i || (o(), i = !0)
                }, 1500)
            }
        }

        var d = new RegExp("\\.css"), s = e.head || e.getElementsByTagName("head")[0],
            l = +navigator.userAgent.replace(/.*(?:AppleWebKit|AndroidWebKit)\/?(\d+).*/i, "$1") < 536, y = {
                async: function (n, t) {
                    f(e, function () {
                        u(n, {}, t)
                    })
                }, sync: function (n, t) {
                    f(e, function () {
                        u(n, {sync: !0}, t)
                    })
                }
            };
        return n.Loader = y, y
    });    </script>


<script>window.Loader.sync(["https:\/\/b.yzcdn.cn\/v2\/build\/wap\/showcase\/base_3e1dc76bf0.js", "https:\/\/b.yzcdn.cn\/v2\/build\/wap\/showcase\/global_icon_c9810db2af.js"]);
window.Loader.async(["\/\/hm.baidu.com\/hm.js?58fe4cc4b4af82caeb8bc08af32dd62c"]);</script>
</body>
</html>
<script>
    !function (e) {
        function t(n) {
            if (i[n])return i[n].exports;
            var o = i[n] = {exports: {}, id: n, loaded: !1};
            return e[n].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
        }

        var i = {};
        t.m = e, t.c = i, t.p = "http://localhost:3456/static/", t(0)
    }([function (e, t, i) {
        "use strict";
        var n = i(1), o = function (e) {
            return e && e.__esModule ? e : {default: e}
        }(n);
        window.document.addEventListener("click", o.default)
    }, function (e, t, i) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var o = i(2), r = n(o), s = i(3), a = n(s), c = i(4), u = n(c), d = i(5), l = i(6), f = n(l);
        e.exports = function (e) {
            if (r.default.phone && "CANVAS" !== e.target.tagName) {
                var t = (0, f.default)(), i = u.default.getCountPosition(e), n = u.default.checkInFixDom(e.target),
                    o = Object.assign({fm: d.fm, spm: t}, {is_fix: n}, {loc_x: i.x, loc_y: i.y});
                (0, a.default)(o)
            }
        }
    }, function (e, t, i) {
        var n, o, r;
        !function (i) {
            var s = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i, a = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,
                c = /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,
                u = new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)", "i"), d = function (e, t) {
                    return e.test(t)
                }, l = function (e) {
                    var t = e || navigator.userAgent, i = t.split("[FBAN");
                    if (void 0 !== i[1] && (t = i[0]), i = t.split("Twitter"), void 0 !== i[1] && (t = i[0]), this.apple = {
                            phone: d(/iPhone/i, t),
                            ipod: d(/iPod/i, t),
                            tablet: !d(/iPhone/i, t) && d(/iPad/i, t),
                            device: d(/iPhone/i, t) || d(/iPod/i, t) || d(/iPad/i, t)
                        }, this.amazon = {
                            phone: d(a, t),
                            tablet: !d(a, t) && d(c, t),
                            device: d(a, t) || d(c, t)
                        }, this.android = {
                            phone: d(a, t) || d(s, t),
                            tablet: !d(a, t) && !d(s, t) && (d(c, t) || d(/Android/i, t)),
                            device: d(a, t) || d(c, t) || d(s, t) || d(/Android/i, t)
                        }, this.windows = {
                            phone: d(/Windows Phone/i, t),
                            tablet: d(/(?=.*\bWindows\b)(?=.*\bARM\b)/i, t),
                            device: d(/Windows Phone/i, t) || d(/(?=.*\bWindows\b)(?=.*\bARM\b)/i, t)
                        }, this.other = {
                            blackberry: d(/BlackBerry/i, t),
                            blackberry10: d(/BB10/i, t),
                            opera: d(/Opera Mini/i, t),
                            firefox: d(/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i, t),
                            chrome: d(/(CriOS|Chrome)(?=.*\bMobile\b)/i, t),
                            device: d(/BlackBerry/i, t) || d(/BB10/i, t) || d(/Opera Mini/i, t) || d(/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i, t) || d(/(CriOS|Chrome)(?=.*\bMobile\b)/i, t)
                        }, this.seven_inch = d(u, t), this.any = this.apple.device || this.android.device || this.windows.device || this.other.device || this.seven_inch, this.phone = this.apple.phone || this.android.phone || this.windows.phone, this.tablet = this.apple.tablet || this.android.tablet || this.windows.tablet, "undefined" == typeof window)return this
                }, f = function () {
                    var e = new l;
                    return e.Class = l, e
                };
            void 0 !== e && e.exports && "undefined" == typeof window ? e.exports = l : void 0 !== e && e.exports && "undefined" != typeof window ? e.exports = f() : (o = [], n = i.isMobile = f(), void 0 !== (r = "function" == typeof n ? n.apply(t, o) : n) && (e.exports = r))
        }(this)
    }, function (e, t) {
        "use strict";
        e.exports = function (e) {
            var t = new XMLHttpRequest, i = window.location.protocol + "//tj.youzan.com/1.gif?";
            for (var n in e)i += n + "=" + e[n] + "&";
            t.open("GET", i), t.withCredentials = !0, t.send()
        }
    }, function (e, t, i) {
        "use strict";
        var n = i(5), o = function (e) {
            return e && e.__esModule ? e : {default: e}
        }(n), r = function (e, t, i) {
            return Math.ceil(e * i / t)
        }, s = function (e, t, i) {
            return parseInt((e - .5) / i * t)
        }, a = function (e) {
            return "fixed" === window.getComputedStyle(e).position
        }, c = {
            getCountPosition: function (e) {
                var t = e.target, i = window.screen.width, n = window.screen.height;
                return c.checkInFixDom(t) ? {
                    x: r(e.clientX, i, o.default.xmetres),
                    y: r(e.clientY, n, o.default.ymetres)
                } : {x: r(e.clientX, i, o.default.xmetres), y: r(e.clientY + window.scrollY, i, o.default.xmetres)}
            }, getFlowPx: function (e, t) {
                return e.x = s(e.loc_x, t, o.default.xmetres), e.y = s(e.loc_y, t, o.default.xmetres), e
            }, getFixPx: function (e, t, i) {
                return e.x = s(e.loc_x, t, o.default.xmetres), e.y = s(e.loc_y, i, o.default.ymetres), e
            }, getPxList: function (e, t, i) {
                var n = {flow: [], fix: []};
                return e.forEach(function (e) {
                    e.value = e.click_pv, 1 * e.is_fix == 0 ? n.flow.push(c.getFlowPx(e, t)) : n.fix.push(c.getFixPx(e, t, i))
                }), n
            }, checkInFixDom: function (e) {
                var t = 0;
                if (a(e)) t = 1; else for (; e.parentElement;)if (e = e.parentElement, a(e)) {
                    t = 1;
                    break
                }
                return t
            }
        };
        e.exports = c
    }, function (e, t) {
        "use strict";
        e.exports = {xmetres: 20, ymetres: 40, fm: "hot_click"}
    }, function (e, t, i) {
        "use strict";
        var n = i(7), o = function () {
            return _global.spm.logType + _global.spm.logId || "fake" + _global.kdt_id
        };
        e.exports = function () {
            var e = (0, n.decode)(window.href).spam;
            if (e) {
                var t = e.split("_");
                t.length > 2 && (e = t[0] + "_" + t[t.length - 1]), e += "_" + o()
            } else e = o();
            return e
        }
    }, function (e, t, i) {
        "use strict";
        t.decode = t.parse = i(8), t.encode = t.stringify = i(9)
    }, function (e, t) {
        "use strict";
        function i(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }

        e.exports = function (e, t, n, o) {
            t = t || "&", n = n || "=";
            var r = {};
            if ("string" != typeof e || 0 === e.length)return r;
            e = e.split(t);
            var s = 1e3;
            o && "number" == typeof o.maxKeys && (s = o.maxKeys);
            var a = e.length;
            s > 0 && a > s && (a = s);
            for (var c = 0; c < a; ++c) {
                var u, d, l, f, p = e[c].replace(/\+/g, "%20"), h = p.indexOf(n);
                h >= 0 ? (u = p.substr(0, h), d = p.substr(h + 1)) : (u = p, d = ""), l = decodeURIComponent(u), f = decodeURIComponent(d), i(r, l) ? Array.isArray(r[l]) ? r[l].push(f) : r[l] = [r[l], f] : r[l] = f
            }
            return r
        }
    }, function (e, t) {
        "use strict";
        var i = function (e) {
            switch (typeof e) {
                case"string":
                    return e;
                case"boolean":
                    return e ? "true" : "false";
                case"number":
                    return isFinite(e) ? e : "";
                default:
                    return ""
            }
        };
        e.exports = function (e, t, n, o) {
            return t = t || "&", n = n || "=", null === e && (e = void 0), "object" == typeof e ? Object.keys(e).map(function (o) {
                var r = encodeURIComponent(i(o)) + n;
                return Array.isArray(e[o]) ? e[o].map(function (e) {
                    return r + encodeURIComponent(i(e))
                }).join(t) : r + encodeURIComponent(i(e[o]))
            }).join(t) : o ? encodeURIComponent(i(o)) + n + encodeURIComponent(i(e)) : ""
        }
    }]);</script>


<script type="text/javascript" src="https://b.yzcdn.cn/client-log/heatmap.render_c5996b002402f23d34de.js"
        onerror="_cdnFallback(this)"></script>