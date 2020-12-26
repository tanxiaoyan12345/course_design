package com.example.shopping.entity;

public class Order {
    private Integer id;
    private Integer cosmeticId;
    private Integer customerId;
    private String cosmeticName;
    private String customerName;
    private Double price;
    private Integer number;
    private Double sumPrice;
    private String address;
    private String region;
    private String purchaseTime;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getCosmeticId() {
        return cosmeticId;
    }

    public void setCosmeticId(Integer cosmeticId) {
        this.cosmeticId = cosmeticId;
    }

    public Integer getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Integer customerId) {
        this.customerId = customerId;
    }

    public String getCosmeticName() {
        return cosmeticName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCosmeticName(String cosmeticName) {
        this.cosmeticName = cosmeticName;
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

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public String getPurchaseTime() {
        return purchaseTime;
    }

    public void setPurchaseTime(String purchaseTime) {
        this.purchaseTime = purchaseTime;
    }
}
