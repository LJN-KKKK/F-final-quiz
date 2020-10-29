import axios from 'axios';
import baseURL from './base';

const TraineeApi = {
  createTrainee: async (trainee) => {
    const response = await axios.post(`${baseURL}/trainees`, trainee);
    return response.data;
  },

  getAll: async () => {
    const response = await axios.get(`${baseURL}/trainees?grouped=false`);
    return response.data;
  },

  deleteTrainee: async (traineeId) => {
    await axios.delete(`${baseURL}/trainees/${traineeId}`);
  },
};

export default TraineeApi;
