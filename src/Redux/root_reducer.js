import {
  createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import {
  persistStore,
  persistReducer,
} from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";
import thunkMiddleware from "redux-thunk";
import {createLogger} from "redux-logger";
import {gallery} from "./reducer/gallery";
import {user} from "./reducer/user";
const loggerMiddleware = createLogger();

const persistConfig = {
  key: "b77a14f0-fd25-11ea-95f1-ff14921ff326",
  storage,
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers({
  gallery,
  user,
});
const persistedReducer = persistReducer(
  persistConfig,
  rootReducer
);

export const store = createStore(
  persistedReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);
export const persistor = persistStore(store);
