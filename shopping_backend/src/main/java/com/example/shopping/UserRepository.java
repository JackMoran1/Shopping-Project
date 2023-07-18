package com.example.shopping;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/*Talks to the database and gets data back*/
@Repository
public interface UserRepository extends MongoRepository<Item, ObjectId> {
    User findUserByUserId(String userId);
}