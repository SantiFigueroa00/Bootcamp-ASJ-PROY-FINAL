package com.bootcamp.backIntegrador.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bootcamp.backIntegrador.DTOs.CategoryProductCountDTO;
import com.bootcamp.backIntegrador.models.ProductModel;

public interface ProductRepository extends JpaRepository<ProductModel, Integer>{

	List<ProductModel> findByProvider_ProvId(int id);

	List<ProductModel> findByCategory_CatId(int id);
	
	List<ProductModel> findByProvider_ProvIdAndProdIsDeleted(int id, boolean isDeleted);

	@Query("SELECT COUNT(p) FROM ProductModel p")
    int getTotalProducts();
	
	@Query("SELECT new com.bootcamp.backIntegrador.DTOs.CategoryProductCountDTO(c.catName, COUNT(p.prodId)) " +
	           "FROM CategoryModel c LEFT JOIN ProductModel p ON c.catId = p.category.catId " +
	           "GROUP BY c.catName ")
	List<CategoryProductCountDTO> getTopCategoriesWithProductCount();
	
}
