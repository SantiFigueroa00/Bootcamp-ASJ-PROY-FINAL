package com.bootcamp.backIntegrador.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootcamp.backIntegrador.ErrorHandler;
import com.bootcamp.backIntegrador.models.ProductImageModel;
import com.bootcamp.backIntegrador.services.ProductImageService;

import jakarta.validation.Valid;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/images")
public class ProductImageController{
	
	@Autowired
	ProductImageService productImageService;
	
	@GetMapping
	public ResponseEntity<List<ProductImageModel>> getImages() {
		return ResponseEntity.ok(productImageService.getImages());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Optional<ProductImageModel>> getImageById(@PathVariable int id) {
		return ResponseEntity.ok(productImageService.getImageById(id));
	}
	
	@PostMapping()
	public ResponseEntity<Object> createImage(@Valid @RequestBody ProductImageModel newImage,BindingResult bindingResult) {

		Map<String, String> errorsMap = ErrorHandler.validData(bindingResult);
		
		if (bindingResult.hasErrors()) {
			return new ResponseEntity<>(errorsMap,HttpStatus.BAD_REQUEST);
		}
		
		
		return ResponseEntity.ok(productImageService.createImage(newImage));
	}
	
	
	
}
