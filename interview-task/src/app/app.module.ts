import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { appReducers } from './store/reducers/app.reducers';
import { ButtonsInformationEffects } from './store/effects/buttons-information.effects';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { InputMessageComponent } from './components/input-message/input-message.component';
import { ListOfButtonsComponent } from './components/list-of-buttons/list-of-buttons.component';
import { OutputMessageComponent } from './components/output-message/output-message.component';
import { OutputButtonComponent } from './components/output-button/output-button.component';
import { OutputContainerComponent } from './components/output-container/output-container.component';
import { CaseInverterPipe } from './pipes/case-inverter.pipe';
import { buttonsInformationReducers } from './store/reducers/buttons-information.reducers';
import { messageReducer } from './store/reducers/message.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    InputMessageComponent,
    ListOfButtonsComponent,
    OutputMessageComponent,
    OutputButtonComponent,
    OutputContainerComponent,
    CaseInverterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({buttonsInformation: buttonsInformationReducers, message: messageReducer}),
    EffectsModule.forRoot([ButtonsInformationEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
