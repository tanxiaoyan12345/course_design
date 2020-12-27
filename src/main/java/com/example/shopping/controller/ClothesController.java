package com.example.shopping.controller;

import com.example.shopping.entity.Clothes;
import com.example.shopping.service.ClothesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class ClothesController {
    @Autowired
    private ClothesService clothesService;

    public ClothesService getClothesService() {
        return clothesService;
    }

    public void setClothesService(ClothesService clothesService) {
        this.clothesService = clothesService;
    }

    @RequestMapping(value = "/getAllClothes", method = RequestMethod.POST)
    public Map<String, List<Clothes>> getAllClothes(){
        List<Clothes> clothesList = clothesService.getAllClothes();
        Map<String, List<Clothes>> rmap = new HashMap<>();
        rmap.put("clothesList", clothesList);
        return rmap;
    }

    @RequestMapping(value = "/getBestSaleClothesCore", method = RequestMethod.POST)
    public Map<String, List<Map<String, Object>>> getBestSaleClothesCore(){
        List<Map<String, Object>> mapList = clothesService.getBestSaleClothesCore();
        Map<String, List<Map<String, Object>>> rmap = new HashMap<>();
        rmap.put("bestSaleClothesCore",mapList);
        return rmap;
    }

    @RequestMapping(value = "/getClothesCoreBySkincare", method = RequestMethod.POST)
    public Map<String, List<Map<String, Object>>> getClothesCoreBySkincare(){
        String category = "hufu";
        List<Map<String, Object>> mapList = clothesService.getClothesCoreByCategory(category);
        Map<String, List<Map<String, Object>>> rmap = new HashMap<>();
        rmap.put("ClothCoreBySkincare", mapList);
        return rmap;
    }

    @RequestMapping(value = "/getClothesCoreByMask", method = RequestMethod.POST)
    public Map<String, List<Map<String, Object>>> getClothesCoreByMask(){
        String category = "mianmo";
        List<Map<String, Object>> mapList = clothesService.getClothesCoreByCategory(category);
        Map<String, List<Map<String, Object>>> rmap = new HashMap<>();
        rmap.put("ClothCoreByMask", mapList);
        return rmap;
    }

    @RequestMapping(value = "/getClothesCoreByMakeup", method = RequestMethod.POST)
    public Map<String, List<Map<String, Object>>> getClothesCoreByMakeup(){
        String category = "caizhuang";
        List<Map<String, Object>> mapList = clothesService.getClothesCoreByCategory(category);
        Map<String, List<Map<String, Object>>> rmap = new HashMap<>();
        rmap.put("ClothCoreByMakeup", mapList);
        return rmap;
    }

    @RequestMapping(value = "/getClothesCoreByPerfume", method = RequestMethod.POST)
    public Map<String, List<Map<String, Object>>> getClothesCoreByPerfume(){
        String category = "xiangshui";
        List<Map<String, Object>> mapList = clothesService.getClothesCoreByCategory(category);
        Map<String, List<Map<String, Object>>> rmap = new HashMap<>();
        rmap.put("ClothCoreByPerfume", mapList);
        return rmap;
    }

    @RequestMapping(value = "/getOneClothesDetail", method = RequestMethod.POST)
    public Map<String, Map<String, Object>> getOneClothesDetail(@RequestParam Map map){
        int id = Integer.parseInt((String) map.get("id"));
        Map<String, Object> mapList = clothesService.getOneClothesDetail(id);
        Map<String, Map<String, Object>> rmap = new HashMap<>();
        rmap.put("OneClothDetail", mapList);
        return rmap;
    }
}
