package com.bootcamp.backIntegrador.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootcamp.backIntegrador.models.ProductModel;

public interface ProductRepository extends JpaRepository<ProductModel, Integer>{

	List<ProductModel> findByProvider_ProvId(int id);

	List<ProductModel> findByCategory_CatId(int id);
	
	List<ProductModel> findByProvider_ProvIdAndProdIsDeleted(int id, boolean isDeleted);

}
