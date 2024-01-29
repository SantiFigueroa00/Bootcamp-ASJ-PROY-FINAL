package com.bootcamp.backIntegrador.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootcamp.backIntegrador.ErrorHandler;
import com.bootcamp.backIntegrador.models.ItemModel;
import com.bootcamp.backIntegrador.services.ItemService;

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
@RequestMapping("/items")
public class ItemController{
	
	@Autowired
	ItemService itemService;
	
	@GetMapping
	public ResponseEntity<List<ItemModel>> getItems() {
		return ResponseEntity.ok(itemService.getItems());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Optional<ItemModel>> getItemById(@PathVariable int id) {
		return ResponseEntity.ok(itemService.getItemById(id));
	}
	
	@PostMapping()
	public ResponseEntity<Object> createItem(@Valid @RequestBody ItemModel newItem,BindingResult bindingResult) {

		Map<String, String> errorsMap = ErrorHandler.validData(bindingResult);
		
		if (bindingResult.hasErrors()) {
			return new ResponseEntity<>(errorsMap,HttpStatus.BAD_REQUEST);
		}
		
		
		return ResponseEntity.ok(itemService.createItem(newItem));
	}
	
	
	
}
