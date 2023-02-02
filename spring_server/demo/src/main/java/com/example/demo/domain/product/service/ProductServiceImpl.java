package com.example.demo.domain.product.service;

import com.example.demo.domain.board.entity.Board;
import com.example.demo.domain.product.controller.request.RequestProductInfo;
import com.example.demo.domain.product.entity.Product;
import com.example.demo.domain.product.repository.ProductRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    ProductRepository repository;

    @Override
    public Long register(List<MultipartFile> fileList, RequestProductInfo requestProductInfo) {

        List<String> pictureUrl = new ArrayList<>();

        for (MultipartFile multipartFile: fileList) {
            pictureUrl.add(multipartFile.getOriginalFilename());
        }

        Product product = new Product();
        product.setItemName(requestProductInfo.getItemName());
        product.setPrice(requestProductInfo.getPrice());
        product.setDescription(requestProductInfo.getDescription());

        product.setPictureUrl(pictureUrl);

        repository.save(product);

        return product.getItemId();
    }

    @Override
    public List<Product> list() {
        //return repository.findAll(Sort.by(Sort.Direction.DESC, "itemId"));
        return repository.findEveryPictureInProduct();
    }

    @Override
    public Product read(Long itemId) {
        Optional<Product> maybeProduct = repository.findPictureInProduct(itemId);

        if (maybeProduct.equals(Optional.empty())) {
            log.info("Can't read product!!!");
            return null;
        }

        return maybeProduct.get();
    }

    @Override
    public Product modify(Long itemId, List<MultipartFile> fileList, RequestProductInfo requestProductInfo) {
        Optional<Product> maybeProduct = repository.findPictureInProduct(itemId);

        if (maybeProduct.equals(Optional.empty())) {
            log.info("Can't read product!!!");
            return null;
        }

        Product product = maybeProduct.get();
        product.setItemName(requestProductInfo.getItemName());
        product.setPrice(requestProductInfo.getPrice());
        product.setDescription(requestProductInfo.getDescription());

        List<String> pictureUrl = new ArrayList<>();

        for (MultipartFile multipartFile: fileList) {
            pictureUrl.add(multipartFile.getOriginalFilename());
        }

        product.setPictureUrl(pictureUrl);

        repository.save(product);

        return product;
    }

    @Override
    public void remove(Long itemId) {
        repository.deleteById(itemId);
    }
}
