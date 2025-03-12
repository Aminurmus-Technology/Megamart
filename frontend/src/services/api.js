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

// User Authentication
export const signUpUser = (userData) => API.post('/user/signup', userData);
export const loginUser = (loginData) => API.post('/user/login', loginData);
export const loginAdmin = (loginData) => API.post('/admin/login', loginData);
export const fetchUserProfile = () => API.get('/user/profile');
export const updatePassword = (passwordData) => API.put('/user/profile/password', passwordData);

// Product API
export const fetchProducts = () => API.get('/products');
export const fetchProductById = (id) => API.get(`/products/${id}`);
export const addProduct = (productData) => API.post("/admin/products", productData);
export const deleteProductById = (id) => API.delete(`admin/products/${id}`);