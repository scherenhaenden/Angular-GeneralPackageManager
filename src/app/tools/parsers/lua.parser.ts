import { GenericPackage } from "../../models/packages/generic.package";
import { LuaRocksManifestRootResponse } from "../../models/packages/services/lua.rocks/lua.rocks.manifest.root.response";

export class LuaParser {
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
}
