export class NugetRoutes {
    public IndexURL: string;
    public SearchAutocompleteService: string;

    constructor(){
        this.fillRoutes();
        
    }

    private fillRoutes(){
        this.IndexURL = 'https://api.nuget.org/v3/index.json';
        this.SearchAutocompleteService = 'https://api-v2v3search-0.nuget.org/autocomplete';

    }
}
