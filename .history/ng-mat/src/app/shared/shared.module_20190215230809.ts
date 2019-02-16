import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SharedComponent, HeaderComponent, FooterComponent, PageNotFoundComponent],
  exports : [ SharedComponent , HeaderComponent, FooterComponent, PageNotFoundComponent]
})
export class SharedModule { }
