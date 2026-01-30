import { Permission, Role} from "node-appwrite";

import { db, voteCollection } from "../name";
import { databases } from "./config";


export default async function createVoteCollection() {
    
    //create collection
    await databases.createCollection(db, voteCollection, voteCollection, [
        Permission.read(Role.any()),
        Permission.read(Role.users()),
        Permission.create(Role.users()),
        Permission.update(Role.users()),
        Permission.delete(Role.users())
    ]);

    console.log("Vote Collection is created!");

    // creating attributes and indexes

    await Promise.all([
        databases.createEnumAttribute(db, voteCollection, "type",["question", "answer"] , true),
        databases.createStringAttribute(db, voteCollection, "typeId", 50, true),
        databases.createEnumAttribute(db, voteCollection, "voteStatus", ["upvoted", "downvoted"], true),
        databases.createStringAttribute(db, voteCollection, "votedById", 50, true)
    ]);

    console.log("Vote Attributes created");
    
    
}