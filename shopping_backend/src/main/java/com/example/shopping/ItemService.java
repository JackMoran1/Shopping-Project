package com.example.shopping;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

/*This is where business logic goes
* it uses the repository class to talk to the database, get the items*/

@Service
public class ItemService {
    @Autowired
    private ItemRepository itemRepository;
    public List<Item> allItems(){
        return itemRepository.findAll();
    }

    public Optional<Item> singleItem(String itemId) {
        return itemRepository.findItemByitemId(itemId);
    }
}
