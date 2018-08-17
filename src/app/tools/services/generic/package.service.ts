import { async } from '@angular/core/testing';
import { SearchAutoCompleteResponseModel } from "../../../models/packages/services/nuget/SearchAutoCompleteResponse.model";
import { Injectable } from '@angular/core';
import { Observable, of, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { NugetService } from '../nuget/nuget.service';
import { GenericPackage } from "../../../models/packages/generic.package";
import { filter, map, take, tap } from 'rxjs/operators';
import { promise } from 'protractor';
import { GenerickPackageParser } from '../../parsers/generick.package.parser';
import { NPMService } from '../npm/npm.service';
import { NPMSearchResponseModel } from '../../../models/packages/services/npm/npm.search.response.model';
import { PIPService } from '../pip/pip.service';
import { LuaRockservice } from '../lua.rocks/lua.rocks.service';
import { LuaRocksManifestRootResponse } from '../../../models/packages/services/lua.rocks/lua.rocks.manifest.root.response';
import { MockingWirdLuarocksData } from '../../../Mock/moking.lua.rocks.weird.data';

@Injectable(/*{
    // providedIn: 'root',
   }*/)

export class PackageService {    

    constructor(private nugetService: NugetService
                ,private nPMService: NPMService
                ,private pIPService: PIPService
                ,private luaRockservice: LuaRockservice
                ,private http: HttpClient
                ,private route: ActivatedRoute
                ,public generickPackageParser: GenerickPackageParser
            
            ){ }

    public searchAutoCompleteResponseModel = new SearchAutoCompleteResponseModel();

    public async getPackages(packageName:string, selectedPackageSystem:string): Promise<GenericPackage[]> {        
        
        if(selectedPackageSystem === 'Nuget'){
                let packagesToGetResolved =  this.nugetService.findPackageStartingWithPromise(packageName).
            then(
                value=>{
                    return this.parseObects(selectedPackageSystem, value);
                }
            );
            return packagesToGetResolved;  
        }
        else if (selectedPackageSystem === 'NPM'){
            let packagesToGetResolved =  this.nPMService.findPackageStartingWithPromise(packageName).
            then(
                value=>{
                    return this.parseObects(selectedPackageSystem, value);
                }
            );

            return packagesToGetResolved;  
        }
        else if (selectedPackageSystem === 'PIP'){
            
            let packagesToGetResolved =  this.pIPService.findPackageStartingWithPromise(packageName).
            then(
                value=>{
                    console.log(value);
                    return null;
                    
                    //return this.parseObects(selectedPackageSystem, value);
                }
            ).catch(
                (err) =>{ console.error(err);
                    return null;
                }
                
            );
            return  new Array<GenericPackage> ();
              
        } else if (selectedPackageSystem === 'Lua'){
          let packagesToGetResolved = this.luaRockservice.getPackagesStartingBy(packageName);            
          return packagesToGetResolved;  
      
            //return this.luaRockservice.getPackagesStartingBy(packageName);
        } 

    }

    private parseObects(selectedPackageSystem:string, responseModel: any): GenericPackage[]{
        
        if(selectedPackageSystem === 'Nuget'){
            return this.generickPackageParser.parseSeachPackagesNugetToGenericPackage(<SearchAutoCompleteResponseModel><any>responseModel); ;  
        }
        else if(selectedPackageSystem === 'NPM'){
            console.log(responseModel);
            return this.generickPackageParser.parseSeachPackagesNPMToGenericPackage(<NPMSearchResponseModel><any>responseModel); ;  
        }
        else if(selectedPackageSystem === 'Lua'){
//            console.log(responseModel);


            return this.generickPackageParser.parseSeachPackagesLuaRocksToGenericPackage(<LuaRocksManifestRootResponse><any>responseModel); ;  
        }
        //return this.generickPackageParser.parseSeachPackagesNugetToGenericPackage(searchAutoCompleteResponseModel);       
    }




    




}
