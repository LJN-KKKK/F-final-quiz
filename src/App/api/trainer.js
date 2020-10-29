import axios from 'axios';
import baseURL from './base';

const TrainerApi = {
  createTrainer: async (trainer) => {
    const response = await axios.post(`${baseURL}/trainers`, trainer);
    return response.data;
  },

  getAll: async () => {
    const response = await axios.get(`${baseURL}/trainers?grouped=false`);
    return response.data;
  },

  deleteTrainer: async (trainerId) => {
    await axios.delete(`${baseURL}/trainers/${trainerId}`);
  },
};

export default TrainerApi;
