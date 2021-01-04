package com.example.shopping.entity;

public class Cart {
    private Integer id;
    private Integer ClothesId;
    private Integer customerId;
    private String ClothesName;
    private String customerName;
    private Double price;
    private Integer number;
    private Double sumPrice;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getClothesId() {
        return ClothesId;
    }

    public void setClothesId(Integer ClothesId) {
        this.ClothesId = ClothesId;
    }

    public Integer getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Integer customerId) {
        this.customerId = customerId;
    }

    public String getClothesName() {
        return ClothesName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setClothesName(String ClothesName) {
        this.ClothesName = ClothesName;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getNumber() {
        return number;
    }

    public void setNumber(Integer number) {
        this.number = number;
    }

    public Double getSumPrice() {
        return sumPrice;
    }

    public void setSumPrice(Double sumPrice) {
        this.sumPrice = sumPrice;
    }
}
