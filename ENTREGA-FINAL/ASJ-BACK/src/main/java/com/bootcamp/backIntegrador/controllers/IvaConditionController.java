package com.bootcamp.backIntegrador.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootcamp.backIntegrador.models.IvaConditionModel;
import com.bootcamp.backIntegrador.services.IvaConditionService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping("/iva")
public class IvaConditionController{
	
	@Autowired
	IvaConditionService ivaConditionService;
	
	@GetMapping
	public ResponseEntity<List<IvaConditionModel>> getIvaConditions() {
		return ResponseEntity.ok(ivaConditionService.getIvaConditions());
	}
	
}
