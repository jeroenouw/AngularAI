import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatButtonModule, MatInputModule, MatCardModule, MatIconModule } from '@angular/material';

import { AppComponent } from './app.component';

import { AiService, AuthInterceptorService } from './services';
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
    AiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
