package com.bootcamp.backIntegrador.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootcamp.backIntegrador.models.ProductImageModel;
import com.bootcamp.backIntegrador.models.ProductModel;
import com.bootcamp.backIntegrador.repositories.ProductRepository;


@Service
public class ProductService {

	@Autowired
	ProductRepository productRepository;
	
	@Autowired
	CategoryService categoryService;
	
	@Autowired
	ProductImageService productImageService;
	
	
	public List<ProductModel> getProducts() {
		return productRepository.findAll();
	}
	
	public Optional<ProductModel> getProductById(int id) {
		return productRepository.findById(id);
	}

	public ProductModel createProduct(ProductModel newProd) {
		ProductModel p = productRepository.save(newProd);
		return p;
	}
	

	public String updateProduct(int id, ProductModel editProd) {
		ProductModel prod = productRepository.findById(id).get();
		if (prod!=null) {
			prod.setProdName(editProd.getProdName());
			prod.setProdDescription(editProd.getProdDescription());
			prod.setProdPrice(editProd.getProdPrice());
			prod.setCategory(editProd.getCategory());
			prod.setProvider(editProd.getProvider());
			prod.setProdIsDeleted(editProd.isProdIsDeleted());
//			prod.setImages(editProd.getImages());
			productRepository.save(prod);
			return "Update Success";
		}
		return "error";
	}

	public List<ProductModel> getProductsByProvider(int id) {
		return productRepository.findByProvider_ProvId(id);
	}
	

}
