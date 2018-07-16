import { Package } from "./Package";

export class ObjectsEntity {
    public package: Package;    
    //public flags?: Flags | null;
    public flags?: any;
    //public score: Score;
    public score: any;
    public searchScore: number;
}
