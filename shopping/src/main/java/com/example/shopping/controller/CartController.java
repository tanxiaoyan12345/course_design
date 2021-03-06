package com.example.shopping.controller;

import com.example.shopping.entity.Cart;
import com.example.shopping.entity.Clothes;
import com.example.shopping.entity.Customer;
import com.example.shopping.service.ClothesService;
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
    private ClothesService ClothesService;

    public CartService getCartService() {
        return cartService;
    }

    public void setCartService(CartService cartService) {
        this.cartService = cartService;
    }

    public ClothesService getClothesService() {
        return ClothesService;
    }

    public void setClothesService(ClothesService ClothesService) {
        this.ClothesService = ClothesService;
    }

    @RequestMapping(value = "/getCartByUsername", method=RequestMethod.POST)
    public Map<String, List<Map<String,Object>>> getCartByUsername(HttpSession httpSession){

        Customer customer = (Customer) httpSession.getAttribute("customer");
        String username = customer.getUsername();

        List<Map<String,Object>> list = cartService.getCartByUserName(username);
        Object value = (list.get(0).get("cartInfo"));
        if (value instanceof Cart) {
            System.out.println("carttt "+ ((Cart) value).getClothesName());
        }
        Map<String, List<Map<String,Object>>> rMap = new HashMap<>();

        rMap.put("cartForOneUser", list);
        System.out.println("result is " );
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
        int ClothesId = Integer.parseInt((String)map.get("ClothesId"));
        int num = Integer.parseInt((String) map.get("num"));
        Clothes Clothes = ClothesService.getClothesByPrimaryKey(ClothesId);
        Map<String, String> rMap = new HashMap<>();
        if(cartService.addToCart(customer, Clothes, num))
            rMap.put("addToCartResult", "success");
        else
            rMap.put("addToCartResult", "fail");
        return rMap;
    }

    @RequestMapping(value = "/deleteItem", method=RequestMethod.POST)
    public Map<String, String> deleteItem(@RequestParam Map<String, Object> map, HttpSession httpSession){
        int castId = Integer.parseInt((String)map.get("id"));
        Map<String, String> rMap = new HashMap<>();
        System.out.println("castId " + castId);
        if(cartService.deleteItem(castId))
            rMap.put("deleteItemResult", "success");
        else
            rMap.put("deleteItemResult", "fail");
        return rMap;
    }

}
