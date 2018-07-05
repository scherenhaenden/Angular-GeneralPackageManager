import { EnsureModuleLoadedOnceGuard } from './tools/guards/EnsureModuleLoadedOnceGuard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Optional, SkipSelf } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule extends EnsureModuleLoadedOnceGuard {
  constructor( @Optional() @SkipSelf() parentModule: AppModule)  {
    super(parentModule);
  }
 }
