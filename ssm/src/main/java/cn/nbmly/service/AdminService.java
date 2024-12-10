package cn.nbmly.service;

import cn.nbmly.entity.Admin;

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
}
