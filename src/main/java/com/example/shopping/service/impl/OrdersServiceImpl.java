package com.example.shopping.service.impl;

import com.example.shopping.entity.*;
import com.example.shopping.mapper.ImageMapper;
import com.example.shopping.mapper.OrdersMapper;
import com.example.shopping.mapper.SaleMapper;
import com.example.shopping.service.OrdersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class OrdersServiceImpl implements OrdersService {
    @Autowired
    private OrdersMapper ordersMapper;

    @Autowired
    private ImageMapper imageMapper;

    @Autowired
    private SaleMapper saleMapper;

    @Override
    public OrdersMapper getOrdersMapper(){
        return ordersMapper;
    }

    @Override
    public void setOrdersMapper(OrdersMapper ordersMapper){
        this.ordersMapper = ordersMapper;
    }

    @Override
    public List<Orders> getAllOrders(){
        return ordersMapper.selectAllOrders();
    }

    @Override
    public Orders getOrdersByPrimaryKey(Integer id){
        return ordersMapper.selectByPrimaryKey(id);
    }

    @Override
    public List<Map<String,Object>> getCartByUserName(String username){
        List<Orders> ordersList = ordersMapper.selectByUserName(username);
        List<Map<String,Object>> rList = new ArrayList<>();

        for(Orders orders : ordersList){
            Image image = imageMapper.selectByPrimaryKey(orders.getClothesId());
            Map<String, Object> map = new HashMap<>();
            map.put("ordersInfo", orders);
            map.put("ClothesImg", image);
            rList.add(map);
        }
        return rList;
    }

    @Override
    public boolean addNewOrders(Cart cart, Customer customer){
        Orders orders = new Orders();
        orders.setClothesId(cart.getClothesId());
        orders.setCustomerId(cart.getCustomerId());
        orders.setClothesName(cart.getClothesName());
        orders.setCustomerName(cart.getCustomerName());
        orders.setPrice(cart.getPrice());
        orders.setNumber(cart.getNumber());
        orders.setSumPrice(cart.getSumPrice());
        orders.setAddress(customer.getAddress());
        orders.setRegion(customer.getRegion());
        orders.setPurchaseTime(new Date().toString());
        Sale sale = saleMapper.selectByPrimaryKey(cart.getClothesId());
        sale.setSale(sale.getSale()+1);
        return (ordersMapper.insert(orders)&&(saleMapper.updateByPrimaryKey(sale)));
    }
}
