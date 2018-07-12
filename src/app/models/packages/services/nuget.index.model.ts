declare module NugetIndexModel {

    export class Context {
        '@vocab': string;
        '@base': string;
    }

    export class Version {
        version: string;
        downloads: number;
        '@id': string;
    }

    export class Datum {
        '@id': string;
        '@type': string;
        registration: string;
        id: string;
        version: string;
        description: string;
        summary: string;
        title: string;
        licenseUrl: string;
        projectUrl: string;
        tags: string[];
        authors: string[];
        totalDownloads: number;
        verified: boolean;
        versions: Version[];
    }

    export class RootObject  {
        public '@context': Context;
        totalHits: number;
        lastReopen: Date;
        index: string;
        data: Datum[];
    }

}export = NugetIndexModel;

