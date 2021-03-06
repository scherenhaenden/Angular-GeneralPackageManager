import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { EnsureModuleLoadedOnceGuard } from './tools/guards/EnsureModuleLoadedOnceGuard';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NugetService } from './tools/services/nuget/nuget.service';
import { PackageService } from './tools/services/generic/package.service';
import { environment } from '../environments/environment';
import { GenerickPackageParser } from './tools/parsers/generick.package.parser';
import { NPMService } from './tools/services/npm/npm.service';
import { LuaRockservice } from './tools/services/lua.rocks/lua.rocks.service';







@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    RouterModule,
    RouterTestingModule
    
  ],
  providers: [
    NugetService, 
    PackageService,
    GenerickPackageParser,
    NPMService,
    LuaRockservice
   
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule extends EnsureModuleLoadedOnceGuard {
  constructor( @Optional() @SkipSelf() parentModule: AppModule)  {
    super(parentModule);
  }
 }
