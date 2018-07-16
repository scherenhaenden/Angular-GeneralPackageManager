import { async } from '@angular/core/testing';
import { SearchAutoCompleteResponseModel } from "../../../models/packages/services/SearchAutoCompleteResponse.model";
import { Injectable } from '@angular/core';
import { Observable, of, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { NugetService } from "src/app/tools/services/nuget/nuget.service";
import { GenericPackage } from "../../../models/packages/generic.package";
import { filter, map, take, tap } from 'rxjs/operators';
import { promise } from '../../../../../node_modules/protractor';


@Injectable(/*{
    // providedIn: 'root',
   }*/)

export class PackageService {

    

    constructor(private nugetService: NugetService
               ,private http: HttpClient
                ,private route: ActivatedRoute){ }

    public searchAutoCompleteResponseModel = new SearchAutoCompleteResponseModel();


    public async  getPackages(packageName:string):Promise<GenericPackage[]> {
        let packagesToGetResolved =  this.nugetService.findPackageStartingWith2(packageName).
        then(
            value=>{
                return this.parseObects(value);
            }
        );
        return packagesToGetResolved;
       
    }

    private parseObects(searchAutoCompleteResponseModel: SearchAutoCompleteResponseModel): GenericPackage[]{
        let genericPackages = new Array<GenericPackage> ();
        let genericPackage = new GenericPackage() ;
        for (let entry of searchAutoCompleteResponseModel.data) {
          genericPackage = new GenericPackage() ;
          genericPackage.Name = entry;
          genericPackages.push(genericPackage);
        }
        return genericPackages;
      }




    




}
