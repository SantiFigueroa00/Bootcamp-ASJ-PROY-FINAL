package com.bootcamp.backIntegrador.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootcamp.backIntegrador.models.InfoContactModel;
import com.bootcamp.backIntegrador.services.InfoContactService;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;



@RestController
@RequestMapping("/info")
public class InfoContactController{
	
	@Autowired
	InfoContactService infoContactService;
	
	@GetMapping
	public ResponseEntity<List<InfoContactModel>> getInfoContacts() {
		return ResponseEntity.ok(infoContactService.getInfoContacts());
	}
	
	
}
