import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoFormSkuComponent } from './demo-form-sku/demo-form-sku.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoFormSkuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err: any) => console.error(err));