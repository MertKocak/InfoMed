import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Choose your storage engine
import rootReducer from "./reducers"

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['favDrugsList', 'newDrugsList'],
    
  };

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer);
export const persistor = persistStore(store); 