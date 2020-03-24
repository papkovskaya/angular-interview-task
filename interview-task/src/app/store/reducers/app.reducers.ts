import { ActionReducerMap } from '@ngrx/store';

import { buttonsInformationReducers } from './buttons-information.reducers';
import { messageReducer } from './message.reducer';

export const appReducers: ActionReducerMap<any> = {
    buttonsInformation: buttonsInformationReducers,
    message: messageReducer
};