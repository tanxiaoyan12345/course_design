package com.example.shopping.mapper;

import com.example.shopping.entity.Customer;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface CustomerMapper {
    boolean deleteByPrimaryKey(Integer id);

    boolean insert(Customer record);

    Customer selectByPrimaryKey(Integer id);

    Customer selectByUserName(String username);

    List<Customer> selectAllCustomer();

    boolean updateByPrimaryKey(Customer record);

    boolean updateByPrimaryKeySelective(Customer record);
}
