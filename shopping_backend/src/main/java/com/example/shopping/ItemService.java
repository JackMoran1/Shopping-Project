package com.example.shopping;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

/*This is where business logic goes
* it uses the repository class to talk to the database, get the items*/

@Service
public class ItemService {
    @Autowired
    private ItemRepository itemRepository;
    @Autowired
    private MongoTemplate mongoTemplate;
    public List<Item> allItems(){
        return itemRepository.findAll();
    }

    public Optional<Item> singleItem(String itemId) {
        return itemRepository.findItemByitemId(itemId);
    }

    public Item createItem(String itemId, String name, String quantity, String price, String imageURL) {
//        Item item = new Item(itemId, name, quantity, price);
//        itemRepository.insert(item);
        Item item = itemRepository.insert(new Item(itemId, name, quantity, price, imageURL));
        return item;
    }
    public Item modifyItem(String itemId, String name, String quantity, String price, String imageURL){
        Optional<Item> item = itemRepository.findItemByitemId(itemId);
        if(item.isPresent()){
            Item theItem = item.get();
            theItem.setName(name);
            theItem.setQuantity(quantity);
            theItem.setPrice(price);
            theItem.setImageURL(imageURL);
            return itemRepository.save(theItem);
        } else {
            throw new RuntimeException("Item not found with id: " + itemId);
        }
    }
    public void deleteItem(String itemId){
        Optional<Item> item = itemRepository.findItemByitemId(itemId);
        if(item.isPresent()){
            itemRepository.deleteItemByitemId(itemId);
        } else {
            throw new RuntimeException("Item not found with id: " + itemId);
        }
    }
}
