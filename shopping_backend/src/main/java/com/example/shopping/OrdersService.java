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
        return ordersRepository.findOrdersByOrdersId(OrdersId);
    }

    public Orders createOrders(String orderId, int quantity, float price) {
        Orders orders = new Orders(orderId, quantity, price);
        return ordersRepository.save(orders);
    }
}
