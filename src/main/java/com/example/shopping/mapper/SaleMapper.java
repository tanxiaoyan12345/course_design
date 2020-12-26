package com.example.shopping.mapper;


import com.example.shopping.entity.Sale;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SaleMapper {
    boolean deleteByPrimaryKey(Integer id);

    boolean insert(Sale record);

    Sale selectByPrimaryKey(Integer id);

    List<Sale> selectAllSale();

    List<Sale> selectBestSale();

    boolean updateByPrimaryKey(Sale record);
}
