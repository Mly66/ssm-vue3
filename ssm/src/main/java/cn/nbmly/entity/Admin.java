package cn.nbmly.entity;

public class Admin {
    private String account;
    private String password;
    private Integer role;
    private String picurl; // 新增字段

    public Admin() {
    }

    public String getAccount() {
        return account;
    }

    public void setAccount(String account) {
        this.account = account;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Integer getRole() {
        return role;
    }

    public void setRole(Integer role) {
        this.role = role;
    }

    public String getPicurl() { // 新增方法
        return picurl;
    }

    public void setPicurl(String picurl) { // 新增方法
        this.picurl = picurl;
    }

    @Override
    public String toString() {
        return "Admin{" +
                "account='" + account + '\'' +
                ", password='" + password + '\'' +
                ", role=" + role +
                ", picurl='" + picurl + '\'' + // 更新toString方法
                '}';
    }
}