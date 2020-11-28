import request from '../utils/request';

export const getTraineesNotGrouped = async () => {
  const response = await request.get('/trainees?grouped=false');
  return response.data;
};

export const addTrainee = async (name) => {
  const response = await request.post('/trainees', name);
  return response.data;
};

export const deleteTrainee = async (traineeId) => {
  await request.delete(`/trainees/${traineeId}`);
};
