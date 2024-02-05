package com.bootcamp.backIntegrador.services;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootcamp.backIntegrador.DTOs.CategoryProductCountDTO;
import com.bootcamp.backIntegrador.DTOs.ProviderPercentageDTO;
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
	
	public Integer getTotalProductsByCategory() {
		return productRepository.getTotalProducts();
	}
	
	public List<CategoryProductCountDTO> getTopCategoriesWithProductCount() {
		List<CategoryProductCountDTO> productQuantity = productRepository.getTopCategoriesWithProductCount();

        return productQuantity.stream()
                .sorted(Comparator.comparing(CategoryProductCountDTO::getProductCount).reversed())
                .limit(4)
                .collect(Collectors.toList());
	}

	public String createProduct(ProductModel newProd) {
		ProductModel p = productRepository.save(newProd);
		
		for (ProductImageModel img : newProd.getImages()) {
			img.setProduct(p);
			productImageService.createImage(img);
		}
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
			prod.setProdIsDeleted(editProd.isProdIsDeleted());
			List<ProductImageModel> images = editProd.getImages();
			for (ProductImageModel productImageModel : images) {
				productImageService.updateImage(productImageModel.getImgId(), productImageModel);
			}
			productRepository.save(prod);
			return "Update Success";
		}
		return "error";
	}

	public List<ProductModel> getProductsByProvider(int id) {
		return productRepository.findByProvider_ProvId(id);
	}
	
	public List<ProductModel> getProductsByProviderActivate(int id) {
		return productRepository.findByProvider_ProvIdAndProdIsDeleted(id,false);
	}
	
	public List<ProductModel> getProductsByCategory(int id) {
		return productRepository.findByCategory_CatId(id);
	}
	

	public String deleteProduct(int id) {
		ProductModel p = productRepository.findById(id).get();
		if (p!=null) {
			p.setProdIsDeleted(!p.isProdIsDeleted());
			productRepository.save(p);
			return "Delete Success";
		}
		return "error";
	}
	
}
