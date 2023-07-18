package com.example.shopping;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

/*This is where business logic goes
 * it uses the repository class to talk to the database, get the items*/

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    public User modifyUser(String userId, String name, String email){
        User user = userRepository.findUserByUserId(userId);
        if(user != null){
            user.setName(name);
            user.setEmail(email);
        } else {
            throw new RuntimeException("User not found with userID: " + userId);
        }
        return user;
    }
}