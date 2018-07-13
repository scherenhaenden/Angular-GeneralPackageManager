import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NugetRoutes } from '../../packages/nuget/services.routes/nuget.routes';
import { ActivatedRoute } from '@angular/router';
import { SearchAutoCompleteResponseModel } from '../../../models/packages/services/SearchAutoCompleteResponse.model';

@Injectable(/*{
 // providedIn: 'root',
}*/)

export class NugetService {

    private indexEndpoint: string; 
    private nugetRoutes = new NugetRoutes();

    constructor(private http: HttpClient,
        private route: ActivatedRoute

    ) { }

    public getIndexService(): any{      
        return this.http.get(this.nugetRoutes.IndexURL);
    }

    public findPackageStartingWith(nameOfPackage: string): Observable<SearchAutoCompleteResponseModel>{

        // GET {@id}?q={QUERY}&skip={SKIP}&take={TAKE}&prerelease={PRERELEASE}&semVerLevel={SEMVERLEVEL}
        // GET https://api-v2v3search-0.nuget.org/autocomplete?q=storage&prerelease=true

        let urlWithQuery = this.nugetRoutes.SearchAutocompleteService + `?q=${nameOfPackage}`;         
        let response = <Observable<SearchAutoCompleteResponseModel>>this.http.get(urlWithQuery);
        return response;
    }

    public findPackageStartingWith2(nameOfPackage: string): Promise<SearchAutoCompleteResponseModel>{

        // GET {@id}?q={QUERY}&skip={SKIP}&take={TAKE}&prerelease={PRERELEASE}&semVerLevel={SEMVERLEVEL}
        // GET https://api-v2v3search-0.nuget.org/autocomplete?q=storage&prerelease=true

        let urlWithQuery = this.nugetRoutes.SearchAutocompleteService + `?q=${nameOfPackage}`;         
        let response = <Promise<SearchAutoCompleteResponseModel>>this.http.get(urlWithQuery).toPromise();        
        return response;
    }


}
