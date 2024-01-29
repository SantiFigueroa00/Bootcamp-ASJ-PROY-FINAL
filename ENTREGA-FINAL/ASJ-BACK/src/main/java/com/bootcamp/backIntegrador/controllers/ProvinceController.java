package com.bootcamp.backIntegrador.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootcamp.backIntegrador.models.ProvinceModel;
import com.bootcamp.backIntegrador.services.ProvinceService;

@RestController
@RequestMapping("/provinces") 
public class ProvinceController {
	
	@Autowired
	ProvinceService provinceService;
	
	@GetMapping("/byCountry/{id}")
	public ResponseEntity<List<ProvinceModel>> getProvincesByCountry(@PathVariable Integer id) {
		System.out.println(id);
		return ResponseEntity.ok(provinceService.getProvincesByCountry(id));
	}
}
