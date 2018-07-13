import { Datum } from '../../../models/packages/services/datum';
import { Component, OnInit, ElementRef, ViewChild, AfterContentInit } from '@angular/core';
import { MockingLoadPackaged } from '../../../Mock/mocking.load.packaged';
import { GenericPackage } from '../../../models/packages/generic.package';
import { NugetService } from '../../../tools/services/nuget/nuget.service';
import { SearchAutoCompleteResponseModel } from '../../../models/packages/services/SearchAutoCompleteResponse.model';
import { PackageService } from '../../../tools/services/generic/package.service';



@Component({
  moduleId: module.id,
  templateUrl: './home-view-module.component.html',
  styleUrls: ['./home-view-module.component.css', './home-view-module.component.less']
})
export class HomeViewModuleComponent implements OnInit, AfterContentInit {
  @ViewChild('packagesDiv') packagesDiv: ElementRef;

  public mockingLoadPackaged = new MockingLoadPackaged();
  public genericPackages: Array<GenericPackage> = [];
  public searchInput: string;
  public searchAutoCompleteResponseModel:SearchAutoCompleteResponseModel;
  public currentPkg: GenericPackage;

  constructor(private nugetService: NugetService
              ,private packageService: PackageService
               ) { }

  ngOnInit() {}

  ngAfterContentInit(): void {}

  //Delete Initial Content of Div (this one might be temporal).
  private deleteContentFromResultsViewer(): void {
    this.packagesDiv.nativeElement.innerHTML = '';
  }

  public onSelect(pkg: GenericPackage) {
    this.currentPkg = pkg;
  }

  public searchPackage(): void {
      try {
        this.getPackateStartingNameBy(); 
      }
      catch(error) {
        console.error(error);
        // expected output: SyntaxError: unterminated string literal
        // Note - error messages will vary depending on browser
      }
  }

  private async getPackateStartingNameBy() {

    /*this.packageService.getPackages(this.searchInput) .subscribe(data => {      
      this.searchAutoCompleteResponseModel= <SearchAutoCompleteResponseModel>data;      
      this.parseObects();
    });*/

    let any= await this.packageService.getPackages2(this.searchInput);
    //this.parseObects();
    /*this.genericPackages = any;*/
    console.log(any);
    
  
   // this.parseObects();

/*

    this.nugetService.findPackageStartingWith(this.searchInput)
    .subscribe(data => {      
      this.searchAutoCompleteResponseModel= <SearchAutoCompleteResponseModel>data;      
      this.parseObects();
    });*/
  }

  private parseObects(){
    this.genericPackages = new Array<GenericPackage> ();
    let genericPackage = new GenericPackage() ;
    for (let entry of this.searchAutoCompleteResponseModel.data) {
      genericPackage = new GenericPackage() ;
      genericPackage.Name = entry;
      this.genericPackages.push(genericPackage);
    }
  }

}
