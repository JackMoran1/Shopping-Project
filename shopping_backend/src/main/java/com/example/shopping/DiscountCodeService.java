package com.example.shopping;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class DiscountCodeService {

    @Autowired
    private DiscountCodeRepository discountCodeRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    public List<DiscountCode> allDiscountCode() { return discountCodeRepository.findAll(); }

    public Optional<DiscountCode> singleDiscountCode(String discountId) { return discountCodeRepository.findDiscountCodeBydiscountId(discountId); }


    public void deleteDiscountCode(String discountId) {
        Optional<DiscountCode> discount = discountCodeRepository.findDiscountCodeBydiscountId(discountId);
        if(discount.isPresent()) {
            discountCodeRepository.deleteDiscountCodeBydiscountId(discountId);
        }else {
            throw new RuntimeException("Unable to find discount");
        }
    }

}
