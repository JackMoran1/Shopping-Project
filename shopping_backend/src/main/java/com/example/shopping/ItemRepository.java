package com.example.shopping;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

/*Talks to the database and gets data back*/
@Repository
public interface ItemRepository extends MongoRepository<Item, ObjectId> {
}
