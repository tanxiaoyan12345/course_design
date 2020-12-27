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
    @RequestMapping("/ClothesDetail")
    public String ClothesDetail(){
        return "ClothesDetail";
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
    public String orders(){
        return "orders";
    }
    @RequestMapping("/register")
    public String register(){
        return "register";
    }
    @RequestMapping("/nanzhuang")
    public String nanzhuang(){
        return "nanzhuang";
    }
    @RequestMapping("/nvzhuang")
    public String nvzhuang(){
        return "nvzhuang";
    }
    @RequestMapping("/tongzhuang")
    public String tongzhuang(){
        return "tongzhuang";
    }
    @RequestMapping("/shipin")
    public String shipin(){
        return "shipin";
    }
}
