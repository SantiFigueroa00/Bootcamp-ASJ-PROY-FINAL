package com.bootcamp.backIntegrador.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootcamp.backIntegrador.ErrorHandler;
import com.bootcamp.backIntegrador.models.ProductModel;
import com.bootcamp.backIntegrador.services.ProductService;

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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/products")
public class ProductController{
	
	@Autowired
	ProductService productService;
	
	@GetMapping
	public ResponseEntity<List<ProductModel>> getProducts() {
		return ResponseEntity.ok(productService.getProducts());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Optional<ProductModel>> getProductById(@PathVariable int id) {
		return ResponseEntity.ok(productService.getProductById(id));
	}
	
	@GetMapping("/byProv/{id}")
	public ResponseEntity<List<ProductModel>> getProductsByProvider(@PathVariable int id) {
		return ResponseEntity.ok(productService.getProductsByProvider(id));
	}
	
	
	@PostMapping()
	public ResponseEntity<Object> createProduct(@Valid @RequestBody ProductModel newProd,BindingResult bindingResult) {

		Map<String, String> errorsMap = ErrorHandler.validData(bindingResult);
		
		if (bindingResult.hasErrors()) {
			return new ResponseEntity<>(errorsMap,HttpStatus.BAD_REQUEST);
		}
		
		
		return ResponseEntity.ok(productService.createProduct(newProd));
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<String> editProduct(@PathVariable int id, @RequestBody ProductModel editProd) {
		return ResponseEntity.ok(productService.updateProduct(id,editProd));
	}
	
	
	
	
	
}
