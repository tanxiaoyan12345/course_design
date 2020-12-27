package com.example.shopping.mapper;

import com.example.shopping.entity.Orders;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface OrdersMapper {
    boolean deleteByPrimaryKey(Integer id);

    boolean insert(Orders record);

    Orders selectByPrimaryKey(Integer id);

    List<Orders> selectAllOrders();

    List<Orders> selectByUserName(String username);

    boolean updateByPrimaryKey(Orders record);

    boolean updateByPrimaryKeySelective(Orders record);
}
