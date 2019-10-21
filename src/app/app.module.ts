import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddSentenceComponent } from './sentence/components/add/add-sentence/add-sentence.component';
import { HeaderComponent } from './shared/components/layout/public/header/header.component';
import { FooterComponent } from './shared/components/layout/public/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AddSentenceComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
