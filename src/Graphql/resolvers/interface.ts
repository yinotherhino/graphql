export interface Listing {
    title:string;
    image:string;
    address:string;
    price:number;
    noOfRooms:number;
    rating:number;
    hasPool:boolean;
}

export interface CreateListing{
    input:Listing
}