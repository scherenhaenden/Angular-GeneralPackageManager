import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { SearchAutoCompleteResponseModel } from '../../../models/packages/services/nuget/SearchAutoCompleteResponse.model';
import { NPMRoutes } from '../../packages/nuget/services.routes/npm.routes';

@Injectable(/*{
 // providedIn: 'root',
}*/)

export class NPMService {

    private indexEndpoint: string; 
    private nPMRoutes = new NPMRoutes();

    constructor(private http: HttpClient,
        private route: ActivatedRoute

    ) { }

    public getIndexService(): any{      
        return this.http.get(this.nPMRoutes.IndexURL);
    }

    public findPackageStartingWithPromise(nameOfPackage: string): Promise<SearchAutoCompleteResponseModel>{

        // GET {@id}?q={QUERY}&skip={SKIP}&take={TAKE}&prerelease={PRERELEASE}&semVerLevel={SEMVERLEVEL}
        // GET https://api-v2v3search-0.nuget.org/autocomplete?q=storage&prerelease=true

        let urlWithQuery = this.nPMRoutes.SearchAutocompleteService + `/-/v1/search?text=${nameOfPackage}&size=20`;         
        
        let response = <Promise<SearchAutoCompleteResponseModel>>this.http.get(urlWithQuery).toPromise();        
        return response;
    }


}
