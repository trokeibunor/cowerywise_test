import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Client-ID xuelJTAjloZ2AWW9W4Kda6fVi4zhix-ZKPkrsgHehMc`,
  },
});

export default api;