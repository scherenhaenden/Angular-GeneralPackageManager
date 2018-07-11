import { Component, OnInit, ElementRef, ViewChild, AfterContentInit } from '@angular/core';

@Component({
  moduleId: module.id,
  templateUrl: './home-view-module.component.html',
  styleUrls: ['./home-view-module.component.css', './home-view-module.component.less']
})
export class HomeViewModuleComponent implements OnInit, AfterContentInit {
 
  @ViewChild('packagesDiv') packagesDiv: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    console.log(this.packagesDiv.nativeElement.innerHTML);
    this.deleteContentFromResultsViewer();
  }

  //Delete Initial Content of Div (this one might be temporal).
  private deleteContentFromResultsViewer(): void{
    this.packagesDiv.nativeElement.innerHTML = "";

  }

  public buttonClicked(): void {
    
  }

}
