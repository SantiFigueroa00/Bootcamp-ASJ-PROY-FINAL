package com.bootcamp.backIntegrador.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootcamp.backIntegrador.models.LocalityModel;
import com.bootcamp.backIntegrador.services.LocalityService;

@RestController
@RequestMapping("/localities")
public class LocalityController {
	
	@Autowired
	LocalityService localityService;
	
	@GetMapping("/{id}")
	public ResponseEntity<List<LocalityModel>> getLocalityByProvince(@PathVariable int id){
		return ResponseEntity.ok(localityService.getLocalityByProvince(id));
	}
		
}
