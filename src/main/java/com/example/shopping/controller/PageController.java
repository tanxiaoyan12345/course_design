package com.example.shopping.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PageController {
    @RequestMapping("/login")
    public String login(){
        return "login";
    }
    @RequestMapping("/mainPage")
    public String mainPage(){
        return "mainPage";
    }
    @RequestMapping("/clothesDetail")
    public String clothesDetail(){
        return "clothesDetail";
    }
    @RequestMapping("/cart")
    public String cart(){
        return "cart";
    }
    @RequestMapping("/confirm")
    public String confirm(){
        return "confirm";
    }
    @RequestMapping("/orders")
    public String order(){
        return "order";
    }
    @RequestMapping("/register")
    public String register(){
        return "register";
    }
    @RequestMapping("/skincare")
    public String skincare(){
        return "skincare";
    }
    @RequestMapping("/mask")
    public String mask(){
        return "mask";
    }
    @RequestMapping("/makeup")
    public String makeup(){
        return "makeup";
    }
    @RequestMapping("/perfume")
    public String perfume(){
        return "perfume";
    }
}
