import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NugetRoutes } from '../../packages/nuget/services.routes/nuget.routes';
import { ActivatedRoute } from '@angular/router';

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

        //alert('e')

        return this.http.get(this.nugetRoutes.IndexURL);


    }

    public findPackageStartingWith(): any{

        //alert('e')

        return this.http.get(this.nugetRoutes.IndexURL);


    }


}
