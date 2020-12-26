package com.example.shopping.service;

import com.example.shopping.entity.Cosmetic;
import com.example.shopping.entity.CosmeticCore;
import com.example.shopping.mapper.CosmeticMapper;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

public interface CosmeticService {
    @Transactional
    public CosmeticMapper getCosmeticMapper();

    @Transactional
    public void setCosmeticMapper(CosmeticMapper cosmeticMapper);

    @Transactional
    public List<Cosmetic> getAllCosmetic();

    @Transactional
    public Cosmetic getCosmeticByPrimaryKey(Integer id);

    @Transactional
    public List<Map<String,Object>> getBestSaleCosmeticCore();

    @Transactional
    public List<Map<String,Object>> getCosmeticCoreByCategory(String category);

    @Transactional
    public Map<String,Object> getOneCosmeticDetail(Integer id);
}
