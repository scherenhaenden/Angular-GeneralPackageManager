import { Version } from "./version";

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