package com.example.shopping;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/*This is where business logic goes
* it uses the repository class to talk to the database, get the items*/
@Service
public class ItemService {
    @Autowired
    private ItemRepository itemRepository;
    public List<Item> allItems(){
        return itemRepository.findAll();
    }
}
