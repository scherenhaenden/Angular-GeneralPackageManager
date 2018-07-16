import { SearchAutoCompleteResponseModel } from "../../models/packages/services/SearchAutoCompleteResponse.model";
import { GenericPackage } from "../../models/packages/generic.package";
import { Injectable } from "node_modules/@angular/core";

export interface IgenerickPackageParser {
    parseSeachPackagesNugetToGenericPackage(searchAutoCompleteResponseModel: SearchAutoCompleteResponseModel): GenericPackage[]
}
