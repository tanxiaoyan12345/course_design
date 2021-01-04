package com.example.shopping.controller;

import com.example.shopping.entity.Customer;
import com.example.shopping.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;

@RestController
public class CustomerController {
    @Autowired
    private CustomerService customerService;

    public CustomerService getCustomerService() {
        return customerService;
    }

    public void setCustomerService(CustomerService customerService) {
        this.customerService = customerService;
    }

    @RequestMapping(value = "/loginCheck", method = RequestMethod.POST)
    public Map<String, String> login(@RequestParam Map<String, String> map, HttpSession httpSession){

        Map<String, String> rMap = new HashMap<String, String>();

        String username = (String) map.get("username");
        String password = (String) map.get("password");

        if(customerService.validateLogin(username, password)){
            rMap.put("isLogin", "yes");
        }else{
            rMap.put("isLogin", "no");
        }

        Customer customer = customerService.getCustomerByUserName(username);
        httpSession.setAttribute("customer", customer);

        return rMap;
    }

    @RequestMapping(value = "/registerCheck", method = RequestMethod.POST)
    public Map<String, String> register(@RequestParam Map<String, String> map, HttpSession httpSession){
        Map<String, String> rMap = new HashMap<>();
        String username = (String) map.get("username");
        String password = (String) map.get("password");
        String name = (String) map.get("name");
        String address = (String) map.get("address");
        String region = (String) map.get("region");

        if(customerService.validateRegister(username)){
            Customer customer = new Customer();
            customer.setUsername(username);
            customer.setPassword(password);
            customer.setName(name);
            customer.setAddress(address);
            customer.setRegion(region);
            if(customerService.insertNewCustomer(customer)){
                rMap.put("isRegister", "yes");
            }else{
                rMap.put("isRegister", "no");
            }
        }else{
            rMap.put("isRegister", "no");
        }

        Customer customer = customerService.getCustomerByUserName(username);
        httpSession.setAttribute("customer", customer);

        return rMap;
    }

    @RequestMapping(value = "/getLoginCustomer", method = RequestMethod.POST)
    public Map<String, Customer> getLoginCustomer(HttpSession httpSession){
        Map<String, Customer> rMap = new HashMap<String, Customer>();
        rMap.put("loginCustomer", (Customer)httpSession.getAttribute("customer"));
        return rMap;
    }
}
