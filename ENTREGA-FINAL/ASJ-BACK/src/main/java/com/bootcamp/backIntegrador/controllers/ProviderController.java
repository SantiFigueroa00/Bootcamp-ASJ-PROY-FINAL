package com.bootcamp.backIntegrador.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootcamp.backIntegrador.ErrorHandler;
import com.bootcamp.backIntegrador.DTOs.ProviderPercentageByProvinceDTO;
import com.bootcamp.backIntegrador.errors.AlreadyExistExeption;
import com.bootcamp.backIntegrador.models.ProviderModel;
import com.bootcamp.backIntegrador.services.ProviderService;

import jakarta.validation.Valid;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/providers")
public class ProviderController{
	
	@Autowired
	ProviderService providerService;
	
	@GetMapping
	public ResponseEntity<List<ProviderModel>> getProviders() {
		return ResponseEntity.ok(providerService.getProviders());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Optional<ProviderModel>> getProvidersById(@PathVariable int id) {
		return ResponseEntity.ok(providerService.getProvidersById(id));
	}
	
	@GetMapping("/total")
	public ResponseEntity<Integer> getTotalOrders() {
		return ResponseEntity.ok(providerService.getTotalProviders());
	}
	
	@GetMapping("/percentages")
	public ResponseEntity<List<ProviderPercentageByProvinceDTO>> getProviderPercentages() {
		return ResponseEntity.ok(providerService.getProviderPercentageByProvince());
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteProvider(@PathVariable int id) {
		return ResponseEntity.ok(providerService.deleteProvider(id));
	}
	
	
	@PostMapping()
	public ResponseEntity<Object> createProvider(@Valid @RequestBody ProviderModel newProv,BindingResult bindingResult) throws AlreadyExistExeption {

		Map<String, String> errorsMap = ErrorHandler.validData(bindingResult);
		
		if (bindingResult.hasErrors()) {
			return new ResponseEntity<>(errorsMap,HttpStatus.BAD_REQUEST);
		}
		
		
		return ResponseEntity.ok(providerService.createProvider(newProv));
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<String> editProvider(@PathVariable int id, @RequestBody ProviderModel editProv) {
		return ResponseEntity.ok(providerService.updateProvider(id,editProv));
	}
	
	
	
	
	
}
