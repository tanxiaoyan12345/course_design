package com.example.shopping.service.impl;

import com.example.shopping.entity.Cosmetic;
import com.example.shopping.entity.CosmeticCore;
import com.example.shopping.entity.Image;
import com.example.shopping.entity.Sale;
import com.example.shopping.mapper.CosmeticMapper;
import com.example.shopping.mapper.ImageMapper;
import com.example.shopping.mapper.SaleMapper;
import com.example.shopping.mapper.CosmeticCoreMapper;
import com.example.shopping.service.CosmeticService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class CosmeticServiceImpl implements CosmeticService{
    @Autowired
    private CosmeticMapper cosmeticMapper;

    @Autowired
    private SaleMapper saleMapper;

    @Autowired
    private CosmeticCoreMapper cosmeticCoreMapper;

    @Autowired
    private ImageMapper imageMapper;

    @Override
    public CosmeticMapper getCosmeticMapper(){
        return cosmeticMapper;
    }

    @Override
    public void setCosmeticMapper(CosmeticMapper cosmeticMapper){
        this.cosmeticMapper = cosmeticMapper;
    }

    @Override
    public List<Cosmetic> getAllCosmetic(){
        return cosmeticMapper.selectAllCosmetic();
    }

    @Override
    public Cosmetic getCosmeticByPrimaryKey(Integer id){
        return cosmeticMapper.selectByPrimaryKey(id);
    }

    @Override
    public List<Map<String,Object>> getBestSaleCosmeticCore(){
        List<Sale> saleList = saleMapper.selectBestSale();
        List<Map<String,Object>> rList = new ArrayList<>();

        for(Sale sale: saleList){
            int cosmeticId = sale.getId();
            Image image = imageMapper.selectByPrimaryKey(cosmeticId);
            CosmeticCore cosmeticCore = cosmeticCoreMapper.selectByPrimaryKey(cosmeticId);
            Map<String, Object> map = new HashMap<>();
            map.put("bestSaleCosme", cosmeticCore);
            map.put("bestSaleCosmeImg", image);
            rList.add(map);
        }
        return rList;
    }

    @Override
    public List<Map<String,Object>> getCosmeticCoreByCategory(String category){
        List<CosmeticCore> cosmeticCoreList = cosmeticCoreMapper.selectByCategory(category);
        List<Map<String,Object>> rList = new ArrayList<>();

        for(CosmeticCore cosmeticCore:cosmeticCoreList){
            Image image = imageMapper.selectByPrimaryKey(cosmeticCore.getId());
            Map<String, Object> map = new HashMap<>();
            map.put("Cosme", cosmeticCore);
            map.put("CosmeImg", image);
            rList.add(map);
        }
        return rList;
    }

    @Override
    public Map<String,Object> getOneCosmeticDetail(Integer id){
        Cosmetic cosmetic = cosmeticMapper.selectByPrimaryKey(id);
        Image image = imageMapper.selectByPrimaryKey(id);
        Map<String, Object> map = new HashMap<>();
        map.put("cosme", cosmetic);
        map.put("cosmeImg", image);
        return map;
    }
}
