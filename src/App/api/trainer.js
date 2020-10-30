import axios from 'axios';
import baseURL from './base';

const TrainerApi = {
  createTrainer: async (trainer) => {
    const response = await axios.post(`${baseURL}/trainers`, trainer);
    return response.data;
  },
  // TODO GTB-工程实践: - getAll这个function的命名改为getTrainers更能体现业务逻辑
  getAll: async () => {
    const response = await axios.get(`${baseURL}/trainers?grouped=false`);
    return response.data;
  },

  deleteTrainer: async (trainerId) => {
    await axios.delete(`${baseURL}/trainers/${trainerId}`);
  },
};

export default TrainerApi;
