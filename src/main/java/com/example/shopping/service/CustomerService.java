package com.example.shopping.service;

import com.example.shopping.entity.Customer;
import com.example.shopping.mapper.CustomerMapper;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface CustomerService {
    @Transactional
    public CustomerMapper getCustomerMapper();

    @Transactional
    public void setCustomerMapper(CustomerMapper customerMapper);

    @Transactional
    public List<Customer> getAllCustomer();

    @Transactional
    public Customer getCustomerByPrimaryKey(Integer id);

    @Transactional
    public Customer getCustomerByUserName(String username);

    @Transactional
    public boolean validateLogin(String username, String password);

    @Transactional
    public boolean validateRegister(String username);

    @Transactional
    public boolean insertNewCustomer(Customer customer);
}
