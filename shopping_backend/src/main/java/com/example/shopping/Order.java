package com.example.shopping;

import lombok.AllArgsConstructor;


import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "orders")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Order {
    @Id
    private ObjectId id;
    private String orderId;
    private User user;
    private Date orderDate;
    private float price;

    public Order(String orderId, User user, Date orderDate, float price) {
        this.orderId = orderId;
        this.user = user;
        this.orderDate = orderDate;
        this.price = price;
    }
}

