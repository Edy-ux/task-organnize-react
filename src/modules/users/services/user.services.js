import api from '_common/services/api';

const BASE_PATH = '/user';

const fetchAll = () => {
  return api.get(BASE_PATH);
};

const post = (user) => {
  return api.post(BASE_PATH, user);
};

const put = (user) => {
  return api.put(`${BASE_PATH}/${user._id}`, user);
};

const remove = (userId) => {
  return api.delete(`${BASE_PATH}/${userId}`);
};

const UserService = { fetchAll, post, put, remove };

export default UserService;


export const userAPI = {
  async fetchAll() {
    const result = await fetch(`${process.env.REACT_APP_API_URL}/user`, { method: 'GET' });
    return result.json();
  }
};

// Define a service using a base URL and expected endpoints
