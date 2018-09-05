import { PIPRoutes } from './../../packages/nuget/services.routes/pip.routes';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { NugetRoutes } from '../../packages/nuget/services.routes/nuget.routes';
import { ActivatedRoute } from '@angular/router';
import { SearchAutoCompleteResponseModel } from '../../../models/packages/services/nuget/SearchAutoCompleteResponse.model';

import { Http, Headers, Response } from '@angular/http';
import { GenericPackage } from 'src/app/models/packages/generic.package';
import { PipParser } from 'src/app/tools/parsers/pip.parser';


@Injectable(/*{
 // providedIn: 'root',
}*/)

export class PIPService {

    private indexEndpoint: string; 
    private pIPRoutes = new PIPRoutes();
    private responseFromPipserver:Promise<any>;
    private allPackagesPromise:Promise<GenericPackage[]>;
    private allPackages:GenericPackage[];
    private pipParser = new PipParser();

    

    constructor(private http: HttpClient,
        private route: ActivatedRoute

    ) { }

    public getIndexService(): any{      
        return this.http.get(this.pIPRoutes.AllPckagesHTML);
    }

    public test (): Promise<any>{        
        let testdata = `<!DOCTYPE html>
        <html>
          <head>
            <title>Simple index</title>
          </head>
          <body>
            <a href="/simple/0/">0</a>
            <a href="/simple/0-0/">0-._.-._.-._.-._.-._.-._.-0</a>
            <a href="/simple/0-0-1/">0.0.1</a>
            <a href="/simple/00smalinux/">00SMALINUX</a>
            <a href="/simple/01changer/">01changer</a>
          <a href="/simple/zzz/">zzz</a>
            <a href="/simple/zzzeeksphinx/">zzzeeksphinx</a>
            <a href="/simple/zzzfs/">zzzfs</a>
            <a href="/simple/zzz-web/">zzz-web</a>
            <a href="/simple/zzzzzzzzz/">zzzZZZzzz</a>
            </body>
        </html>`

        //let testPromise = new Promise();
        let promise = new Promise(function(resolve, reject) {
            // In place of the code given below, one can call REST APIs
            // For errors, one can choose to reject the promise;
            // For successful processing, promise can be resolved
            //
            const responseVar = 1+1;
            if(responseVar == 2) {
              resolve(testdata);
            } else {
              reject("Error: " + name);
            }
        });
        return promise;
    }




    public getListOfAllPackagesPromise(): Promise<any>{        
        let urlWithQuery = this.pIPRoutes.AllPckagesHTML;        
        if(!this.responseFromPipserver)  {
            this.responseFromPipserver = <Promise<any>>this.http.get(urlWithQuery,{responseType: 'text'}).toPromise();  
            console.log(this.responseFromPipserver);
        }
        return this.responseFromPipserver;
    }


    public async getListOfAllPackages(nameOfPackage: string): Promise<GenericPackage[]>{        
              console.log('getting everything');
              console.log(nameOfPackage);
        if(!this.responseFromPipserver)  {
            //this.responseFromPipserver = this.getListOfAllPackagesPromise();
            this.responseFromPipserver = this.test();
            this.allPackagesPromise = this.responseFromPipserver.
            then(
                value=>{
                    console.log('beginning');
                    console.log(value);
                    this.allPackages = this.pipParser.parseSeachPackagesLuaRocksToGenericPackage(value);
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
            this.allPackagesPromise = this.responseFromPipserver.
            then(
                value=>{
                    this.allPackages = this.pipParser.parseSeachPackagesLuaRocksToGenericPackage(value);
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
    


    private async getAllPackages():Promise<any>{

        /*let urlWithQuery = this.pIPRoutes.AllPckagesHTML;

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
       /* set('responseType','text/html').
        set('Content-Encoding','zip').
        set('Access-Control-Allow-Origin','http://localhost:4200').
        set('content-type','text/xml; charset=UTF-8');


        
        /*options = {
            headers?: HttpHeaders | {
                [header: string]: string | string[];
            }*/
        /*let params = new HttpParams();

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
                
        let response2 = <Promise<any>>this.http.get('https://pypi.org/rss/packages.xml').toPromise();  
        //let response2 = <Promise<any>>this.http.get('/rss/packages.xml').toPromise();  

        return response2;

    }

    public async findPackageStartingWithPromise(nameOfPackage: string): Promise<GenericPackage[]>{

        // GET {@id}?q={QUERY}&skip={SKIP}&take={TAKE}&prerelease={PRERELEASE}&semVerLevel={SEMVERLEVEL}
        // GET https://api-v2v3search-0.nuget.org/autocomplete?q=storage&prerelease=true

        //let urlWithQuery = this.nPMRoutes.SearchAutocompleteService + `/${nameOfPackage}`;         

        let resultwaited = await this.getListOfAllPackages(nameOfPackage);   
        console.log(resultwaited)     ;
        console.log('resultwaited')     ;    
        return resultwaited;
    }


}
