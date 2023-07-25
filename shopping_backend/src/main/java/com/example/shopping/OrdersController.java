package com.example.shopping;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/orders")
@CrossOrigin
public class OrdersController {
    @Autowired
    private OrdersService ordersService;

    @GetMapping
    public ResponseEntity<List<Orders>> getAllOrders() {
        return new ResponseEntity<List<Orders>>(ordersService.allOrders(), HttpStatus.OK);
    }

    @GetMapping("/{OrdersId}")
    public ResponseEntity<Optional<Orders>> getSingleOrder(@PathVariable String OrdersId) {
        return new ResponseEntity<Optional<Orders>>(ordersService.singleOrders(OrdersId), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Orders> createOrder(@RequestBody Map<String, String> payload) {
        return new ResponseEntity<Orders>(ordersService.createOrders(payload.get("orderId"), payload.get("userId"), Float.parseFloat(payload.get("price")), payload.get("date")), HttpStatus.CREATED);

    }
}
