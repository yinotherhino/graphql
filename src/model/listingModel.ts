import mongoose, { Schema } from "mongoose";

interface listingType {
    _id: string;
    title:string;
    image:string;
    address:string;
    price:number;
    noOfRooms:number;
    rating:number;
    hasPool:boolean;
}

const listingSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    address:{
        type:String
    },
    price:{
        type:Number
    },
    noOfRooms:{
        type:Number
    },
    rating:{
        type:Number
    },
    hasPool:{
        type:Boolean
    },
},{timestamps:true}
)

export const ListingModel = mongoose.model<listingType>('Listing', listingSchema)



