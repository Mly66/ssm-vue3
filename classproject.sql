/*
 Navicat Premium Data Transfer

 Source Server         : MySQL
 Source Server Type    : MySQL
 Source Server Version : 80037
 Source Host           : localhost:3306
 Source Schema         : classproject

 Target Server Type    : MySQL
 Target Server Version : 80037
 File Encoding         : 65001

 Date: 10/12/2024 13:49:21
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `user_id` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '',
  `card_type` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `card_no` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `user_name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `user_sex` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `user_age` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `user_role` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('15968163514764733', '身份证', '7894654654', 'John Doe', 'Male', '30', 'Admin');
INSERT INTO `user` VALUES ('15968165113694372', '台湾往来大陆通行证', '343214321412433214', '遗体ioy', '女', '48', '生产、运输设备操作人员及有关人员');
INSERT INTO `user` VALUES ('15968165371931786', '港澳居民通行证', '65765887989090909', '垂直发射的', '女', '35', '不便分类的其他从业人员');
INSERT INTO `user` VALUES ('15968944123869023', '护照', '43225465457657', 'VCD法国', '女', '39', '农、林、牧、渔、水利业生产人员');
INSERT INTO `user` VALUES ('15968953962316864', '身份证', '342354325', '房东是个大帅哥', '女', '33', '商业、服务业人员');
INSERT INTO `user` VALUES ('15968954638794962', '身份证', '343343554654', '撒撒旦', '女', '29', '生产、运输设备操作人员及有关人员');
INSERT INTO `user` VALUES ('16255514079095454', '身份证', '12345678901234567', '解决了跨域问题', '男', '25', '军人');
INSERT INTO `user` VALUES ('17337579207236949', 'ID', '123456789', 'John Doe', 'M', '30', 'Admin');
INSERT INTO `user` VALUES ('17337580453379264', '身份证', '202206020129', '马璐瑶', '男', '19', 'admin');
INSERT INTO `user` VALUES ('17337581171881987', '身份证', '110101199001011234', '张三', '男', '28', '管理员');
INSERT INTO `user` VALUES ('17337581281857900', '身份证', '110102198512310056', '李四', '男', '35', '用户');
INSERT INTO `user` VALUES ('17337583150794622', '身份证', '110101199001011234', '张三', '男', '28', '管理员');
INSERT INTO `user` VALUES ('17337583150949504', '身份证', '110102198512310056', '李四', '男', '35', '用户');
INSERT INTO `user` VALUES ('17337583151045381', '身份证', '320582199209070089', '王五', '女', '29', '开发者');
INSERT INTO `user` VALUES ('17337583151154566', '身份证', '440301199405080012', '赵六', '男', '27', '设计师');
INSERT INTO `user` VALUES ('17337583151259024', '身份证', '510108198806090021', '钱七', '女', '32', '产品经理');
INSERT INTO `user` VALUES ('17337583151341817', '身份证', '370203198907100016', '孙八', '男', '31', '技术支持');
INSERT INTO `user` VALUES ('17337583151457376', '身份证', '330106198512120021', '周九', '女', '34', '市场经理');
INSERT INTO `user` VALUES ('17337583151551505', '身份证', '210102198310050034', '吴十', '男', '38', '财务总监');
INSERT INTO `user` VALUES ('17337583151659724', '身份证', '410105198708090059', '郑十一', '女', '30', '人力资源');
INSERT INTO `user` VALUES ('17337583151757900', '身份证', '330106199001120021', '王十二', '男', '25', '实习生');
INSERT INTO `user` VALUES ('17337585850182904', '身份证', '123489648', '按实际考虑到', '男', '19', '你们');

SET FOREIGN_KEY_CHECKS = 1;
