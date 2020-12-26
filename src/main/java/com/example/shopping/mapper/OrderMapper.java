package com.example.shopping.mapper;

import com.example.shopping.entity.Order;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface OrderMapper {
    boolean deleteByPrimaryKey(Integer id);

    boolean insert(Order record);

    Order selectByPrimaryKey(Integer id);

    List<Order> selectAllOrder();

    List<Order> selectByUserName(String username);

    boolean updateByPrimaryKey(Order record);

    boolean updateByPrimaryKeySelective(Order record);
}
