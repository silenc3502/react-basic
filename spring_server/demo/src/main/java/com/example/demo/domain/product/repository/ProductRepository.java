package com.example.demo.domain.product.repository;

import com.example.demo.domain.product.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query("select p from Product p join fetch p.pictureUrl order by p.itemId")
    List<Product> findEveryPictureInProduct();

    @Query("select p from Product p join fetch p.pictureUrl where p.itemId = :itemId")
    Optional<Product> findPictureInProduct(Long itemId);
}
