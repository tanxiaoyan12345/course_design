package com.example.shopping.mapper;

import com.example.shopping.entity.Cart;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface CartMapper {
    boolean deleteByPrimaryKey(Integer id);

    boolean insert(Cart record);

    Cart selectByPrimaryKey(Integer id);

    List<Cart> selectAllCart();

    List<Cart> selectByUserName(String username);

    boolean updateByPrimaryKey(Cart record);

    boolean updateByPrimaryKeySelective(Cart record);
}
