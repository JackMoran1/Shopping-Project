package com.example.shopping;

import lombok.AllArgsConstructor;


import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Document(collection = "orders")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Order {
    @Id
    private ObjectId id;
    private String orderId;
    private User user;
    private List<Item> items;
    private Date orderDate;

    public Order(String orderId, User user, List<Item> items, Date orderDate) {
        this.orderId = orderId;
        this.user = user;
        this.orderDate = new Date();
    }
    public float getOrderPrice() {
        return items.stream().map(Item::getPrice).reduce(0f, Float::sum);
    }

    public String getOrderId() {
        return orderId;
    }

    public void setOrderId(String orderId) {
        this.orderId = orderId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<Item> getItems() {
        return items;
    }

    public void setItems(List<Item> items) {
        this.items = items;
    }

    public Date getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(Date orderDate) {
        this.orderDate = orderDate;
    }
}

