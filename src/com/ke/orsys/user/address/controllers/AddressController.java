package com.ke.orsys.user.address.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by lixufeng on 2017/6/10.
 */

@Controller
@RequestMapping(value = "/address", method = RequestMethod.GET)
public class AddressController {

    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public  String addressList(ModelMap modelMap){
        modelMap.addAttribute("msg","addressList page");
        return "user/address/list";
    }
}
