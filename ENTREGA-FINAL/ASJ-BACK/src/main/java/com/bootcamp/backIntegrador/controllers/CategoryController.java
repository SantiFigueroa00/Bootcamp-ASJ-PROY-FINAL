package com.bootcamp.backIntegrador.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootcamp.backIntegrador.ErrorHandler;
import com.bootcamp.backIntegrador.models.CategoryModel;
import com.bootcamp.backIntegrador.services.CategoryService;

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
@RequestMapping("/categories")
public class CategoryController{
	
	@Autowired
	CategoryService categoryService;
	
	@GetMapping
	public ResponseEntity<List<CategoryModel>> getCategories() {
		return ResponseEntity.ok(categoryService.getCategories());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Optional<CategoryModel>> getCategoryById(@PathVariable int id) {
		return ResponseEntity.ok(categoryService.getCategoryById(id));
	}
	
	@PostMapping()
	public ResponseEntity<Object> createItem(@Valid @RequestBody CategoryModel newCat,BindingResult bindingResult) {

		Map<String, String> errorsMap = ErrorHandler.validData(bindingResult);
		
		if (bindingResult.hasErrors()) {
			return new ResponseEntity<>(errorsMap,HttpStatus.BAD_REQUEST);
		}
		
		
		return ResponseEntity.ok(categoryService.createCategory(newCat));
	}
	
}
