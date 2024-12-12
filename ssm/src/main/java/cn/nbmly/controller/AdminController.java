package cn.nbmly.controller;

import cn.nbmly.entity.Admin;
import cn.nbmly.entity.User;
import cn.nbmly.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.Random;

@Controller
@RequestMapping("admin")
public class AdminController {
    @Autowired
    private AdminService adminService;

    @RequestMapping("/tryPassword")
    @ResponseBody
    @CrossOrigin
    public Integer tryPassword(@RequestBody Admin admin, HttpServletResponse response) {
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Cache-Control", "no-cache");
        return adminService.tryPassword(admin);
    }

    @RequestMapping("/insertAdmin")
    @ResponseBody
    @CrossOrigin
    public Integer insertAdmin(@RequestBody Admin admin, HttpServletResponse response) {
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Cache-Control", "no-cache");
        return adminService.insertAdmin(admin);
    }

    @RequestMapping("/fetchAdminById")
    @ResponseBody
    @CrossOrigin()
    public List<Admin> fetchAdminById(String account, HttpServletResponse response) {
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Cache-Control", "no-cache");
        return adminService.fetchAdminById(account);
    }

    @RequestMapping("/updateAdminById")
    @ResponseBody
    @CrossOrigin
    public Integer updateUserById(@RequestBody Admin admin, HttpServletResponse response) {
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Cache-Control", "no-cache");
        return adminService.updateAdminById(admin);
    }
}
