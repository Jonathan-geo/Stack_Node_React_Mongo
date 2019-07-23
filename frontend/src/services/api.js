// A axios permite, dentre várias coisas, configurar base URL, que irá servir para todas as requisições.
import axios from 'axios';


const api = axios.create({
  baseURL: 'http://localhost:3355',
});

export default api;
