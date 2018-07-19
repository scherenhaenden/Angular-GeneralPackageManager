export class NugetRoutes {
    public IndexURL: string;
    public Manifest: string;

    constructor(){
        this.fillRoutes();
        
    }

    private fillRoutes(){        
        this.Manifest = 'https://luarocks.org/manifest.json';
    }
}
