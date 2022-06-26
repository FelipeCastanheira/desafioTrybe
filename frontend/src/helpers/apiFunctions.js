import axios from "axios";

const baseUrl = 'http://localhost:3001/tasks';

export const getAll = async () => {
  const response = await axios.get(baseUrl);
  console.log(response);
  return response;
};

export const post = async (title) => {
  const response = await axios.post(baseUrl); // Missing body
  console.log(response);
  return response;
};

export const put = async (id, type) => {
  const response = await axios.put(`${baseUrl}/${id}`); // Missing body
  console.log(response);
  return response;
};

export const destroy = async (id) => {
  const response = await axios.destroy(`${baseUrl}/${id}`);
  console.log(response);
  return response;
};
