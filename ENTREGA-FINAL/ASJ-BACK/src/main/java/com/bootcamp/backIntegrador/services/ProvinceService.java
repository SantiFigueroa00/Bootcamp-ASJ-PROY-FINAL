package com.bootcamp.backIntegrador.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootcamp.backIntegrador.models.ProvinceModel;
import com.bootcamp.backIntegrador.repositories.ProvinceRepository;

@Service
public class ProvinceService {
	
	@Autowired
	ProvinceRepository provinceRepository;

	public List<ProvinceModel> getProvincesByCountry(Integer id_con) {
		return provinceRepository.findByCountry_ConId(id_con);
	}

	
}
