package com.ke.orsys.user.own.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by lixufeng on 2017/6/10.
 */

@Controller
@RequestMapping(value = "/user", method = RequestMethod.GET)
public class UserController {

    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public  String login(ModelMap modelMap){
        modelMap.addAttribute("msg","login");
        return "user/own/login";

    }

    @RequestMapping(value = "/register", method = RequestMethod.GET)
    public  String register(ModelMap modelMap){
        modelMap.addAttribute("msg","register");
        return "user/own/register";

    }

}
