package com.example.shopping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/discounts")
@CrossOrigin
public class DiscountCodeController {

    @Autowired
    private DiscountCodeService discountService;

    @GetMapping
    public ResponseEntity<List<DiscountCode>> getAllDiscounts() {
        return new ResponseEntity<List<DiscountCode>>(discountService.allDiscountCode(), HttpStatus.OK);
    }

    @GetMapping("/{discountId}")
    public ResponseEntity<Optional<DiscountCode>> getSingleDiscountCode(@PathVariable String discountId) {
        return new ResponseEntity<Optional<DiscountCode>>(discountService.singleDiscountCode(discountId),
                HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<DiscountCode> createDiscount(@RequestBody Map<String, String> payload){
        return new ResponseEntity<DiscountCode>(discountService.createDiscountCode(payload.get("discountId"), payload.get("discountName")
                , Double.parseDouble(payload.get("discountAmount"))), HttpStatus.CREATED);
    }

/*
    @PutMapping("/{discountId}")
    public ResponseEntity<DiscountCode> updateInformation(@PathVariable String discountId, @RequestBody Map<String, String> payload) {
        return new ResponseEntity<DiscountCode>(discountService.changeInfo(discountId, payload.get("discountAmount")), HttpStatus.OK);
    }
*/
    @DeleteMapping("{userId}")
    public ResponseEntity<Void> deleteDiscount(@PathVariable String discountId) {
        discountService.deleteDiscountCode(discountId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }




}
