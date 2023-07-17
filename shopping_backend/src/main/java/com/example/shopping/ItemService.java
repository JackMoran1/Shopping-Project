package com.example.shopping;

import org.bson.types.ObjectId;
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

    public Item createItem(String itemId, String name, String quantity, String price) {
//        Item item = new Item(itemId, name, quantity, price);
//        itemRepository.insert(item);
        Item item = itemRepository.insert(new Item(itemId, name, quantity, price));
        return item;
    }
    public void modifyItem(String itemId, String name, String quantity, String price){
        mongoTemplate.update(Item.class)
                .matching(Criteria.where("itemId").is(itemId))
                .apply(new Update().push("name").value(name))
                .first();
        mongoTemplate.update(Item.class)
                .matching(Criteria.where("itemId").is(itemId))
                .apply(new Update().push("quantity").value(quantity))
                .first();
        mongoTemplate.update(Item.class)
                .matching(Criteria.where("itemId").is(itemId))
                .apply(new Update().push("price").value(price))
                .first();
    }
}
