package com.example.shopping.service.impl;

import com.example.shopping.entity.Clothes;
import com.example.shopping.entity.ClothesCore;
import com.example.shopping.entity.Image;
import com.example.shopping.entity.Sale;
import com.example.shopping.mapper.ClothesMapper;
import com.example.shopping.mapper.ImageMapper;
import com.example.shopping.mapper.SaleMapper;
import com.example.shopping.mapper.ClothesCoreMapper;
import com.example.shopping.service.ClothesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ClothesServiceImpl implements ClothesService {
    @Autowired
    private ClothesMapper ClothesMapper;

    @Autowired
    private SaleMapper saleMapper;

    @Autowired
    private ClothesCoreMapper ClothesCoreMapper;

    @Autowired
    private ImageMapper imageMapper;

    @Override
    public ClothesMapper getClothesMapper(){
        return ClothesMapper;
    }

    @Override
    public void setClothesMapper(ClothesMapper ClothesMapper){
        this.ClothesMapper = ClothesMapper;
    }

    @Override
    public List<Clothes> getAllClothes(){
        return ClothesMapper.selectAllClothes();
    }

    @Override
    public Clothes getClothesByPrimaryKey(Integer id){
        return ClothesMapper.selectByPrimaryKey(id);
    }

    @Override
    public List<Map<String,Object>> getBestSaleClothesCore(){
        List<Sale> saleList = saleMapper.selectBestSale();
        List<Map<String,Object>> rList = new ArrayList<>();

        for(Sale sale: saleList){
            int ClothesId = sale.getId();
            Image image = imageMapper.selectByPrimaryKey(ClothesId);
            ClothesCore ClothesCore = ClothesCoreMapper.selectByPrimaryKey(ClothesId);
            Map<String, Object> map = new HashMap<>();
            map.put("bestSaleClothes", ClothesCore);
            map.put("bestSaleClothesImg", image);
            rList.add(map);
        }
        return rList;
    }

    @Override
    public List<Map<String,Object>> getClothesCoreByCategory(String category){
        List<ClothesCore> ClothesCoreList = ClothesCoreMapper.selectByCategory(category);
        List<Map<String,Object>> rList = new ArrayList<>();

        for(ClothesCore ClothesCore : ClothesCoreList){
            Image image = imageMapper.selectByPrimaryKey(ClothesCore.getId());
            Map<String, Object> map = new HashMap<>();
            map.put("Clothes", ClothesCore);
            map.put("ClothesImg", image);
            rList.add(map);
        }
        return rList;
    }

    @Override
    public Map<String,Object> getOneClothesDetail(Integer id){
        Clothes Clothes = ClothesMapper.selectByPrimaryKey(id);
        Image image = imageMapper.selectByPrimaryKey(id);
        Map<String, Object> map = new HashMap<>();
        map.put("Clothes", Clothes);
        map.put("ClothesImg", image);
        return map;
    }
}
