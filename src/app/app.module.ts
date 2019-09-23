import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CustomMaterialModule } from './core/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//import { APP_BASE_HREF } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './components/product/product.component';
import { MakebillComponent } from './components/makebill/makebill.component';
import { BillhistoryComponent } from './components/billhistory/billhistory.component';
import { ProductcardComponent } from './components/productcard/productcard.component';
import { BillcardComponent } from './components/billcard/billcard.component'; 
import { DialogOverviewExampleDialog } from './components/product/product.component';
import { FinalbillComponent } from './components/finalbill/finalbill.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    MakebillComponent,
    BillhistoryComponent,
    ProductcardComponent,
    BillcardComponent,
    DialogOverviewExampleDialog,
    FinalbillComponent,
    
    //CustomMaterialModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents: [DialogOverviewExampleDialog],
})

export class AppModule {
}
