import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// If using Next.js with SSR, you might need to use a different storage solution
// for server-side rendering compatibility:
// import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

// Example slice import (create this file next)
import counterReducer from './slices/counterSlice';

// Configure Redux Persist
const persistConfig = {
  key: 'root',
  storage,
  // Optionally blacklist parts of the state from being persisted
  // blacklist: ['someReducer']
};

// Combine all reducers
const rootReducer = combineReducers({
  counter: counterReducer,
  // Add more reducers here as your app grows
});

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types to avoid serialization errors
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

// Create persistor
export const persistor = persistStore(store);

// Export RootState and AppDispatch types for use with TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;