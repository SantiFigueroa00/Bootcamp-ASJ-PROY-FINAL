package com.bootcamp.backIntegrador.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootcamp.backIntegrador.ErrorHandler;
import com.bootcamp.backIntegrador.models.DetailOrderModel;
import com.bootcamp.backIntegrador.services.DetailOrderService;

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
@RequestMapping("/detail-order")
public class DetailOrderController{
	
	@Autowired
	DetailOrderService detailOrderService;
	
	@GetMapping
	public ResponseEntity<List<DetailOrderModel>> getDetails() {
		return ResponseEntity.ok(detailOrderService.getDetails());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Optional<DetailOrderModel>> getDetailById(@PathVariable int id) {
		return ResponseEntity.ok(detailOrderService.getDetailById(id));
	}
	
	
	@PostMapping()
	public ResponseEntity<Object> createDetail(@Valid @RequestBody DetailOrderModel newDetail,BindingResult bindingResult) {

		Map<String, String> errorsMap = ErrorHandler.validData(bindingResult);
		
		if (bindingResult.hasErrors()) {
			return new ResponseEntity<>(errorsMap,HttpStatus.BAD_REQUEST);
		}
		
		
		return ResponseEntity.ok(detailOrderService.createDetail(newDetail));
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<String> editDetail(@PathVariable int id, @RequestBody DetailOrderModel editDetail) {
		return ResponseEntity.ok(detailOrderService.updateDetail(id,editDetail));
	}
	
	
	
	
	
}
