package cn.nbmly.service.impl;


import cn.nbmly.dao.AdminMapper;
import cn.nbmly.entity.Admin;
import cn.nbmly.entity.Admin;
import cn.nbmly.service.AdminService;
import cn.nbmly.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class AdminServiceImpl implements AdminService {
    @Autowired
    public AdminMapper adminMapper;

    @Override
    public Integer tryPassword(Admin admin) {
        return adminMapper.tryPassword(admin);
    }

    @Override
    public Integer insertAdmin(Admin admin) {
        return adminMapper.insertAdmin(admin);
    }

    @Override
    public List<Admin> fetchAdminById(String account) {
        return adminMapper.fetchAdminById(account);
    }

    @Override
    public Integer updateAdminById(Admin admin) {
        return adminMapper.updateAdminById(admin);
    }
}
