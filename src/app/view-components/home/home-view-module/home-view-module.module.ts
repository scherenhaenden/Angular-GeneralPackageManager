import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeViewModuleComponent } from './home-view-module.component';
import { PackagesViewsModule } from '../../child-view-components/packages-views/packages-views.module';
import { FormsModule } from '../../../../../node_modules/@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    PackagesViewsModule,
    FormsModule
  ],
  declarations: [HomeViewModuleComponent]
})
export class HomeViewModuleModule { }
