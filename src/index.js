import { createAction } from 'redux-actions';
import createOneShotMiddleware from 'redux-middleware-oneshot';
import { AppStateIOS } from 'react-native';

export const TYPE = 'REDUX_MIDDLEWARE_REACT_NATIVE_APPSTATE';
export const action = createAction(TYPE);
export const middleware = createOneShotMiddleware((dispatch) => {
    const handle = (state) => dispatch(action(state.toLowerCase()));
    handle(AppStateIOS.currentState);
    AppStateIOS.addEventListener('change', handle);
});

