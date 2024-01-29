package com.bootcamp.backIntegrador.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootcamp.backIntegrador.models.ProductModel;

public interface ProductRepository extends JpaRepository<ProductModel, Integer>{

}
