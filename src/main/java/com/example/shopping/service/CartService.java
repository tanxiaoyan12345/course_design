package com.example.shopping.service;

import com.example.shopping.entity.Cart;
import com.example.shopping.entity.Customer;
import com.example.shopping.entity.Cosmetic;
import com.example.shopping.mapper.CartMapper;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

public interface CartService {
    @Transactional
    public CartMapper getCartMapper();

    @Transactional
    public void setCartMapper(CartMapper cartMapper);

    @Transactional
    public List<Cart> getAllCart();

    @Transactional
    public List<Map<String,Object>> getCartByUserName(String username);

    @Transactional
    public Map<String, Object> getCartByPrimaryKey(Integer id);

    @Transactional
    public Cart getCartByPrimaryKey2(Integer id);

    @Transactional
    public boolean addToCart(Customer customer, Cosmetic cosmetic, int num);

    @Transactional
    public boolean deleteItem(int cartId);

}
