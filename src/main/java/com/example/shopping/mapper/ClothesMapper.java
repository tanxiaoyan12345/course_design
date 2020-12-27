package com.example.shopping.mapper;

import com.example.shopping.entity.Clothes;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ClothesMapper {
    boolean deleteByPrimaryKey(Integer id);

    boolean insert(Clothes record);

    Clothes selectByPrimaryKey(Integer id);

    List<Clothes> selectAllClothes();

    boolean updateByPrimaryKey(Clothes record);

    boolean updateByPrimaryKeySelective(Clothes record);
}
