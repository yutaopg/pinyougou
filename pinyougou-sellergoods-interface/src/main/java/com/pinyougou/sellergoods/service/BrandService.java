package com.pinyougou.sellergoods.service;

import java.util.List;

import com.pinyougou.pojo.TbBrand;
import entity.PageResult;

/**
 * 品牌接口
 *
 * @author Administrator
 */
public interface BrandService {

    //查询品牌列表
    public List<TbBrand> findAll();

    //分页查询品牌列表
    public PageResult findPage(Integer pageNum, Integer pageSize);

    /**
     * 品牌管理:增加
     */
    public void add(TbBrand brand);
}
