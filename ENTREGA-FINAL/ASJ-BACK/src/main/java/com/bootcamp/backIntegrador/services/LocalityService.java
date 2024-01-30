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
	
	@Autowired
	ProvinceService provinceService;

	public List<LocalityModel> getLocalityByProvince(int id) {
		return localityRepository.findByProvince_proId(id);
	}

	public String createLocality(LocalityModel locality) {
		localityRepository.save(locality);
		return "Created Success";
	}

	public String updateLocality(int locId, LocalityModel locality) {
		LocalityModel loc = localityRepository.findById(locId).get();
		if (loc!=null) {
			loc.setLocName(locality.getLocName());
			loc.setProvince(locality.getProvince());
			localityRepository.save(loc);
			return "Update Success";
		}
		return "Error";
		
	}

}
