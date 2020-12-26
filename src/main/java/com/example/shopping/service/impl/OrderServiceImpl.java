package com.example.shopping.service.impl;

import com.example.shopping.entity.*;
import com.example.shopping.mapper.ImageMapper;
import com.example.shopping.mapper.OrderMapper;
import com.example.shopping.mapper.SaleMapper;
import com.example.shopping.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class OrderServiceImpl implements OrderService{
    @Autowired
    private OrderMapper orderMapper;

    @Autowired
    private ImageMapper imageMapper;

    @Autowired
    private SaleMapper saleMapper;

    @Override
    public OrderMapper getOrderMapper(){
        return orderMapper;
    }

    @Override
    public void setOrderMapper(OrderMapper orderMapper){
        this.orderMapper = orderMapper;
    }

    @Override
    public List<Order> getAllOrder(){
        return orderMapper.selectAllOrder();
    }

    @Override
    public Order getOrderByPrimaryKey(Integer id){
        return orderMapper.selectByPrimaryKey(id);
    }

    @Override
    public List<Map<String,Object>> getCartByUserName(String username){
        List<Order> orderList = orderMapper.selectByUserName(username);
        List<Map<String,Object>> rList = new ArrayList<>();

        for(Order order : orderList){
            Image image = imageMapper.selectByPrimaryKey(order.getCosmeticId());
            Map<String, Object> map = new HashMap<>();
            map.put("orderInfo", order);
            map.put("cosmeticImg", image);
            rList.add(map);
        }
        return rList;
    }

    @Override
    public boolean addNewOrder(Cart cart, Customer customer){
        Order order = new Order();
        order.setCosmeticId(cart.getCosmeticId());
        order.setCustomerId(cart.getCustomerId());
        order.setCosmeticName(cart.getCosmeticName());
        order.setCustomerName(cart.getCustomerName());
        order.setPrice(cart.getPrice());
        order.setNumber(cart.getNumber());
        order.setSumPrice(cart.getSumPrice());
        order.setAddress(customer.getAddress());
        order.setRegion(customer.getRegion());
        order.setPurchaseTime(new Date().toString());
        Sale sale = saleMapper.selectByPrimaryKey(cart.getCosmeticId());
        sale.setSale(sale.getSale()+1);
        return (orderMapper.insert(order)&&(saleMapper.updateByPrimaryKey(sale)));
    }
}
