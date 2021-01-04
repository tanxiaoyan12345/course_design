package com.example.shopping.controller;

import com.example.shopping.entity.Cart;
import com.example.shopping.entity.Customer;
import com.example.shopping.service.CartService;
import com.example.shopping.service.OrdersService;
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
public class OrdersController {
    @Autowired
    private OrdersService ordersService;

    @Autowired
    private CartService cartService;

    public OrdersService getOrdersService() {
        return ordersService;
    }

    public void setOrdersService(OrdersService ordersService) {
        this.ordersService = ordersService;
    }

    public CartService getCartService() {
        return cartService;
    }

    public void setCartService(CartService cartService) {
        this.cartService = cartService;
    }

    @RequestMapping(value = "/getOrdersByUserName", method=RequestMethod.POST)
    public Map<String, List<Map<String,Object>>> getOrdersByUserName(HttpSession httpSession){
        Customer customer = (Customer) httpSession.getAttribute("customer");
        String username = customer.getUsername();
        System.out.println("username "+username);
        List<Map<String,Object>> list = ordersService.getCartByUserName(username);
        System.out.println("cartList size "+list.size());
        Map<String, List<Map<String,Object>>> rMap = new HashMap<>();

        rMap.put("ordersForOneUser", list);

        return rMap;
    }

    @RequestMapping(value = "/addNewOrders", method=RequestMethod.POST)
    public Map<String, String> addNewOrders(@RequestParam Map<String, Object> map, HttpSession httpSession){
        Customer customer = (Customer) httpSession.getAttribute("customer");
        int cartId = Integer.parseInt((String)map.get("cartId"));
        Cart cart = cartService.getCartByPrimaryKey2(cartId);
        Map<String, String> rMap = new HashMap<>();
        if(ordersService.addNewOrders(cart, customer))
            rMap.put("addNewOrdersResult", "success");
        else
            rMap.put("addNewOrdersResult", "fail");
        return rMap;
    }
}
