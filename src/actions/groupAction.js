import request from '../utils/request';

export const autoGrouping = async () => {
  const response = await request.post('/trainees/auto-grouping');
  return response.data;
};
