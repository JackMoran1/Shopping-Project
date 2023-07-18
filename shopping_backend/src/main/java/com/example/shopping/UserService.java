package com.example.shopping;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    public List<User> allUsers() { return userRepository.findAll(); }

    public Optional<User> singleUser(String userId) { return userRepository.findUserByuserId(userId); }


    public void deleteUser(String userId) {
        Optional<User> user = userRepository.findUserByuserId(userId);
        if(user.isPresent()) {
            userRepository.deleteUserByuserId(userId);
        }
    }

    public User changeInfo(String userId, String name, String email) {
        Optional<User> user = userRepository.findUserByuserId(userId);
        if(user.isPresent()) {
            User theUser = user.get();
                theUser.setEmail(email);
                theUser.setName(name);
                return userRepository.save(theUser);
        } else {
            throw new RuntimeException("Unable to find user");
        }
    }

  /*  public User changeName(String userId, String name) {

        Optional<User> user = userRepository.findUserByuserId(userId);
        if(user.isPresent()) {
            User theUser = user.get();
                theUser.setName(name);
                return userRepository.save(theUser);
        } else {
            throw new RuntimeException("Unable to find user");
        }
    }


   */







}
