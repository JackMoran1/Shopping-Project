package com.example.shopping;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

//This class just sends a request to the database and returns a response
@RestController
@RequestMapping("/items")
@CrossOrigin
public class ItemController {
    @Autowired
    private ItemService itemService;
    @GetMapping
    public ResponseEntity<List<Item>> getAllItems() {
        return new ResponseEntity<List<Item>>(itemService.allItems(), HttpStatus.OK);
    }

    @GetMapping("/{itemId}")
    public ResponseEntity<Optional<Item>> getSingleItem(@PathVariable String itemId) {
        return new ResponseEntity<Optional<Item>>(itemService.singleItem(itemId), HttpStatus.OK);
    }
}
