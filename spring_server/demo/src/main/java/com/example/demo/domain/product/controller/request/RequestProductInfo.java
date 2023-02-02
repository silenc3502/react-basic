package com.example.demo.domain.product.controller.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RequestProductInfo {
    Long itemId;
    String itemName;
    Long price;
    String description;
}