import { ListingModel, listingInstance } from "../../model/listingModel";
import { CreateListing } from "./interface";

const ListingResolver = {
    Query:{
        allListings: async()=>{
            try{
                const listings = await ListingModel.find()
                return listings;
            }
            catch(err){
                console.log(err)
            }
        },
        singleListing: async(_:unknown, args:{_id:string})=>{
            const listing = await ListingModel.find({_id:args["_id"]})
            return listing;
        }
    },
    Mutation:{
        createListing: async( _:unknown, args:CreateListing )=>{
            try {
                const newListing = {
                    title:args.input.title,
                    image:args.input.image,
                    address:args.input.address,
                    price:args.input.price,
                    noOfRooms:args.input.noOfRooms,
                    rating:args.input.rating,
                    hasPool:args.input.hasPool,
                }

                const listing = await ListingModel.create(newListing);
                if(listing)
                return listing;
            } 
            catch (err) {
                console.log(err)
            }
        }
    }
}

export default ListingResolver;