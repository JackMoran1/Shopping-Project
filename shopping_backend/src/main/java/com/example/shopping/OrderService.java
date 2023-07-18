package com.example.shopping;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

/*This is where business logic goes
 * it uses the repository class to talk to the database, get the orders*/

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private UserRepository userRepository;
    public List<Order> getUserOrders(String userId){
        User user = userRepository.findUserByUserId(userId);
        if(user != null){
            return orderRepository.findByUser(user);
        } else {
            throw new RuntimeException("User not found with userID: " + userId);
        }
    }
    public List<Order> getUserOrdersByDate(String userId){
        User user = userRepository.findUserByUserId(userId);
        if(user != null){
            return orderRepository.findByUserOrderByOrderDate(user);
        } else {
            throw new RuntimeException("User not found with userID: " + userId);
        }
    }
}