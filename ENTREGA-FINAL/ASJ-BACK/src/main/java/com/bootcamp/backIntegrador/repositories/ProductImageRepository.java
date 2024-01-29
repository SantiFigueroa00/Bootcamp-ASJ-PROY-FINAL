package com.bootcamp.backIntegrador.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootcamp.backIntegrador.models.ProductImageModel;

public interface ProductImageRepository extends JpaRepository<ProductImageModel, Integer>{

}
