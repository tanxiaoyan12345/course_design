package com.example.shopping.service.impl;

import com.example.shopping.entity.Cart;
import com.example.shopping.entity.Clothes;
import com.example.shopping.entity.Customer;
import com.example.shopping.entity.Image;
import com.example.shopping.mapper.CartMapper;
import com.example.shopping.mapper.ClothesMapper;
import com.example.shopping.mapper.ImageMapper;
import com.example.shopping.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class CartServiceImpl implements CartService{
    @Autowired
    private CartMapper cartMapper;

    @Autowired
    private ImageMapper imageMapper;

    @Autowired
    private ClothesMapper ClothesMapper;

    @Override
    public CartMapper getCartMapper(){
        return cartMapper;
    }

    @Override
    public void setCartMapper(CartMapper cartMapper){
        this.cartMapper = cartMapper;
    }

    @Override
    public List<Cart> getAllCart(){
        return cartMapper.selectAllCart();
    }

    @Override
    public List<Map<String,Object>> getCartByUserName(String username){
        List<Cart> cartList = cartMapper.selectByUserName(username);
        List<Map<String,Object>> rList = new ArrayList<>();

        for(Cart cart : cartList){
            Image image = imageMapper.selectByPrimaryKey(cart.getClothesId());
            Clothes Clothes = ClothesMapper.selectByPrimaryKey(cart.getClothesId());
            Map<String, Object> map = new HashMap<>();
            map.put("ClothesInfo", Clothes);
            map.put("cartInfo", cart);
            map.put("ClothesImg", image);
            rList.add(map);
        }
        return rList;
    }

    @Override
    public Map<String, Object> getCartByPrimaryKey(Integer id){
        Cart cart = cartMapper.selectByPrimaryKey(id);
        Image image = imageMapper.selectByPrimaryKey(cart.getClothesId());
        Map<String, Object> map = new HashMap<>();
        map.put("cartInfo", cart);
        map.put("ClothesImg", image);
        return map;
    }

    @Override
    public Cart getCartByPrimaryKey2(Integer id){
        return cartMapper.selectByPrimaryKey(id);
    }

    @Override
    public boolean addToCart(Customer customer, Clothes Clothes, int num){
        Cart cart = new Cart();
        cart.setClothesId(Clothes.getId());
        cart.setCustomerId(customer.getId());
        cart.setClothesName(Clothes.getName());
        cart.setCustomerName(customer.getUsername());
        cart.setPrice(Clothes.getPrice());
        cart.setNumber(num);
        cart.setSumPrice(Clothes.getPrice()*num);
        return cartMapper.insert(cart);
    }

    @Override
    public boolean deleteItem(int cartId){
        return cartMapper.deleteByPrimaryKey(cartId);
    }
}
