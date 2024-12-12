package cn.nbmly.dao;

import cn.nbmly.entity.Admin;

import java.util.List;

public interface AdminMapper {


    /**
     * 根据 account，password 验证用户
     *
     * @return 返回码
     */
    Integer tryPassword(Admin admin);

    /**
     * 添加管理员
     *
     * @return 返回码
     */
    Integer insertAdmin(Admin admin);

    /**
     * 获取管理员信息
     *
     * @return 返回码
     */
    List<Admin> fetchAdminById(String account);

        /**
     * 根据 account 更新管理员
     * @return 返回码
     */
     Integer updateAdminById(Admin admin);
}
