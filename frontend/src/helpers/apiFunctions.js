import axios from "axios";

const baseUrl = 'http://localhost:3001/tasks';

export const getAll = async () => {
  const response = await axios.get(baseUrl);
  // console.log(response);
  return response.data;
};

export const post = async ({ title }) => {
  const body = {
    title,
    type: 'a fazer',
  };
  const response = await axios.post(baseUrl, body);
  // console.log(response);
  return response;
};

export const put = async (id, type) => {
  const response = await axios.put(`${baseUrl}/${id}`, { type });
  // console.log(response);
  return response;
};

export const destroy = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`);
  // console.log(response);
  return response;
};
