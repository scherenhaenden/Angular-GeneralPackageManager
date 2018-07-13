
import { SearchAutoCompleteResponseModel } from "../../../models/packages/services/SearchAutoCompleteResponse.model";
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NugetRoutes } from '../../packages/nuget/services.routes/nuget.routes';
import { ActivatedRoute } from '@angular/router';
import { NugetService } from "src/app/tools/services/nuget/nuget.service";


@Injectable(/*{
    // providedIn: 'root',
   }*/)

export class PackageService {

    

    constructor(private nugetService: NugetService
               ,private http: HttpClient
                ,private route: ActivatedRoute){ }

    public searchAutoCompleteResponseModel = new SearchAutoCompleteResponseModel();

    public getPackages(packageName:string): any {
        /*this.nugetService.findPackageStartingWith(packageName)
            .subscribe(data => {      
              this.searchAutoCompleteResponseModel= <SearchAutoCompleteResponseModel>data;                    
        });*/
        let response = this.nugetService.findPackageStartingWith(packageName);
        return response;
    }

    




}
