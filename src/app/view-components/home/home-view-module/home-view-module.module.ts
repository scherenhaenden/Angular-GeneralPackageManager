import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeViewModuleComponent } from './home-view-module.component';
import { PackagesViewsModule } from '../../child-view-components/packages-views/packages-views.module';

@NgModule({
  imports: [
    CommonModule,
    PackagesViewsModule
  ],
  declarations: [HomeViewModuleComponent]
})
export class HomeViewModuleModule { }
