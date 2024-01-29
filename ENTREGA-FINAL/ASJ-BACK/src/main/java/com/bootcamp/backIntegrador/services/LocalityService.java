package com.bootcamp.backIntegrador.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootcamp.backIntegrador.models.LocalityModel;
import com.bootcamp.backIntegrador.repositories.LocalityRepository;

@Service
public class LocalityService {
	
	@Autowired
	LocalityRepository localityRepository;

	public List<LocalityModel> getLocalityByProvince(int id) {
		return localityRepository.findByProvince_proId(id);
	}

	public String createLocality(LocalityModel locality) {
		localityRepository.save(locality);
		return "Created Success";
	}

}
