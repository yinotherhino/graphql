import {gql} from 'apollo-server'

const typeDef = gql `
    type Listing{
        id:ID!
        title:String!
        image:String!
        address:String
        price:Int
        noOfRooms:Int
        rating:Int
        hasPool:Boolean
    }

    input createListingInput{
        title:String!
        image:String!
        address:String!
        price:Int!
        noOfRooms:Int!
        rating:Int!
        hasPool:Boolean!
    }

    input updateListingInput{
        title:String
        image:String
        address:String
        price:Int
        noOfRooms:Int
        rating:Int
        hasPool:Boolean
    }

    type Message{
        message:String
    }

    type Query{
        allListings:[Listing]!
        singleListing(id:ID):Listing
    }

    type Mutation{
        createListing(input:createListingInput):Listing!
        updateListing(input:updateListingInput):Listing!
        deleteListing(id:ID!):Message!
    }

`
export default typeDef;