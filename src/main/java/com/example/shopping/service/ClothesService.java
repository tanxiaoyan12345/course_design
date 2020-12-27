package com.example.shopping.service;

import com.example.shopping.entity.Clothes;
import com.example.shopping.mapper.ClothesMapper;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

public interface ClothesService {
    @Transactional
    public ClothesMapper getClothesMapper();

    @Transactional
    public void setClothesMapper(ClothesMapper clothesMapper);

    @Transactional
    public List<Clothes> getAllClothes();

    @Transactional
    public Clothes getClothesByPrimaryKey(Integer id);

    @Transactional
    public List<Map<String,Object>> getBestSaleClothesCore();

    @Transactional
    public List<Map<String,Object>> getClothesCoreByCategory(String category);

    @Transactional
    public Map<String,Object> getOneClothesDetail(Integer id);
}
