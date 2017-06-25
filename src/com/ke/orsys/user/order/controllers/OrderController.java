package com.ke.orsys.user.order.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by lixufeng on 2017/6/10.
 */

@Controller
@RequestMapping(value = "/order", method = RequestMethod.GET)
public class OrderController {

    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public  String list(ModelMap modelMap){
        modelMap.addAttribute("method","mall");
        return "user/order/list";
    }

    @RequestMapping(value = "/detail", method = RequestMethod.GET)
    public  String detail(ModelMap modelMap){
        modelMap.addAttribute("method","mall");
        return "";
    }

}
