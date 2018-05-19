import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatInputModule, MatCardModule, MatIconModule } from '@angular/material';

import { AppComponent } from './app.component';

import { AiService } from './service/ai.service';
import { AiComponent } from './components/ai/ai.component';

@NgModule({
  declarations: [
    AppComponent,
    AiComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule, MatInputModule, MatCardModule, MatIconModule
  ],
  providers: [
    AiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
