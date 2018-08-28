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
import { map, catchError, mergeMap } from 'rxjs/operators';
import { Observable, of, throwError} from "rxjs"


@Injectable(/*{
 // providedIn: 'root',
}*/)

export class LuaRockservice {

    private indexEndpoint: string; 
    private luaRocksRoutes = new LuaRocksRoutes();
    private allPackages:GenericPackage[];
    private allPackagesPromise:Promise<GenericPackage[]>;
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

    public getDataFromBackend(): any {
        return this.http.get(this.luaRocksRoutes.Manifest).
        pipe(
            map((data: any) => {
                alert();
                let products = data;
                console.log(products);
              return products;
            }), catchError( error => {
              return throwError( 'Something went wrong!' )
            })       
        )
        
      }

    public async getListOfAllPackages(nameOfPackage: string): Promise<GenericPackage[]>{        
        let urlWithQuery = this.luaRocksRoutes.Manifest;    
        await this.getDataFromBackend();    
        if(!this.response)  {
            this.response = this.getListOfAllPackagesPromise();
            this.allPackagesPromise = this.response.
            then(
                value=>{
                    this.allPackages = this.luaParser.parseSeachPackagesLuaRocksToGenericPackage(value);
                    if(nameOfPackage){
                        this.allPackages = this.allPackages.filter(x=>x.Name.includes(nameOfPackage));
                    }                    
                    console.log('allPackages');
                    console.log(this.allPackages);                   

                    return this.allPackages;
                }
            );   
        }
        else{
            this.allPackagesPromise = this.response.
            then(
                value=>{
                    this.allPackages = this.luaParser.parseSeachPackagesLuaRocksToGenericPackage(value);
                    if(nameOfPackage){
                        this.allPackages = this.allPackages.filter(x=>x.Name.includes(nameOfPackage));
                    }                    
                    console.log('allPackages');
                    console.log(this.allPackages);                   

                    return this.allPackages;
                }
            );   

        }


       return this.allPackagesPromise;
      
    }

    public findPackageStartingWithPromise(nameOfPackage: string): Promise<LuaRocksManifestRootResponse>{        
        /*let urlWithQuery = this.luaRocksRoutes.Manifest;   
        let response = <Promise<LuaRocksManifestRootResponse>>this.http.get(urlWithQuery).toPromise();                       
        return response;*/
        
        return this.getListOfAllPackagesPromise();
    }

    public async getPackagesStartingBy(nameOfPackage: string): Promise<GenericPackage[]>{           
        let resultwaited = await this.getListOfAllPackages(nameOfPackage); 
        console.log(resultwaited);
        console.log('resultwaited');
        return resultwaited;     

    }

    public filterBy(){

    }


}
