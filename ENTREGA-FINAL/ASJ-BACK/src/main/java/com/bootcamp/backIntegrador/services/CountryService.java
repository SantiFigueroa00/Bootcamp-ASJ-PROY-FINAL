package com.bootcamp.backIntegrador.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootcamp.backIntegrador.models.CountryModel;
import com.bootcamp.backIntegrador.repositories.CountryRepository;

@Service
public class CountryService {
	
	@Autowired
	CountryRepository countryRepository;

	public List<CountryModel> getCountries() {
		return countryRepository.findAll();
	}
	
}
