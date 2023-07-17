package com.example.shopping;

import lombok.AllArgsConstructor;

//Testing comments- Jack Moran
//another testing comment
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "ecommerce")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Item {
    @Id
    private ObjectId id;
    private String itemId;
    private String name;
    private String quantity;
    private String price;

    public Item(String itemId, String name, String quantity, String price) {
        this.itemId = itemId;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }

    public String getItemId() {
        return itemId;
    }
}
