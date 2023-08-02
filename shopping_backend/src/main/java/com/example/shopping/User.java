package com.example.shopping;


import lombok.AllArgsConstructor;
import org.springframework.data.annotation.Id;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;
import org.bson.types.ObjectId;

@Document(collection = "users")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {

    @Id
    private ObjectId id;
    private String userId;
    private String name;
    private String email;



    public User(String userId, String name, String email) {
        this.userId = userId;
        this.email = email;
        this.name = name;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }



    public void setName(String name) {
        this.name = name;
    }



    public void setEmail(String email) {
        this.email = email;
    }

}
