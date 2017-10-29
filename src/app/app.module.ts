import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AiService } from '../service/ai.service';
import { AiComponent } from './ai/ai.component';

@NgModule({
  declarations: [
    AppComponent,
    AiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    AiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
