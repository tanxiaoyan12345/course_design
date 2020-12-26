package com.example.shopping.service;

import com.example.shopping.entity.Cart;
import com.example.shopping.entity.Customer;
import com.example.shopping.entity.Order;
import com.example.shopping.mapper.OrderMapper;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

public interface OrderService {
    @Transactional
    public OrderMapper getOrderMapper();

    @Transactional
    public void setOrderMapper(OrderMapper orderMapper);

    @Transactional
    public Order getOrderByPrimaryKey(Integer id);

    @Transactional
    public List<Map<String,Object>> getCartByUserName(String username);

    @Transactional
    public List<Order> getAllOrder();


    @Transactional
    public boolean addNewOrder(Cart cart, Customer customer);
}
