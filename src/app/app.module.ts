import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { simpleReducer } from './simple.reducer';
import { postReducer } from './post.reducer';

import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(
      {
        message: simpleReducer,
        post: postReducer
      }),
    StoreDevtoolsModule.instrument(
      {
        maxAge: 10
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
