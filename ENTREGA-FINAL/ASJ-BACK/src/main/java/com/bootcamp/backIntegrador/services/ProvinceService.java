package com.bootcamp.backIntegrador.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootcamp.backIntegrador.models.LocalityModel;
import com.bootcamp.backIntegrador.models.ProvinceModel;
import com.bootcamp.backIntegrador.repositories.ProvinceRepository;

@Service
public class ProvinceService {
	
	@Autowired
	ProvinceRepository provinceRepository;
	
	@Autowired
	CountryService countryService;

	public List<ProvinceModel> getProvincesByCountry(Integer id_con) {
		return provinceRepository.findByCountry_ConId(id_con);
	}

	public String updateProvince(int proId, ProvinceModel province) {
		ProvinceModel pro = provinceRepository.findById(proId).get();
		if (pro!=null) {
			pro.setProName(province.getProName());
			countryService.updateCountry(province.getCountry().getConId(),province.getCountry());
			provinceRepository.save(pro);
			return "Update Success";
		}
		return "Error";
		
	}

	
}
