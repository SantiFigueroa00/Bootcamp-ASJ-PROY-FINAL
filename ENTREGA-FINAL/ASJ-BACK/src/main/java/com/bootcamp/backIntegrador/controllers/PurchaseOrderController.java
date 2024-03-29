package com.bootcamp.backIntegrador.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bootcamp.backIntegrador.ErrorHandler;
import com.bootcamp.backIntegrador.DTOs.ProviderPercentageDTO;
import com.bootcamp.backIntegrador.models.PurchaseOrderModel;
import com.bootcamp.backIntegrador.services.PurchaseOrderService;

import jakarta.validation.Valid;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/orders")
public class PurchaseOrderController{
	
	@Autowired
	PurchaseOrderService purchaseOrderService;
	
	@GetMapping
	public ResponseEntity<List<PurchaseOrderModel>> getOrders() {
		return ResponseEntity.ok(purchaseOrderService.getOrders());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Optional<PurchaseOrderModel>> getOrderById(@PathVariable int id) {
		return ResponseEntity.ok(purchaseOrderService.getOrderById(id));
	}
	
	@GetMapping("/byProv/{id}")
	public ResponseEntity<List<PurchaseOrderModel>> getOrdersByProviderByStatus(@PathVariable int id,@RequestParam Boolean status) {
		return ResponseEntity.ok(purchaseOrderService.getOrdersByProviderByStatus(id,status));
	}

	
	@GetMapping("/total")
	public ResponseEntity<Integer> getTotalOrders() {
		return ResponseEntity.ok(purchaseOrderService.getTotalOrders());
	}
	
	@GetMapping("/percentages")
	public ResponseEntity<List<ProviderPercentageDTO>> getProviderPercentages() {
		return ResponseEntity.ok(purchaseOrderService.getProviderPercentages());
	}
	
	@PostMapping()
	public ResponseEntity<Object> createOrder(@Valid @RequestBody PurchaseOrderModel newOrder,BindingResult bindingResult) {

		Map<String, String> errorsMap = ErrorHandler.validData(bindingResult);
		
		if (bindingResult.hasErrors()) {
			return new ResponseEntity<>(errorsMap,HttpStatus.BAD_REQUEST);
		}
		
		
		return ResponseEntity.ok(purchaseOrderService.createOrder(newOrder));
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<String> editOrder(@PathVariable int id, @RequestBody PurchaseOrderModel editOrder) {
		return ResponseEntity.ok(purchaseOrderService.updateOrder(id,editOrder));
	}
	
	
	
	
	
}
