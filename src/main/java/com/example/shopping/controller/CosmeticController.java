package com.example.shopping.controller;

import com.example.shopping.entity.Cosmetic;
import com.example.shopping.service.CosmeticService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class CosmeticController {
    @Autowired
    private CosmeticService cosmeticService;

    public CosmeticService getCosmeticService() {
        return cosmeticService;
    }

    public void setCosmeticService(CosmeticService cosmeticService) {
        this.cosmeticService = cosmeticService;
    }

    @RequestMapping(value = "/getAllCosmetics", method = RequestMethod.POST)
    public Map<String, List<Cosmetic>> getAllCosmetic(){
        List<Cosmetic> cosmeticList = cosmeticService.getAllCosmetic();
        Map<String, List<Cosmetic>> rmap = new HashMap<>();
        rmap.put("cosmeticList", cosmeticList);
        return rmap;
    }

    @RequestMapping(value = "/getBestSaleCosmeticCore", method = RequestMethod.POST)
    public Map<String, List<Map<String, Object>>> getBestSaleCosmeticCore(){
        List<Map<String, Object>> mapList = cosmeticService.getBestSaleCosmeticCore();
        Map<String, List<Map<String, Object>>> rmap = new HashMap<>();
        rmap.put("bestSaleCosmeticCore",mapList);
        return rmap;
    }

    @RequestMapping(value = "/getCosmeticCoreBySkincare", method = RequestMethod.POST)
    public Map<String, List<Map<String, Object>>> getCosmeticCoreBySkincare(){
        String category = "hufu";
        List<Map<String, Object>> mapList = cosmeticService.getCosmeticCoreByCategory(category);
        Map<String, List<Map<String, Object>>> rmap = new HashMap<>();
        rmap.put("CosmeCoreBySkincare", mapList);
        return rmap;
    }

    @RequestMapping(value = "/getCosmeticCoreByMask", method = RequestMethod.POST)
    public Map<String, List<Map<String, Object>>> getCosmeticCoreByMask(){
        String category = "mianmo";
        List<Map<String, Object>> mapList = cosmeticService.getCosmeticCoreByCategory(category);
        Map<String, List<Map<String, Object>>> rmap = new HashMap<>();
        rmap.put("CosmeCoreByMask", mapList);
        return rmap;
    }

    @RequestMapping(value = "/getCosmeticCoreByMakeup", method = RequestMethod.POST)
    public Map<String, List<Map<String, Object>>> getCosmeticCoreByMakeup(){
        String category = "caizhuang";
        List<Map<String, Object>> mapList = cosmeticService.getCosmeticCoreByCategory(category);
        Map<String, List<Map<String, Object>>> rmap = new HashMap<>();
        rmap.put("CosmeCoreByMakeup", mapList);
        return rmap;
    }

    @RequestMapping(value = "/getCosmeticCoreByPerfume", method = RequestMethod.POST)
    public Map<String, List<Map<String, Object>>> getCosmeticCoreByPerfume(){
        String category = "xiangshui";
        List<Map<String, Object>> mapList = cosmeticService.getCosmeticCoreByCategory(category);
        Map<String, List<Map<String, Object>>> rmap = new HashMap<>();
        rmap.put("CosmeCoreByPerfume", mapList);
        return rmap;
    }

    @RequestMapping(value = "/getOneCosmeticDetail", method = RequestMethod.POST)
    public Map<String, Map<String, Object>> getOneCosmeticDetail(@RequestParam Map map){
        int id = Integer.parseInt((String) map.get("id"));
        Map<String, Object> mapList = cosmeticService.getOneCosmeticDetail(id);
        Map<String, Map<String, Object>> rmap = new HashMap<>();
        rmap.put("OneCosmeDetail", mapList);
        return rmap;
    }
}
