import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { LuaRocksRoutes } from '../../packages/nuget/services.routes/luarocks.routes';
import { LuaRocksManifestRootResponse } from '../../../models/packages/services/lua.rocks/lua.rocks.manifest.root.response';

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

        // GET {@id}?q={QUERY}&skip={SKIP}&take={TAKE}&prerelease={PRERELEASE}&semVerLevel={SEMVERLEVEL}
        // GET https://api-v2v3search-0.nuget.org/autocomplete?q=storage&prerelease=true


        //let urlWithQuery = this.nPMRoutes.SearchAutocompleteService + `/${nameOfPackage}`;         

        let headers = new HttpHeaders().
        set('Access-Control-Allow-Origin','*').        
        set('Access-Control-Allow-Headers','Content-Type').
        set('Content-Type','text/json').
        set('Access-Control-Allow-Methods','GET,POST');

        let urlWithQuery = this.luaRocksRoutes.Manifest;         
        
        let response = <Promise<LuaRocksManifestRootResponse>>this.http.get(urlWithQuery,{headers:headers}).toPromise();        
        return response;
    }


}
