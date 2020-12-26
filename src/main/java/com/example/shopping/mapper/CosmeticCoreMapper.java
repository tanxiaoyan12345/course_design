package com.example.shopping.mapper;

import com.example.shopping.entity.CosmeticCore;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CosmeticCoreMapper {
    boolean deleteByPrimaryKey(Integer id);

    boolean insert(CosmeticCore record);

    CosmeticCore selectByPrimaryKey(Integer id);

    List<CosmeticCore> selectAllCosmeticCore();

    List<CosmeticCore> selectByCategory(String category);

    boolean updateByPrimaryKey(CosmeticCore record);

    boolean updateByPrimaryKeySelective(CosmeticCore record);
}
