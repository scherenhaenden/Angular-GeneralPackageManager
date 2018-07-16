import { ObjectsEntity } from "./objects.entity";

export class NPMSearchResponseModel {    
    public objects?: (ObjectsEntity)[] | null;
    public total: number;
    public time: string; 
}


/*export interface root {
  objects?: (ObjectsEntity)[] | null;
  total: number;
  time: string;
}
export interface ObjectsEntity {
  package: Package;
  flags?: Flags | null;
  score: Score;
  searchScore: number;
}
export interface Package {
  name: string;
  scope: string;
  version: string;
  description: string;
  keywords?: (string)[] | null;
  date: string;
  links: Links;
  author?: Author | null;
  publisher: MaintainersEntityOrPublisher;
  maintainers?: (MaintainersEntityOrPublisher)[] | null;
}
export interface Links {
  npm: string;
  homepage: string;
  repository: string;
  bugs: string;
}
export interface Author {
  name: string;
  email?: string | null;
  url?: string | null;
  username?: string | null;
}
export interface MaintainersEntityOrPublisher {
  username: string;
  email: string;
}
export interface Flags {
  insecure?: number | null;
  unstable?: boolean | null;
}
export interface Score {
  final: number;
  detail: Detail;
}
export interface Detail {
  quality: number;
  popularity: number;
  maintenance: number;
}
*/
  