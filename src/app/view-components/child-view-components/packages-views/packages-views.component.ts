import { Component, OnInit, Input } from '@angular/core';
import { GenericPackage } from '../../../models/packages/generic.package';

@Component({
  selector: 'app-packages-views',
  templateUrl: './packages-views.component.html',
  styleUrls: ['./packages-views.component.less']
})
export class PackagesViewsComponent implements OnInit {

  @Input()  public genericPackages: Array<GenericPackage> = [];

  constructor() { }

  ngOnInit() {    
  }

}
