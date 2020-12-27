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
    private ClothesMapper clothesMapper;

    @Autowired
    private SaleMapper saleMapper;

    @Autowired
    private ClothesCoreMapper clothesCoreMapper;

    @Autowired
    private ImageMapper imageMapper;

    @Override
    public ClothesMapper getClothesMapper(){
        return clothesMapper;
    }

    @Override
    public void setClothesMapper(ClothesMapper clothesMapper){
        this.clothesMapper = clothesMapper;
    }

    @Override
    public List<Clothes> getAllClothes(){
        return clothesMapper.selectAllClothes();
    }

    @Override
    public Clothes getClothesByPrimaryKey(Integer id){
        return clothesMapper.selectByPrimaryKey(id);
    }

    @Override
    public List<Map<String,Object>> getBestSaleClothesCore(){
        List<Sale> saleList = saleMapper.selectBestSale();
        List<Map<String,Object>> rList = new ArrayList<>();

        for(Sale sale: saleList){
            int clothesId = sale.getId();
            Image image = imageMapper.selectByPrimaryKey(clothesId);
            ClothesCore clothesCore = clothesCoreMapper.selectByPrimaryKey(clothesId);
            Map<String, Object> map = new HashMap<>();
            map.put("bestSaleCloth", clothesCore);
            map.put("bestSaleClothImg", image);
            rList.add(map);
        }
        return rList;
    }

    @Override
    public List<Map<String,Object>> getClothesCoreByCategory(String category){
        List<ClothesCore> clothesCoreList = clothesCoreMapper.selectByCategory(category);
        List<Map<String,Object>> rList = new ArrayList<>();

        for(ClothesCore clothesCore : clothesCoreList){
            Image image = imageMapper.selectByPrimaryKey(clothesCore.getId());
            Map<String, Object> map = new HashMap<>();
            map.put("Cloth", clothesCore);
            map.put("ClothImg", image);
            rList.add(map);
        }
        return rList;
    }

    @Override
    public Map<String,Object> getOneClothesDetail(Integer id){
        Clothes clothes = clothesMapper.selectByPrimaryKey(id);
        Image image = imageMapper.selectByPrimaryKey(id);
        Map<String, Object> map = new HashMap<>();
        map.put("cloth", clothes);
        map.put("clothImg", image);
        return map;
    }
}
