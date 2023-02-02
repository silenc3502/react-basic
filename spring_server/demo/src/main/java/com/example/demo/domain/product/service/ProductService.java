package com.example.demo.domain.product.service;

import com.example.demo.domain.product.controller.request.RequestProductInfo;
import com.example.demo.domain.product.entity.Product;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface ProductService {

    public Long register(List<MultipartFile> fileList, RequestProductInfo requestProductInfo);
    public List<Product> list();
    public Product read(Long itemId);
    public Product modify(Long itemId, List<MultipartFile> fileList, RequestProductInfo requestProductInfo);
    public void remove(Long itemId);
}
