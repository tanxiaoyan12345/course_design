package com.example.shopping.mapper;

import com.example.shopping.entity.Cosmetic;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface CosmeticMapper {
    boolean deleteByPrimaryKey(Integer id);

    boolean insert(Cosmetic record);

    Cosmetic selectByPrimaryKey(Integer id);

    List<Cosmetic> selectAllCosmetic();

    boolean updateByPrimaryKey(Cosmetic record);

    boolean updateByPrimaryKeySelective(Cosmetic record);
}
