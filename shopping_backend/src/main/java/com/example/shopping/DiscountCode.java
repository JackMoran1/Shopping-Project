package com.example.shopping;


import lombok.AllArgsConstructor;
import org.springframework.data.annotation.Id;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;
import org.bson.types.ObjectId;

@Document(collection = "discount-code")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class DiscountCode {

    @Id
    private ObjectId id;
    private String discountId, discountName;
    private double discountAmount;
    //private String email;



    public DiscountCode(String discountId, String discountName, double discountAmount) {
        this.discountId = discountId;
        this.discountName = discountName;
        this.discountAmount = discountAmount;
        //this.name = name;
    }
    public String getDiscountId() {
        return discountId;
    }

    public void setDiscountId(String discountId) {
        this.discountId = discountId;
    }



    public void setDiscountAmount(double discountAmount) {
        this.discountAmount = discountAmount;
    }



    public double getDiscountAmount() {
        return discountAmount;
    }




}
