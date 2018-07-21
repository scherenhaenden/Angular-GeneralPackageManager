import { Component, OnInit, ElementRef, ViewChild, AfterContentInit } from '@angular/core';
import { MockingLoadPackaged } from '../../../Mock/mocking.load.packaged';
import { GenericPackage } from '../../../models/packages/generic.package';
import { NugetService } from '../../../tools/services/nuget/nuget.service';
import { SearchAutoCompleteResponseModel } from '../../../models/packages/services/nuget/SearchAutoCompleteResponse.model';
import { PackageService } from '../../../tools/services/generic/package.service';
import { PackagesList } from '../../../models/requests/packages.list';



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
  public packagesList = new PackagesList();
  public selectedPackageSystem: string;

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
    this.genericPackages = await this.packageService.getPackages(this.searchInput, this.selectedPackageSystem);
  }  

}
