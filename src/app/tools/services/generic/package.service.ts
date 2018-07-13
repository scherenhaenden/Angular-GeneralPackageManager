import { async } from '@angular/core/testing';
import { SearchAutoCompleteResponseModel } from "../../../models/packages/services/SearchAutoCompleteResponse.model";
import { Injectable } from '@angular/core';
import { Observable, of, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { NugetService } from "src/app/tools/services/nuget/nuget.service";
import { GenericPackage } from "../../../models/packages/generic.package";
import { filter, map, take, tap } from 'rxjs/operators';


@Injectable(/*{
    // providedIn: 'root',
   }*/)

export class PackageService {

    

    constructor(private nugetService: NugetService
               ,private http: HttpClient
                ,private route: ActivatedRoute){ }

    public searchAutoCompleteResponseModel = new SearchAutoCompleteResponseModel();

    public getPackages(packageName:string):any {
        
        /*this.nugetService.findPackageStartingWith(packageName)
            .subscribe(data => {    
              
              this.searchAutoCompleteResponseModel= data;                    
              this.parseObects();
              return data;

        });*/

        let obs= this.nugetService.findPackageStartingWith(packageName);

        
       

        obs.subscribe(data => {    
              
            this.searchAutoCompleteResponseModel= data;
            
        

            //this.parseObects();
            
            return data;

      });



        /*let response = this.nugetService.findPackageStartingWith(packageName);
        return response;*/
    }

    public async  getPackages2(packageName:string):Promise<GenericPackage[]> {
        let be = await this.nugetService.findPackageStartingWith2(packageName);

        let be2 = this.parseObects(be);
        
        

        let b3 = new Promise<GenericPackage[]>(resolve =>{be2});

        



        //return this.nugetService.findPackageStartingWith2(packageName);
        return b3;
            
        
        /*let response = this.nugetService.findPackageStartingWith(packageName);
        return response;*/
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
