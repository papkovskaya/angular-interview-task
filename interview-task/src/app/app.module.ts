import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { appReducers } from './store/reducers/app.reducers';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { InputMessageComponent } from './components/input-message/input-message.component';
import { ListOfButtonsComponent } from './components/list-of-buttons/list-of-buttons.component';
import { OutputMessageComponent } from './components/output-message/output-message.component';
import { OutputButtonComponent } from './components/output-button/output-button.component';
import { OutputContainerComponent } from './components/output-container/output-container.component';
import { CaseInverterPipe } from './pipes/case-inverter.pipe';
import { MessageEffects } from './store/effects/message.effects';

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
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([MessageEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
