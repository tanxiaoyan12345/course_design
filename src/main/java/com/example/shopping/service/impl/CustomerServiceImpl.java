package com.example.shopping.service.impl;

import com.example.shopping.entity.Customer;
import com.example.shopping.mapper.CustomerMapper;
import com.example.shopping.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerServiceImpl implements CustomerService{
    @Autowired
    private CustomerMapper customerMapper;

    @Override
    public CustomerMapper getCustomerMapper(){
        return customerMapper;
    }

    @Override
    public void setCustomerMapper(CustomerMapper customerMapper){
        this.customerMapper = customerMapper;
    }

    @Override
    public List<Customer> getAllCustomer(){
        return customerMapper.selectAllCustomer();
    }

    @Override
    public Customer getCustomerByPrimaryKey(Integer id){
        return customerMapper.selectByPrimaryKey(id);
    }

    @Override
    public Customer getCustomerByUserName(String username){
        return customerMapper.selectByUserName(username);
    }

    @Override
    public boolean validateLogin(String username, String password){
        Customer customer = customerMapper.selectByUserName(username);
        return password.equals(customer.getPassword());
    }

    @Override
    public boolean validateRegister(String username){
        Customer customer = customerMapper.selectByUserName(username);
        return customer == null;
    }

    @Override
    public boolean insertNewCustomer(Customer customer){
        return customerMapper.insert(customer);
    }
}
