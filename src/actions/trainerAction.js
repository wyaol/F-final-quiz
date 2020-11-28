import request from '../utils/request';

export const getTrainersNotGrouped = async () => {
  const response = await request.get('/trainers?grouped=false');
  return response.data;
};

export const addTrainer = async (name) => {
  const response = await request.post('/trainers', { name });
  return response.data;
};

export const deleteTrainer = async (trainerId) => {
  await request.delete(`/trainers/${trainerId}`);
};
