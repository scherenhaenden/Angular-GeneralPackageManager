import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PackagesViewsComponent} from './packages-views.component';

@NgModule({
  imports: [CommonModule],
  exports: [PackagesViewsComponent],
  declarations: [PackagesViewsComponent]
})
export class PackagesViewsModule {}
