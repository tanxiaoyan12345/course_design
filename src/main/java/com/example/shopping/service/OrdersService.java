package com.example.shopping.service;

import com.example.shopping.entity.Cart;
import com.example.shopping.entity.Customer;
import com.example.shopping.entity.Orders;
import com.example.shopping.mapper.OrdersMapper;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

public interface OrdersService {
    @Transactional
    public OrdersMapper getOrdersMapper();

    @Transactional
    public void setOrdersMapper(OrdersMapper ordersMapper);

    @Transactional
    public Orders getOrdersByPrimaryKey(Integer id);

    @Transactional
    public List<Map<String,Object>> getCartByUserName(String username);

    @Transactional
    public List<Orders> getAllOrders();


    @Transactional
    public boolean addNewOrders(Cart cart, Customer customer);
}
