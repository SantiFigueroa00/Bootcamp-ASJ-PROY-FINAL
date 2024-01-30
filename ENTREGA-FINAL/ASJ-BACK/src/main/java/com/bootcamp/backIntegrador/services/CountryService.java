package com.bootcamp.backIntegrador.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootcamp.backIntegrador.models.CountryModel;
import com.bootcamp.backIntegrador.models.ProvinceModel;
import com.bootcamp.backIntegrador.repositories.CountryRepository;

@Service
public class CountryService {
	
	@Autowired
	CountryRepository countryRepository;

	public List<CountryModel> getCountries() {
		return countryRepository.findAll();
	}

	public String updateCountry(int conId, CountryModel country) {
		CountryModel c = countryRepository.findById(conId).get();
		if (c!=null) {
			c.setConName(country.getConName());
			countryRepository.save(c);
			return "Update Success";
		}
		return "Error";
	}
	
}
