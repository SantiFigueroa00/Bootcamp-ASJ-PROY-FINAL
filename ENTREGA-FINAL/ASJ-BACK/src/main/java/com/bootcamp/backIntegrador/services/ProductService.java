package com.bootcamp.backIntegrador.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootcamp.backIntegrador.models.ProductModel;
import com.bootcamp.backIntegrador.repositories.ProductRepository;


@Service
public class ProductService {

	@Autowired
	ProductRepository productRepository;
	
	@Autowired
	CategoryService categoryService;
	
	
	public List<ProductModel> getProducts() {
		return productRepository.findAll();
	}
	
	public Optional<ProductModel> getProductById(int id) {
		return productRepository.findById(id);
	}

	public String createProduct(ProductModel newProd) {
		productRepository.save(newProd);
		return "Created Success";
	}
	

	public String updateProduct(int id, ProductModel editProd) {
		ProductModel prod = productRepository.findById(id).get();
		if (prod!=null) {
			prod.setProdName(editProd.getProdName());
			prod.setProdDescription(editProd.getProdDescription());
			prod.setProdPrice(editProd.getProdPrice());
			prod.setCategory(editProd.getCategory());
			prod.setProvider(editProd.getProvider());
			productRepository.save(prod);
			return "Update Success";
		}
		return "error";
	}
	

}
