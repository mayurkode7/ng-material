import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { SharedComponent } from './shared.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  declarations: [SharedComponent, HeaderComponent, FooterComponent, PageNotFoundComponent],
  exports : [ SharedComponent , HeaderComponent, FooterComponent, PageNotFoundComponent]
})
export class SharedModule { }
