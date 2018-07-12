import {Component, OnInit, ElementRef, ViewChild, AfterContentInit} from '@angular/core';
import {MockingLoadPackaged} from '../../../Mock/mocking.load.packaged';
import {GenericPackage} from '../../../models/packages/generic.package';

@Component({
  moduleId: module.id,
  templateUrl: './home-view-module.component.html',
  styleUrls: ['./home-view-module.component.css', './home-view-module.component.less']
})
export class HomeViewModuleComponent implements OnInit, AfterContentInit {
  @ViewChild('packagesDiv') packagesDiv: ElementRef;

  public mockingLoadPackaged = new MockingLoadPackaged();
  public genericPackages: Array<GenericPackage> = [];
  public currentPkg: GenericPackage;

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit(): void {}

  //Delete Initial Content of Div (this one might be temporal).
  private deleteContentFromResultsViewer(): void {
    this.packagesDiv.nativeElement.innerHTML = '';
  }

  public onSelect(pkg: GenericPackage) {
    this.currentPkg = pkg;
  }

  public searchPackage(pkgsSearch: string): void {
    var packages = this.mockingLoadPackaged.getSimpleListOfPackages();
    if (pkgsSearch && pkgsSearch.length > 0) {
      packages = packages.filter(
        pkg =>
          Object.values(pkg)
            .join()
            .indexOf(pkgsSearch) >= 0
      );
    }
    this.genericPackages = packages;

    console.log(this.genericPackages);
  }
}
