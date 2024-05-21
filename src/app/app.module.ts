import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './modules/layout/layout/layout.component';
import { HeaderComponent } from './modules/layout/header/header.component';
import { FooterComponent } from './modules/layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
