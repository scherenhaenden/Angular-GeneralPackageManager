import { SearchAutoCompleteResponseModel } from "../../models/packages/services/nuget/SearchAutoCompleteResponse.model";
import { GenericPackage } from "../../models/packages/generic.package";


export interface IgenerickPackageParser {
    parseSeachPackagesNugetToGenericPackage(searchAutoCompleteResponseModel: SearchAutoCompleteResponseModel): GenericPackage[]
}
