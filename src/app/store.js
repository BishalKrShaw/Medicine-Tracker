import { configureStore } from "@reduxjs/toolkit";
import medicineSlice from "../features/medicineSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, medicineSlice)

const store = configureStore({

  reducer: {
    sliceMedicine: persistedReducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
  }),

})

const persistor = persistStore(store);

export { store, persistor };