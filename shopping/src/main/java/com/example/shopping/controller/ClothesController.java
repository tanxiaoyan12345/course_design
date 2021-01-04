package com.example.shopping.controller;

import com.example.shopping.entity.Clothes;
import com.example.shopping.service.ClothesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

@RestController
public class ClothesController {
    @Autowired
    private ClothesService ClothesService;

    public ClothesService getClothesService() {
        return ClothesService;
    }

    public void setClothesService(ClothesService ClothesService) {
        this.ClothesService = ClothesService;
    }

    @RequestMapping(value = "/getAllClothes", method = RequestMethod.POST)
    public Map<String, List<Clothes>> getAllClothes(){
        List<Clothes> ClothesList = ClothesService.getAllClothes();
        Map<String, List<Clothes>> rmap = new HashMap<>();
        rmap.put("ClothesList", ClothesList);
        return rmap;
    }

    @RequestMapping(value = "/getBestSaleClothesCore", method = RequestMethod.POST)
    public Map<String, List<Map<String, Object>>> getBestSaleClothesCore(){
        List<Map<String, Object>> mapList = ClothesService.getBestSaleClothesCore();
        Map<String, List<Map<String, Object>>> rmap = new HashMap<>();
        rmap.put("bestSaleClothesCore",mapList);
        return rmap;
    }

    @RequestMapping(value = "/getClothesCoreBynanzhuang", method = RequestMethod.POST)
    public Map<String, List<Map<String, Object>>> getClothesCoreBynanzhuang(){
        String category = "nanzhuang";
        List<Map<String, Object>> mapList = ClothesService.getClothesCoreByCategory(category);
        Map<String, List<Map<String, Object>>> rmap = new HashMap<>();
        rmap.put("ClothesCoreBynanzhuang", mapList);
        return rmap;
    }

    @RequestMapping(value = "/getClothesCoreBynvzhuang", method = RequestMethod.POST)
    public Map<String, List<Map<String, Object>>> getClothesCoreBynvzhuang(){
        String category = "nvzhuang";
        List<Map<String, Object>> mapList = ClothesService.getClothesCoreByCategory(category);
        Map<String, List<Map<String, Object>>> rmap = new HashMap<>();
        rmap.put("ClothesCoreBynvzhuang", mapList);
        return rmap;
    }

    @RequestMapping(value = "/getClothesCoreBytongzhuang", method = RequestMethod.POST)
    public Map<String, List<Map<String, Object>>> getClothesCoreBytongzhuang(){
        String category = "tongzhuang";
        List<Map<String, Object>> mapList = ClothesService.getClothesCoreByCategory(category);
        Map<String, List<Map<String, Object>>> rmap = new HashMap<>();
        rmap.put("ClothesCoreBytongzhuang", mapList);
        return rmap;
    }

    @RequestMapping(value = "/getClothesCoreByshipin", method = RequestMethod.POST)
    public Map<String, List<Map<String, Object>>> getClothesCoreByshipin(){
        String category = "shipin";
        List<Map<String, Object>> mapList = ClothesService.getClothesCoreByCategory(category);
        System.out.println("size " + mapList.size());
        Iterator<Map<String, Object>> it=mapList.iterator();//集合类的通用遍历方式, 从很早的版本就有, 用迭代器迭代
        while(it.hasNext()){
            System.out.print(it.next());
        }
        System.out.println();
        Map<String, List<Map<String, Object>>> rmap = new HashMap<>();
        rmap.put("ClothesCoreByshipin", mapList);
        return rmap;
    }

    @RequestMapping(value = "/getOneClothesDetail", method = RequestMethod.POST)
    public Map<String, Map<String, Object>> getOneClothesDetail(@RequestParam Map map){
        int id = Integer.parseInt((String) map.get("id"));
        Map<String, Object> mapList = ClothesService.getOneClothesDetail(id);
        Map<String, Map<String, Object>> rmap = new HashMap<>();
        rmap.put("OneClothesDetail", mapList);
        return rmap;
    }
}
