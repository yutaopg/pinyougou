package com.pinyougou.sellergoods.service;

import java.util.List;
import java.util.Map;

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


    //修改
    void update(TbBrand brand);

    //根据id查找,用于回显
    TbBrand findOne(Long id);

    //多条删除
    void delete(Long[] ids);

    /**
     * *
     * @param pageNum 当前页 码
     * @param  pageSize 每页记录数
     */
    public PageResult findPage(TbBrand brand, int pageNum,int pageSize);

    /**
     * 品牌下拉框数据
     */
    List<Map> selectOptionList();
}
