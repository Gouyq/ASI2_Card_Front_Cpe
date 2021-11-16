import { combineReducers, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from './user.reducer'
import cardReducer from './card.reducer'

const rootReducer = combineReducers({
    userState: userReducer,
    cardState: cardReducer
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['userState', 'cardState']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer)

export const persistor = persistStore(store)