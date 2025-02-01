import axios from 'axios';

const API = axios.create({ baseURL: import.meta.env.VITE_BACKEND_URL });

// Attach JWT token to every request
API.interceptors.request.use((req) => {
    const token = localStorage.getItem('token');
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
});

export const loginAdmin = (adminData) => API.post('/api/admin/login', adminData);
export const fetchProducts = () => API.get('/api/products');
export const fetchProductById = (id) => API.get(`/api/products/${id}`);
export const addProduct = (productData) => API.post('/api/products', productData);
