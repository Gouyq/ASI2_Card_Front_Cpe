import { combineReducers, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from './user.reducer'
import cardReducer from './card.reducer'
import chatReducer from './chat.reducer'

const rootReducer = combineReducers({
    userState: userReducer,
    cardState: cardReducer,
    chatState: chatReducer
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['userState', 'cardState', 'chatState']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer)

export const persistor = persistStore(store)