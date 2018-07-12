import { Component, OnInit, ElementRef, ViewChild, AfterContentInit } from '@angular/core';
import { MockingLoadPackaged } from '../../../Mock/mocking.load.packaged';
import { GenericPackage } from '../../../models/packages/generic.package';



@Component({
  moduleId: module.id,
  templateUrl: './home-view-module.component.html',
  styleUrls: ['./home-view-module.component.css', './home-view-module.component.less']
})
export class HomeViewModuleComponent implements OnInit, AfterContentInit {
 
  @ViewChild('packagesDiv') packagesDiv: ElementRef;

  public mockingLoadPackaged = new MockingLoadPackaged();
  public genericPackages: Array<GenericPackage> = [];

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    console.log(this.packagesDiv.nativeElement.innerHTML);
    //this.deleteContentFromResultsViewer();
  }

  //Delete Initial Content of Div (this one might be temporal).
  private deleteContentFromResultsViewer(): void{
    this.packagesDiv.nativeElement.innerHTML = "";

  }

  public searchPackage(): void {

    this.genericPackages= this.mockingLoadPackaged.getSimpleListOfPackages();
    console.log(this.genericPackages);
    
    
  }

}
