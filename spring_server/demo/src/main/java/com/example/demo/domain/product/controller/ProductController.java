package com.example.demo.domain.product.controller;

import com.example.demo.domain.board.entity.Board;
import com.example.demo.domain.product.controller.request.RequestProductInfo;
import com.example.demo.domain.product.entity.Product;
import com.example.demo.domain.product.service.ProductService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/items")
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
public class ProductController {

    @Autowired
    private ProductService service;

    @GetMapping("/list")
    public List<Product> productList () {
        log.info("productList()");

        return service.list();
    }

    @PostMapping(value = "/register",
            consumes = { MediaType.MULTIPART_FORM_DATA_VALUE, MediaType.APPLICATION_JSON_VALUE })
    public Long productRegister (
            @RequestPart(value = "file") List<MultipartFile> fileList,
            @RequestPart(value = "item") RequestProductInfo info) {

        log.info("productRegister()");

        try {
            for (MultipartFile multipartFile: fileList) {
                log.info("requestUploadFilesWithText() - Make file: " +
                        multipartFile.getOriginalFilename());

                FileOutputStream writer = new FileOutputStream(
                        "../../file_upload/src/assets/uploadImgs/" + multipartFile.getOriginalFilename()
                );

                log.info("디렉토리에 파일 배치 성공!");

                writer.write(multipartFile.getBytes());

                writer.close();
            }
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        log.info("requestUploadFilesWithText(): Success!");

        return service.register(fileList, info);
    }

    @GetMapping("/{itemId}")
    public Product productRead (@PathVariable("itemId") Long itemId) {
        log.info("productRead()");

        return service.read(itemId);
    }

    @DeleteMapping("/{itemId}")
    public void productRemove (@PathVariable("itemId") Long itemId) {
        log.info("productRemove()");

        service.remove(itemId);
    }

    @PutMapping(value = "/modify",
            consumes = { MediaType.MULTIPART_FORM_DATA_VALUE, MediaType.APPLICATION_JSON_VALUE })
    public Product productModify (
            @RequestPart(value = "file") List<MultipartFile> fileList,
            @RequestPart(value = "item") RequestProductInfo info) {

        log.info("productModify()");

        return service.modify(info.getItemId(), fileList, info);
    }
}