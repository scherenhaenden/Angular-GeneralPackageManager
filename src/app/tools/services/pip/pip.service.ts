import { PIPRoutes } from './../../packages/nuget/services.routes/pip.routes';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { NugetRoutes } from '../../packages/nuget/services.routes/nuget.routes';
import { ActivatedRoute } from '@angular/router';
import { SearchAutoCompleteResponseModel } from '../../../models/packages/services/nuget/SearchAutoCompleteResponse.model';

import { Http, Headers, Response } from '@angular/http';


@Injectable(/*{
 // providedIn: 'root',
}*/)

export class PIPService {

    private indexEndpoint: string; 
    private pIPRoutes = new PIPRoutes();

    constructor(private http: HttpClient,
        private route: ActivatedRoute

    ) { }

    public getIndexService(): any{      
        return this.http.get(this.pIPRoutes.AllPckagesHTML);
    }


    private async getAllPackages():Promise<any>{

        let urlWithQuery = this.pIPRoutes.AllPckagesHTML;

        let headers = new HttpHeaders().
        //set('Access-Control-Allow-Origin','http://localhost:4200/').
        //set('Access-Control-Allow-Origin','http://localhost:4200/').
        /*set('Access-Control-Allow-Methods','GET, POST, PATCH, PUT, DELETE, OPTIONS').
        set('Access-Control-Allow-Headers','Origin, Content-Type, X-Auth-Token').
        set('X-cache','hit').*/
        /*set('Access-Control-Allow-Methods','GET, OPTIONS').
        set('Access-Control-Allow-Headers','*').
        set('Access-Control-Allow-Origin','*').
        set('Access-Control-Allow-Credentials','true').
        set('Content-Type','text/html').
        set('Accept','text/html').*/
        //set('responseType','text/html');
        
       /* set('X-Content-Type-Options','nosniff').
        set('Access-Control-Allow-Origin','*').*/
        set('responseType','text/html').
        set('Content-Encoding','zip').
        set('Access-Control-Allow-Origin','http://localhost:4200').
        set('content-type','text/xml; charset=UTF-8');


        
        /*options = {
            headers?: HttpHeaders | {
                [header: string]: string | string[];
            }*/
        let params = new HttpParams();

        const headerDict = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin':'*',


          }
          
          const requestOptions = {                                                                                                                                                                                 
            headers: headers ,
            
            
          };
         /* try{
            let response = await <Promise<any>>this.http.get('https://pypi.org/rss/packages.xml',{headers:headers}).toPromise(); 
            alert(response) ;

          }
          catch(e)
          {
              console.log(e);
          }*/

          /*this.http.get(url, {observe: 'response'})
    .subscribe(resp => console.log(resp.headers))*/
                
        let response2 = <Promise<any>>this.http.get('https://pypi.org/rss/packages.xml',{headers:headers}).toPromise();  
        //let response2 = <Promise<any>>this.http.get('/rss/packages.xml').toPromise();  

        return response2;

    }

    public findPackageStartingWithPromise(nameOfPackage: string): Promise<any>{

        // GET {@id}?q={QUERY}&skip={SKIP}&take={TAKE}&prerelease={PRERELEASE}&semVerLevel={SEMVERLEVEL}
        // GET https://api-v2v3search-0.nuget.org/autocomplete?q=storage&prerelease=true

        //let urlWithQuery = this.nPMRoutes.SearchAutocompleteService + `/${nameOfPackage}`;         

        let response = this.getAllPackages();       
        return response;
    }


}
