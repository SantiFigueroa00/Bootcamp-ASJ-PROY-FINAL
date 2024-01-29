package com.bootcamp.backIntegrador.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import com.bootcamp.backIntegrador.models.CountryModel;
import com.bootcamp.backIntegrador.services.CountryService;

@Controller
@RequestMapping("/countries") 
public class CountryController {
	
	@Autowired
	CountryService countryService;
	
	
	@GetMapping
	public ResponseEntity<List<CountryModel>> getCountries() {
		return ResponseEntity.ok(countryService.getCountries());
	}
	
}
