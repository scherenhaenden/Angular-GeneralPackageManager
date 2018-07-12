import { Datum } from './../../../models/packages/services/datum';
import { Component, OnInit, ElementRef, ViewChild, AfterContentInit } from '@angular/core';
import { MockingLoadPackaged } from '../../../Mock/mocking.load.packaged';
import { GenericPackage } from '../../../models/packages/generic.package';
import { NugetService } from '../../../tools/services/nuget/nuget.service';
import { SearchAutoCompleteResponseModel } from '../../../models/packages/services/SearchAutoCompleteResponse.model';

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
      

      try {
        this.getPackateStartingNameBy(); 
      }
      catch(error) {
        console.error(error);
        // expected output: SyntaxError: unterminated string literal
        // Note - error messages will vary depending on browser
      }
  }

  private getPackateStartingNameBy() {
    this.nugetService.findPackageStartingWith(this.searchInput)
    .subscribe(data => {      
      this.searchAutoCompleteResponseModel= <SearchAutoCompleteResponseModel>data;      
      this.parseObects();
    });
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
