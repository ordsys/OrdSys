package com.ke.orsys.product.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by lixufeng on 2017/6/10.
 */

@Controller
@RequestMapping(value = "/product", method = RequestMethod.GET)
public class ProductController {

    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public  String mall(ModelMap modelMap){
        modelMap.addAttribute("method","mall");
        return "product/list";
    }

    @RequestMapping(value = "/detail", method = RequestMethod.GET)
    public  String detail(ModelMap modelMap){
        modelMap.addAttribute("method","mall");
        return "product/detail";
    }
}
