import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { JwtInterceptor } from './helpers/jwt-interceptor.service';
import { ErrorInterceptorService } from './helpers/error-interceptor.service';
import { fakeBackendProvider } from './helpers/fake-backend-interceptor.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from "ngx-spinner";
import { SpinnerOverlayComponent } from './components/spinner-overlay/spinner-overlay.component'; 
import { OverlayModule } from '@angular/cdk/overlay';
import { SpinnerInterceptorService } from './helpers/spinner-interceptor.service';
import { NgChartsModule } from 'ng2-charts';
 
// var myAppModule = angular.module('MyApp', ['ui.select2']);

@NgModule({
  declarations: [
    AppComponent,
    SpinnerOverlayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgxSpinnerModule,
    OverlayModule,
    NgChartsModule
  ],
  providers: [
    
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptorService, multi: true,},

    // provider used to create fake backend
    fakeBackendProvider
],
  bootstrap: [AppComponent]
})
export class AppModule { }
