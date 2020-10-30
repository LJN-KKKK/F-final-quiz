import axios from 'axios';
import baseURL from './base';

const TraineeApi = {
  createTrainee: async (trainee) => {
    const response = await axios.post(`${baseURL}/trainees`, trainee);
    return response.data;
  },
  // TODO GTB-工程实践: - getAll这个function的命名改为getTrainees更能体现业务逻辑
  getAll: async () => {
    const response = await axios.get(`${baseURL}/trainees?grouped=false`);
    return response.data;
  },

  deleteTrainee: async (traineeId) => {
    await axios.delete(`${baseURL}/trainees/${traineeId}`);
  },
};

export default TraineeApi;
