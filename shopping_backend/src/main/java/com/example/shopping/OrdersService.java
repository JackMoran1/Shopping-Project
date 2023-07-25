package com.example.shopping;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class OrdersService {
    @Autowired
    private OrdersRepository ordersRepository;

    public List<Orders> allOrders(){
        return ordersRepository.findAll();
    }

    public Optional<Orders> singleOrders(String OrdersId) {
        return ordersRepository.findOrdersByOrderId(OrdersId);
    }

    public Orders createOrders(String orderId, String userId, float price, String date) {
        Orders orders = new Orders(orderId, userId, price, date);
        return ordersRepository.save(orders);
    }
}
