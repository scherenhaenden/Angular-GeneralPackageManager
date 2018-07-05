export class EnsureModuleLoadedOnceGuard {
    constructor(targetModule: any){
        if(targetModule) {
            throw new Error(`${targetModule.constructor.name} has been loaded alread. Try Adding this Module only once in the AppModule.`);
        }
    }
}
