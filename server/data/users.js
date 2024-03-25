import { ObjectId } from 'mongodb';
import {users} from '../config/mongoCollections.js';

const exportedMethods = {
    async createUser(formData) {
        const newUser = {
          ...formData,
          date: new Date(),
        };
        const userDataCollection= await users();
        const insertInfo = await userDataCollection.insertOne(newUser);
        if (!insertInfo.acknowledged || !insertInfo.insertedId)
            throw 'Could not add user';
        
        return newUser;
    },
    async searchUsers(searchQuery) {
        const userDataCollection = await users();
        const searchResults = await userDataCollection.find(searchQuery).toArray();
        return searchResults;
    },
    async getUserById(id) {
        const userDataCollection = await users();
        const user = await userDataCollection.findOne({ _id: new ObjectId(id) });
        return user;
      },
};

export default exportedMethods;