package com.example.shopping.controller;

import com.example.shopping.entity.Cart;
import com.example.shopping.entity.Cosmetic;
import com.example.shopping.entity.Customer;
import com.example.shopping.service.CosmeticService;
import com.example.shopping.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class CartController {
    @Autowired
    private CartService cartService;

    @Autowired
    private CosmeticService cosmeticService;

    public CartService getCartService() {
        return cartService;
    }

    public void setCartService(CartService cartService) {
        this.cartService = cartService;
    }

    public CosmeticService getCosmeticService() {
        return cosmeticService;
    }

    public void setCosmeticService(CosmeticService cosmeticService) {
        this.cosmeticService = cosmeticService;
    }

    @RequestMapping(value = "/getCartByUsername", method=RequestMethod.POST)
    public Map<String, List<Map<String,Object>>> getCartByUsername(HttpSession httpSession){

        Customer customer = (Customer) httpSession.getAttribute("customer");
        String username = customer.getUsername();

        List<Map<String,Object>> list = cartService.getCartByUserName(username);

        Map<String, List<Map<String,Object>>> rMap = new HashMap<>();

        rMap.put("cartForOneUser", list);

        return rMap;
    }

    @RequestMapping(value = "/getCartById", method=RequestMethod.POST)
    public Map<String, Object> getCartById(@RequestParam Map<String, Object> map){
        int cartId = Integer.parseInt((String)map.get("cartId"));
        Map<String, Object> tmpMap = cartService.getCartByPrimaryKey(cartId);
        Map<String, Object> rMap = new HashMap<>();
        rMap.put("cartForId", tmpMap);
        return rMap;
    }

    @RequestMapping(value = "/addToCart", method=RequestMethod.POST)
    public Map<String, String> addToCart(@RequestParam Map<String, Object> map, HttpSession httpSession){
        Customer customer = (Customer) httpSession.getAttribute("customer");
        int cosmeticId = Integer.parseInt((String)map.get("cosmeticId"));
        int num = Integer.parseInt((String) map.get("num"));
        Cosmetic cosmetic = cosmeticService.getCosmeticByPrimaryKey(cosmeticId);
        Map<String, String> rMap = new HashMap<>();
        if(cartService.addToCart(customer, cosmetic, num))
            rMap.put("addToCartResult", "success");
        else
            rMap.put("addToCartResult", "fail");
        return rMap;
    }

    @RequestMapping(value = "/deleteOneItem", method=RequestMethod.POST)
    public Map<String, String> deleteOneItem(@RequestParam Map<String, Object> map, HttpSession httpSession){
        int castId = Integer.parseInt((String)map.get("cartId"));
        Map<String, String> rMap = new HashMap<>();
        if(cartService.deleteItem(castId))
            rMap.put("deleteItemResult", "success");
        else
            rMap.put("deleteItemResult", "fail");
        return rMap;
    }

}
