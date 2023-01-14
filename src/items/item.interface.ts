export interface BaseItem {
    name: string;
    adress: Adress;
    city: string;
    description: string;
    image: string;
    contact: Contact;
}

export interface Adress {
    street: string;
    number: string;
    postCode: number;
    location: Geolocation;
}

export interface Geolocation {
    lon: number;
    lat: number
}

export interface Contact {
    phone: string;
    email: string;
    website: string;
    fax: string
}

export interface Item extends BaseItem {
    id: number;
}