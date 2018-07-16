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

    /*var secondMethod = function(someStuff) {
        var promise = new Promise(function(resolve, reject){
           setTimeout(function() {
              console.log('second method completed');
              resolve({newData: someStuff.data + ' some more data'});
           }, 2000);
        });
        return promise;
     };*/





    public async  getPackages2(packageName:string):Promise<GenericPackage[]> {
        let be =  this.nugetService.findPackageStartingWith2(packageName).
        then(
            value=>{
                return this.parseObects(value);
            }
            
            
        );
        
        

        console.log(be);
      
        


        return be;
            
        
       
    }

   /* private parseObects2(searchAutoCompleteResponseModel: SearchAutoCompleteResponseModel): Promise<any>{

        /*return new promise<GenericPackage[]> (resolve => this.parseObects(searchAutoCompleteResponseModel))=> {
            this.parseObects(searchAutoCompleteResponseModel);
        });*/
        /*Promise.resolve()

        return new Promise<any>((searchAutoCompleteResponseModel) => {
            this.parseObects(searchAutoCompleteResponseModel);
        });*/

       /* let genericPackages = new Array<GenericPackage> ();
        let genericPackage = new GenericPackage() ;
        for (let entry of searchAutoCompleteResponseModel.data) {
          genericPackage = new GenericPackage() ;
          genericPackage.Name = entry;
          genericPackages.push(genericPackage);
        }
        return genericPackages;*/
        
     // }

    

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
