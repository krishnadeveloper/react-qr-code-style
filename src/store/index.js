import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga"
import rootReducer from "./root.reducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
)
// sagaMiddleware.run()
export default store;