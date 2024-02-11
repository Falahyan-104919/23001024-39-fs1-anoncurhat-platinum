import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '@/utils/axios';
import { calculateAge } from '@/utils/helper';

export const login = createAsyncThunk('auth/login', async (credentials) => {
  const res = await axiosInstance.post('/auth/login', credentials);
  return res.data;
});

const initialState = {
  isLoggedIn: false,
  user_id: null,
  username: null,
  gender: null,
  age: null,
  role: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    user_id: null,
    username: null,
    gender: null,
    age: null,
    role: null,
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem('authState');
      Object.assign(state, initialState);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      const { token, user_data } = action.payload;
      state.isLoggedIn = true;
      state.user_id = user_data['id_user'];
      state.username = user_data['username'];
      state.gender = user_data['gender'];
      state.age = calculateAge(user_data['date_of_birth']);
      state.role = user_data['role'];
      axiosInstance.defaults.headers.common['Authorization'] = token;
      const serializedState = JSON.stringify(state);
      localStorage.setItem('authState', serializedState);
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice;
