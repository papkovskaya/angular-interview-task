import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { InputMessageComponent } from './components/input-message/input-message.component';
import { ListOfButtonsComponent } from './components/list-of-buttons/list-of-buttons.component';
import { OutputMessageComponent } from './components/output-message/output-message.component';
import { OutputButtonComponent } from './components/output-button/output-button.component';
import { OutputContainerComponent } from './components/output-container/output-container.component';
import { CaseInverterPipe } from './pipes/case-inverter.pipe';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
