import request from '../utils/request';

export const autoGrouping = async () => {
  const response = await request.post('/groups/auto-grouping');
  return response.data;
};

export const getGroups = async () => {
  const response = await request.get('/groups');
  return response.data;
};
// TODO GTB-工程实践: + 有封装基础的request
// TODO GTB-工程实践: + 有抽取API层，进行二次抽象去处理CRUD，且做了拆分，但是这个文件夹的命名actions不太合理
