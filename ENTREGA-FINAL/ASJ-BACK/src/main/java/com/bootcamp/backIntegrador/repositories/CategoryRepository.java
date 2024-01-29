package com.bootcamp.backIntegrador.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootcamp.backIntegrador.models.CategoryModel;

public interface CategoryRepository extends JpaRepository<CategoryModel, Integer>{

}
