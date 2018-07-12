import { Component, OnInit, ElementRef, ViewChild, AfterContentInit } from '@angular/core';
import { MockingLoadPackaged } from '../../../Mock/mocking.load.packaged';
import { GenericPackage } from '../../../models/packages/generic.package';
import { NugetService } from '../../../tools/services/nuget/nuget.service';



@Component({
  moduleId: module.id,
  templateUrl: './home-view-module.component.html',
  styleUrls: ['./home-view-module.component.css', './home-view-module.component.less']
})
export class HomeViewModuleComponent implements OnInit, AfterContentInit {
 
  @ViewChild('packagesDiv') packagesDiv: ElementRef;

  public mockingLoadPackaged = new MockingLoadPackaged();
  public genericPackages: Array<GenericPackage> = [];

  public sm:any;

  constructor(private nugetService: NugetService) { }

  ngOnInit() {  
     
  }

  ngAfterContentInit(): void {        
  }

  //Delete Initial Content of Div (this one might be temporal).
  private deleteContentFromResultsViewer(): void{
    this.packagesDiv.nativeElement.innerHTML = "";

  }

  public searchPackage(): void {

    this.genericPackages= this.mockingLoadPackaged.getSimpleListOfPackages();
    console.log(this.genericPackages);
    console.log(this.sm);
    this.showConfig(); 
    
    
  }

  private showConfig() {
    this.nugetService.getIndexService()
      .subscribe((data: any) => this.sm = {
          
          
          
          data
      }.data);

  }



}
