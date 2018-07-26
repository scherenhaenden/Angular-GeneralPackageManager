import { promise } from 'protractor';
import { LuaParser } from './../../parsers/lua.parser';
import { filter } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { LuaRocksRoutes } from '../../packages/nuget/services.routes/luarocks.routes';
import { LuaRocksManifestRootResponse } from '../../../models/packages/services/lua.rocks/lua.rocks.manifest.root.response';
import { MockingWirdLuarocksData } from '../../../Mock/moking.lua.rocks.weird.data';
import { List } from 'linqts';
import { GenericPackage } from '../../../models/packages/generic.package';


@Injectable(/*{
 // providedIn: 'root',
}*/)

export class LuaRockservice {

    private indexEndpoint: string; 
    private luaRocksRoutes = new LuaRocksRoutes();
    private response:Promise<LuaRocksManifestRootResponse>;
    private luaRocksManifestRootResponse:LuaRocksManifestRootResponse;
    private luaParser = new LuaParser();

    constructor(private http: HttpClient,
        private route: ActivatedRoute

    ) { }

    public getIndexService(): any{      
        return this.http.get(this.luaRocksRoutes.Manifest);
    }

    public getListOfAllPackagesPromise(): Promise<LuaRocksManifestRootResponse>{        
        let urlWithQuery = this.luaRocksRoutes.Manifest;        
        if(!this.response)  {
            this.response = <Promise<LuaRocksManifestRootResponse>>this.http.get(urlWithQuery).toPromise();  
        }
        return this.response;
    }

    public getListOfAllPackages(nameOfPackage: string): GenericPackage[]{        
        let urlWithQuery = this.luaRocksRoutes.Manifest;        
        if(!this.luaRocksManifestRootResponse)  {
            let luaRocksManifestRootResponse = this.getListOfAllPackagesPromise().
            then(
                value=>{
                    let allPackages = this.luaParser.parseSeachPackagesLuaRocksToGenericPackage(value);
                    if(nameOfPackage){
                        
                        return allPackages.filter(x=>x.Name.includes(nameOfPackage));

                    }
                    return allPackages;
                }
            );   
        }
        return new Array<GenericPackage>();
    }

    public findPackageStartingWithPromise(nameOfPackage: string): Promise<LuaRocksManifestRootResponse>{        
        /*let urlWithQuery = this.luaRocksRoutes.Manifest;   
        let response = <Promise<LuaRocksManifestRootResponse>>this.http.get(urlWithQuery).toPromise();                       
        return response;*/
        
        return this.getListOfAllPackagesPromise();
    }

    public async getPackagesStartingBy(nameOfPackage: string): Promise<GenericPackage[]>{
        
        let val = await this.getListOfAllPackages(nameOfPackage);
        


        return new Promise<GenericPackage[]>(
            function (resolve, reject) {
                val;
                
        
            }
        );
        
       
      

    }

    public filterBy(){

    }


}
