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

    constructor(private http: HttpClient,
        private route: ActivatedRoute

    ) { }

    public getIndexService(): any{      
        return this.http.get(this.luaRocksRoutes.Manifest);
    }

    public findPackageStartingWithPromise(nameOfPackage: string): Promise<LuaRocksManifestRootResponse>{        
        let urlWithQuery = this.luaRocksRoutes.Manifest;   
        let response = <Promise<LuaRocksManifestRootResponse>>this.http.get(new MockingWirdLuarocksData().getdata()).toPromise();                       
        return response;
    }


}
