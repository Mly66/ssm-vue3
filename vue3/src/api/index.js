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
  return request.post(
    '/user/deleteUserByIdList',
    userIdList,
    {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    }
  );
};

// 根据用户ID获取个人信息
export const fetchUserById = (userId) => {
  return request.get(`/user/fetchUserById`, {
    params: { userId }, 
    withCredentials: true,
  });
};
// 更新用户信息
export const updateUserById = (user) => {
  const postData = new URLSearchParams({
    userId: user.userId,
    cardNo: user.cardNo,
    cardType: user.cardType,
    userName: user.userName,
    userSex: user.userSex,
    userAge: user.userAge,
    userRole: user.userRole
  }).toString();

  return request.post('/user/updateUserById', postData, { withCredentials: true });
};


// 获取所有用户
export const findAll = () => {
  return request.post('/user/findAll', {}, { withCredentials: true });
};
