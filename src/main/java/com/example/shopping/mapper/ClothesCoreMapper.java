package com.example.shopping.mapper;

import com.example.shopping.entity.ClothesCore;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClothesCoreMapper {
    boolean deleteByPrimaryKey(Integer id);

    boolean insert(ClothesCore record);

    ClothesCore selectByPrimaryKey(Integer id);

    List<ClothesCore> selectAllClothesCore();

    List<ClothesCore> selectByCategory(String category);

    boolean updateByPrimaryKey(ClothesCore record);

    boolean updateByPrimaryKeySelective(ClothesCore record);
}
