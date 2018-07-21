export class NPMRoutes {
    public IndexURL: string;
    public SearchAutocompleteService: string;

    constructor(){
        this.fillRoutes();
        
    }

    private fillRoutes(){
        this.IndexURL = 'http://registry.npmjs.org';
        this.SearchAutocompleteService = 'http://registry.npmjs.org';

    }
}
