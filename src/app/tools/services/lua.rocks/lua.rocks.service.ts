import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { LuaRocksRoutes } from '../../packages/nuget/services.routes/luarocks.routes';
import { LuaRocksManifestRootResponse } from '../../../models/packages/services/lua.rocks/lua.rocks.manifest.root.response';
import { MockingWirdLuarocksData } from '../../../Mock/moking.lua.rocks.weird.data';

@Injectable(/*{
 // providedIn: 'root',
}*/)

export class LuaRockservice {

    private indexEndpoint: string; 
    private luaRocksRoutes = new LuaRocksRoutes();
    private response:Promise<LuaRocksManifestRootResponse>;

    constructor(private http: HttpClient,
        private route: ActivatedRoute

    ) { }

    public getIndexService(): any{      
        return this.http.get(this.luaRocksRoutes.Manifest);
    }

    public getListOfAllPackages(): Promise<LuaRocksManifestRootResponse>{        
        let urlWithQuery = this.luaRocksRoutes.Manifest;        
        if(!this.response)  {
            this.response = <Promise<LuaRocksManifestRootResponse>>this.http.get(urlWithQuery).toPromise();  
        }
        return this.response;
    }

    public findPackageStartingWithPromise(nameOfPackage: string): Promise<LuaRocksManifestRootResponse>{        
        /*let urlWithQuery = this.luaRocksRoutes.Manifest;   
        let response = <Promise<LuaRocksManifestRootResponse>>this.http.get(urlWithQuery).toPromise();                       
        return response;*/
        return this.getListOfAllPackages();
    }


}
