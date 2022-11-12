import { IAdTournements, ITeams, IUser } from ".";

export interface IStructue {
    data: IDatum[];
    meta: IMeta;
}

export interface IDatum {
    id?: number;
    attributes: ITeams | IUser | IAdTournements | IDataAttributes
}
export interface IDatumAttributes {
    attributes: ITeams | IUser | IAdTournements | IDataAttributes
}
export interface ILogo {
    data: IData | null;
}

export interface IData {
    id: number;
    attributes: IDataAttributes;
}

export interface IDataAttributes {
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: IFormats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null;
    provider: string;
    provider_metadata: null;
    createdAt: Date;
    updatedAt: Date;
    id?: number
}

export interface IFormats {
    thumbnail: ILarge;
    large?: ILarge;
    small?: ILarge;
    medium?: ILarge;
}

export interface ILarge {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: null;
    size: number;
    width: number;
    height: number;
}

export interface IMeta {
    pagination: IPagination;
}

export interface IPagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}
