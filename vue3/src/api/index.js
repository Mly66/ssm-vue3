import request from '../axios/request'; 

// 获取用户分页数据
export const fetchUsers = (page, userName, userSex) => {
  const postData = new URLSearchParams({
    userName,
    userSex,
    page,
  }).toString();

  return request.post('/user/selectUserPage', postData, { withCredentials: true });
};

// 获取用户数量
export const fetchUserCount = (userName, userSex) => {
  const postData = new URLSearchParams({
    userName,
    userSex,
  }).toString();

  return request.post('/user/getRowCount', postData, { withCredentials: true });
};

// 创建用户
export const createUser = (user) => {
  return request.post('/user/createUser', user, { withCredentials: true });
};

// 根据ID删除用户
export const deleteUserById = (userId) => {
  const postData = new URLSearchParams({ userId }).toString();

  return request.post('/user/deleteUserById', postData, { withCredentials: true });
};

// 根据ID批量删除用户
export const deleteUserByIdList = (userIdList) => {
  const postData = new URLSearchParams({ userIdList }).toString();

  return request.post('/user/deleteUserByIdList', postData, { withCredentials: true });
};

// 更新用户信息
export const updateUserById = (user) => {
  return request.post('/user/updateUserById', user, { withCredentials: true });
};

// 获取所有用户
export const findAll = () => {
  return request.post('/user/findAll', {}, { withCredentials: true });
};
