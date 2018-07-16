import { SearchAutoCompleteResponseModel } from "../../models/packages/services/nuget/SearchAutoCompleteResponse.model";
import { GenericPackage } from "../../models/packages/generic.package";
import { IgenerickPackageParser } from "./igenerick.package.parser";
import { Injectable } from '@angular/core';
import { NPMSearchResponseModel } from "../../models/packages/services/npm/npm.search.response.model";


@Injectable(/*{
    // providedIn: 'root',
   }*/
)

export class GenerickPackageParser implements IgenerickPackageParser {

    public parseSeachPackagesNugetToGenericPackage(searchAutoCompleteResponseModel: SearchAutoCompleteResponseModel): GenericPackage[]{
        let genericPackages = new Array<GenericPackage> ();
        let genericPackage = new GenericPackage() ;
        for (let entry of searchAutoCompleteResponseModel.data) {
          genericPackage = new GenericPackage() ;
          genericPackage.Name = entry;
          genericPackages.push(genericPackage);
        }
        return genericPackages;
    }

    public parseSeachPackagesNPMToGenericPackage(nugetSearchResponseModel: NPMSearchResponseModel): GenericPackage[]{
        
        let genericPackages = new Array<GenericPackage> ();
        let genericPackage = new GenericPackage() ;
        for (let entry of nugetSearchResponseModel.objects) {
          genericPackage = new GenericPackage() ;
          genericPackage.Name = entry.package.name;
          genericPackages.push(genericPackage);
        }
        return genericPackages;
    }
}
