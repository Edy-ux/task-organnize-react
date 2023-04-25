import userService from '../../users/services/user.services';
import { LOGGED_USER_ID } from '../../../_common/constants';
import api from '_common/services/api';
import { STATUS_TASK_ROUTE } from '../constants';

const BASE_PATH = '/task';

const getByStatus = (status) => {
  const statusCode = STATUS_TASK_ROUTE[status] || 3;
  return api.get(`${BASE_PATH}/${statusCode}/${LOGGED_USER_ID}`);
};

const post = (task) => {
  return api.post(`${BASE_PATH}`, task);
};

const put = (task) => {
  return api.put(`${BASE_PATH}/${task._id}`, task);
};

const deleteTask = (task) => {
  return api.delete(`${BASE_PATH}/${task._id}`);
};

const getResponsible = () => {
  return userService.getAll();
};

const getAll = () => {
  return api.get(`${BASE_PATH}`);
};
const taskService = {
  getByStatus,
  post,
  put,
  deleteTask,
  getAll,
  getResponsible
};

export default taskService;
