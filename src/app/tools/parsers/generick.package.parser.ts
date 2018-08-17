import { SearchAutoCompleteResponseModel } from "../../models/packages/services/nuget/SearchAutoCompleteResponse.model";
import { GenericPackage } from "../../models/packages/generic.package";
import { IgenerickPackageParser } from "./igenerick.package.parser";
import { Injectable } from '@angular/core';
import { NPMSearchResponseModel } from "../../models/packages/services/npm/npm.search.response.model";
import { LuaRocksManifestRootResponse } from "../../models/packages/services/lua.rocks/lua.rocks.manifest.root.response";
import { Serializer } from "../../../../node_modules/@angular/compiler";


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

    public parseSeachPackagesLuaRocksToGenericPackage(luaRocksManifestRootResponse: LuaRocksManifestRootResponse): GenericPackage[]{
        
        let genericPackages = new Array<GenericPackage> ();
        let genericPackage = new GenericPackage() ;        
        console.log(luaRocksManifestRootResponse);
        let obj1:any;

        try{
            obj1 = JSON.parse(<any>luaRocksManifestRootResponse);

        }
        catch(error){
            obj1 = <any>luaRocksManifestRootResponse;

        }
      
        //console.log(obj);
        let rootKeys = this.getAllKeysFromDynamicObject(obj1);
        let packagesKeys = this.getAllKeysFromDynamicObject((obj1['repository']));

        //console.log(packagesKeys);
        for (let entry of packagesKeys) {
            genericPackage = new GenericPackage() ;
            genericPackage.Name = <string>entry
            genericPackages.push(genericPackage);
          }
        
        
       
        
        return genericPackages;
    }

    private getAllKeysFromDynamicObject(object:any):(string| number |symbol)[] {
        return Reflect.ownKeys(object);
    }



    /*function onGeneratedRow(columnsResult)
{
    var jsonData = {};
    columnsResult.forEach(function(column) 
    {
        var columnName = column.metadata.colName;
        jsonData[columnName] = column.value;
    });
    viewData.employees.push(jsonData);
 }*/
}
