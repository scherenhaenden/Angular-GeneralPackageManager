export class PIPRoutes {
    public AllPckagesHTML: string;
    public SearchAutocompleteService: string;

    constructor(){
        this.fillRoutes();
        
    }

    private fillRoutes(){
        this.AllPckagesHTML = 'https://pypi.org/simple/';        

    }
}
