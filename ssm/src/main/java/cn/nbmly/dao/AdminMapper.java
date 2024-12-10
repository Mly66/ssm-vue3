package cn.nbmly.dao;

import cn.nbmly.entity.Admin;

public interface AdminMapper {


    /**
     * 根据 account，password 验证用户
     * @return 返回码
     */
    Integer tryPassword(Admin admin);

    /**
     * 添加管理员
     * @return 返回码
     */
    Integer insertAdmin(Admin admin);
}
