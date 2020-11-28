import request from '../utils/request';

export const autoGrouping = async () => {
  const response = await request.post('/groups/auto-grouping');
  return response.data;
};

export const getGroups = async () => {
  const response = await request.get('/groups');
  return response.data;
};
