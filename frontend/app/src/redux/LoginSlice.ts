import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface LoginState {
  username: string;
  password: string;
  token: string | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: LoginState = {
  username: '',
  password: '',
  token: null,
  status: 'idle',
  error: null,
};

export const loginUser = createAsyncThunk(
  'login/loginUser',
  async ({ username, password }: { username: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login/', {
        username,
        password,
      });
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        return rejectWithValue('Please enter correct credentials.');
      } else {
        return rejectWithValue('Login failed. Please try again.');
      }
    }
  }
);

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    
    logout: (state) => {
      state.username = '';
      state.password = '';
      state.token = null;
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const { setUsername, setPassword, logout } = loginSlice.actions;

export default loginSlice.reducer;
