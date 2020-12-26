package com.example.shopping.mapper;

import com.example.shopping.entity.Image;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ImageMapper {
    boolean deleteByPrimaryKey(Integer id);

    boolean insert(Image record);

    Image selectByPrimaryKey(Integer id);

    List<Image> selectAllImage();

    boolean updateByPrimaryKey(Image record);
}
