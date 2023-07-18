package com.example.shopping;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/*Talks to the database and gets data back*/
@Repository
public interface OrderRepository extends MongoRepository<Item, ObjectId> {
    List<Order> findByUser(User user);
    List<Order> findByUserOrderByOrderDate(User user);
}