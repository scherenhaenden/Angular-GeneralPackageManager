import { Datum } from "./datum";
import { Context } from "./context";

export class SearchAutoCompleteResponseModel {
    public '@context': Context;
    public totalHits: number;
    public lastReopen: Date;
    public index: string;
    //public data: Datum[];
    public data: string[];
}
