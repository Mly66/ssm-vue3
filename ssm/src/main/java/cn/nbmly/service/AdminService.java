package cn.nbmly.service;

import cn.nbmly.entity.Admin;
import cn.nbmly.entity.User;

import java.util.List;

public interface AdminService {
    /**
     * 验证密码
     * 根据 account，password,role 验证用户
     * @return 返回码
     */
    Integer tryPassword(Admin admin);

    /**
     * 添加管理员
     * @return 返回码
     */
    Integer insertAdmin(Admin admin);

    /**
     * 获取管理员信息
     * @return 返回码
     */
    List<Admin> fetchAdminById(String account);

    /**
     * 根据 account 更新管理员
     * @return 返回码
     */
    Integer updateAdminById(Admin admin);
}
