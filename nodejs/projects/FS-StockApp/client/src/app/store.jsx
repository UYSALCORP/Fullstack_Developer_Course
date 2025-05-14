import { configureStore } from "@reduxjs/toolkit";
// import { createStore } from 'redux'
import { persistStore, persistReducer,REHYDRATE,FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,} from 'redux-persist'
import authReducer from "../features/authSlice";
import stockReducer from "../features/stockSlice"
import storage from 'redux-persist/lib/storage' //! Defaults to localStroge for web


const persistConfig = {
  key: 'root',
  storage,
}
//! Persist localeStorage ve kendi authReducer'ımızı bırleştirdik.
const persistedReducer = persistReducer(persistConfig, authReducer)

const store = configureStore({
  reducer: {
    // auth: authReducer,
    //? Ilk başta authReducer olan key'imizi birleştirmeden sonra değiştirdik.
    auth: persistedReducer,
    //? stockSlice.jsx'den store'a importumuzu yaptık.
    stock: stockReducer
  },
  //! Register cart curt diye aldıgım error'un çözümü
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== "production",
});

export let persistor = persistStore(store) //* Named export
export default store; //* export default
