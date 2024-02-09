package com.bootcamp.backIntegrador.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootcamp.backIntegrador.models.ProductImageModel;
import com.bootcamp.backIntegrador.repositories.ProductImageRepository;


@Service
public class ProductImageService {

	@Autowired
	ProductImageRepository productImageRepository;	
	
	public List<ProductImageModel> getImages() {
		return productImageRepository.findAll();
	}
	
				
	public Optional<ProductImageModel> getImageById(int id) {
		return productImageRepository.findById(id);
	}

	public String createImage(ProductImageModel newImage) {
		productImageRepository.save(newImage);
		return "Created Success";
	}

	public String updateImage(int id, ProductImageModel imageEdit) {
		ProductImageModel img = productImageRepository.findById(id).get();
		if (img!=null) {
			img.setImgUrl(imageEdit.getImgUrl());
			img.setProduct(imageEdit.getProduct());
			productImageRepository.save(img);
			return "Update Success";
		}
		return "Error";
	}


	public String deleteImage(ProductImageModel img) {
		productImageRepository.deleteById(img.getImgId());
		return "Delete Success";
	}


	public String updateProductImages(int imgId, ProductImageModel img) {
		ProductImageModel imgFound = productImageRepository.findById(imgId).get();
		if (imgFound!=null) {
			imgFound.setImgUrl(img.getImgUrl());
			productImageRepository.save(imgFound);
			return "Update Success";
		}
		return "Error";
		
	}
	

}
