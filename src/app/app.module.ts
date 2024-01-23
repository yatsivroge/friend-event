import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentContainerComponent } from './content-conteiner/content-container.component';
import { MatSidenavModule } from "@angular/material/sidenav";
import { HeaderComponent } from "@shared/components/header/header.component";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContentContainerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    HeaderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
