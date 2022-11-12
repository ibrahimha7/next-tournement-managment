import { IDataAttributes, ILogo } from "./genrated-interfaces"

// user
export type IUser = {
    username: string
    email: string
    user_type: 'PLAYER' | 'USER' | 'REFREE' | 'MANAGER'
    first_name?: string
    second_name?: string
    famliy_name?: string
    phone_number?: string
    image?: string
    id?: number
    attributes?: ITeams | IUser | IAdTournements | IDataAttributes
}

// team
export interface ITeams {
    name: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    description: string;
    logo: ILogo;
    id?: number
    attributes?: ITeams | IUser | IAdTournements | IDataAttributes

}


// ad tournment
export type IAdTournements = {
    ad_title: string
    description: string
    rules?: string
    id?: number
    attributes?: ITeams | IUser | IAdTournements | IDataAttributes

}
