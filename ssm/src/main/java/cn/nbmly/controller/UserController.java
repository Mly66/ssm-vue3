package cn.nbmly.controller;


import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

import cn.nbmly.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import cn.nbmly.service.UserService;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletResponse;

@Controller
@RequestMapping("user")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping("/queryUserPage")
    @ResponseBody
    @CrossOrigin
    public List<User> queryUserPage(Integer page, HttpServletResponse response) {
        int pageNow = page == null ? 1 : page;
        int pageSize = 5;
        int startRows = pageSize * (pageNow - 1);
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Cache-Control", "no-cache");
        return userService.queryUserPage(startRows);
    }

    @RequestMapping("/selectUserPage")
    @ResponseBody
    @CrossOrigin
    public List<User> selectUserPage(String userName, String userSex, Integer page, HttpServletResponse response) {
        int pageNow = page == null ? 1 : page;
        int pageSize = 5;
        int startRows = pageSize * (pageNow - 1);
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Cache-Control", "no-cache");
        return userService.selectUserPage(userName, userSex, startRows);
    }

    @RequestMapping("/getRowCount")
    @ResponseBody
    @CrossOrigin()
    public Integer getRowCount(String userName, String userSex, HttpServletResponse response) {

        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Cache-Control", "no-cache");
        return userService.getRowCount(userName, userSex);
    }

    @RequestMapping("/createUser")
    @ResponseBody
    @CrossOrigin
    public Integer createUser(@RequestBody User user) {
        // 生成一个唯一的 userId
        Random random = new Random();
        Integer number = random.nextInt(9000) + 1000;
        user.setUserId(System.currentTimeMillis() + String.valueOf(number));

        // 调用服务层方法进行用户创建
        return userService.createUser(user);
    }


    @RequestMapping("/deleteUserById")
    @ResponseBody
    @CrossOrigin()
    public Integer deleteUserById(String userId, HttpServletResponse response) {
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Cache-Control", "no-cache");
        return userService.deleteUserById(userId);
    }

    @RequestMapping(value = "/deleteUserByIdList")
    @ResponseBody
    @CrossOrigin
    public Integer deleteUserByIdList(@RequestBody List<String> userIdList, HttpServletResponse response) {
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Cache-Control", "no-cache");

        if (userIdList == null || userIdList.isEmpty()) {
            return 0;
        }

        return userService.deleteUserByIdList(userIdList);
    }


    @RequestMapping("/updateUserById")
    @ResponseBody
    @CrossOrigin
    public Integer updateUserById(@RequestBody User user, HttpServletResponse response) {
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Cache-Control", "no-cache");
        return userService.updateUserById(user);
    }

    @RequestMapping("/fetchUserById")
    @ResponseBody
    @CrossOrigin()
    public List<User> fetchUserById(String userId, HttpServletResponse response) {
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Cache-Control", "no-cache");
        return userService.fetchUserById(userId);
    }


    @RequestMapping("/findAll")
    @ResponseBody
    @CrossOrigin()
    public List<User> findAll(User user) {
        return userService.findAll();
    }



}

