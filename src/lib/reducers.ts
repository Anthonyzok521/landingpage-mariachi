// reducers.ts
import { combineReducers, PayloadAction } from '@reduxjs/toolkit';

// counterSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface ImagePath {
  path: string;
}

const initialState: ImagePath = {
  path: '',
};

export const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    uploadImage: (state, payload: PayloadAction<string>) => {
      state.path = payload.payload;
    },
  },
});

export const { uploadImage } = imageSlice.actions;

const rootReducer = combineReducers({
  image: imageSlice.reducer,
});

export default rootReducer;