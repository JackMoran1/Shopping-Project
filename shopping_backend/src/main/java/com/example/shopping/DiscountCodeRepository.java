package com.example.shopping;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DiscountCodeRepository extends MongoRepository<DiscountCode, ObjectId> {

    Optional<DiscountCode> findDiscountCodeBydiscountId(String email);

    void deleteDiscountCodeBydiscountId(String userId);
}
