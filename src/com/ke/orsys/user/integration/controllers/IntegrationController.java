package com.ke.orsys.user.integration.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by lixufeng on 2017/6/10.
 */

@Controller
@RequestMapping(value = "/order", method = RequestMethod.GET)
public class IntegrationController {

    @RequestMapping(value = "/hello", method = RequestMethod.GET)
    public  String hello(ModelMap modelMap){
        modelMap.addAttribute("name","lisi");
        modelMap.addAttribute("msg","hello world");
        return "user/own/user";

    }

}
