package com.example.shopping;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "orders")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Orders {
    @Id
    private ObjectId id;
    private String orderId, userId, date;
    private boolean completed;
    private float price;
    public Orders(String orderId, String userId, float price, String date, boolean completed) {
        this.orderId = orderId;
        this.userId = userId;
        this.price = price;
        this.date = date;
        this.completed = completed;
    }

    public String getOrderId() {
        return orderId;
    }

    public void setOrderId(String orderId) {
        this.orderId = orderId;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }
}