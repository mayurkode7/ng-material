import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { OnboardComponent } from './sections/onboard/onboard.component';
import { AccountsService } from './services/accounts.service';
import { OnboardResolver } from './sections/onboard/onboard.resolver';


@NgModule({
    declarations: [
        AppComponent,
        OnboardComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule
    ],
    providers: [AccountsService, OnboardResolver],
    bootstrap: [AppComponent]
})
export class AppModule { }
