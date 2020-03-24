import { ActionReducerMap } from '@ngrx/store';

import { buttonsInformationReducers } from './buttons-information.reducers';

export const appReducers: ActionReducerMap<any> = {
    buttonsInformation: buttonsInformationReducers
};