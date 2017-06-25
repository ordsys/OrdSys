package com.ke.orsys.user.homepage.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by lixufeng on 2017/6/10.
 */

@Controller
@RequestMapping(value = "/homepage", method = RequestMethod.GET)
public class HomePageController {

    @RequestMapping(value = "/personal", method = RequestMethod.GET)
    public  String personalpage(ModelMap modelMap){
        modelMap.addAttribute("msg","personal page");
        return "user/homepage/personalpage";

    }

    @RequestMapping(value = "/information", method = RequestMethod.GET)
    public  String informationpage(ModelMap modelMap){
        modelMap.addAttribute("msg","information page");
        return "user/homepage/informationpage";
    }
}
