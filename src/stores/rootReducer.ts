import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({});

export type RootReducer = typeof rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
