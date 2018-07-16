import { SearchAutoCompleteResponseModel } from "../../models/packages/services/SearchAutoCompleteResponse.model";
import { GenericPackage } from "../../models/packages/generic.package";
import { IgenerickPackageParser } from "./igenerick.package.parser";
import { Injectable } from "../../../../node_modules/@angular/core";


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
}
