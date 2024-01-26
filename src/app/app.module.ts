import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentContainerComponent } from './content-conteiner/content-container.component';
import { MatSidenavModule } from "@angular/material/sidenav";
import { HeaderComponent } from "@shared/components/header/header.component";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from "@angular/material/core";
import { WishListModule } from "./pages/wish-list/wish-list.module";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

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
        MatListModule,
        MatDividerModule,
        HeaderComponent,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        StoreModule.forRoot({}, {}),
        EffectsModule.forRoot([]),
        MatRippleModule,
      WishListModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
