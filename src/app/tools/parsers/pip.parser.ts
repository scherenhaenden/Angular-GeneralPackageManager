import { GenericPackage } from "../../models/packages/generic.package";


export class PipParser {
    public parseSeachPackagesLuaRocksToGenericPackage(pipRootResponse: string): GenericPackage[]{

        console.log(pipRootResponse);

        console.log('es wird gemacht');

        this.getMatchesLinkRegex(pipRootResponse);



        
        let genericPackages = new Array<GenericPackage> ();
        let genericPackage = new GenericPackage() ;                
        let obj1:any;

        try{
            obj1 = JSON.parse(<any>pipRootResponse);
        }
        catch(error){
            obj1 = <any>pipRootResponse;

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
        //return genericPackages;



        return new Array<GenericPackage>();
    }

    private getAllKeysFromDynamicObject(object:any):(string| number |symbol)[] {
        return Reflect.ownKeys(object);
    }


    private getMatchesLinkRegex(htmlResponseFromPip:string ){
        //let re = new RegExp("/<a[^\b>]+>(.+)[\<]\/a>/");
        let results = htmlResponseFromPip.match("/<a[^\b>]+>(.+)[\<]\/a>/");

        console.log(results);

    }


}
