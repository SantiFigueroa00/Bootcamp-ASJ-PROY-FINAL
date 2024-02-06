package com.bootcamp.backIntegrador.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootcamp.backIntegrador.models.AddressModel;
import com.bootcamp.backIntegrador.repositories.AddressRepository;

import jakarta.validation.Valid;

@Service
public class AddressService {

	@Autowired
	AddressRepository addressRepository;
	
	@Autowired
	LocalityService localityService;
	
	public List<AddressModel> getAddresses() {
		return addressRepository.findAll();
	}
	
	public String createAddress(AddressModel addressModel) {
		localityService.createLocality(addressModel.getLocality());
		addressRepository.save(addressModel);
		return "Created Success";
	}

	public String updateAddress(int id, AddressModel addressEdit) {
		AddressModel ad = addressRepository.findById(id).get();
		if (ad!=null) {
			ad.setAdNumber(addressEdit.getAdNumber());
			ad.setAdStreet(addressEdit.getAdStreet());
			ad.setAdZip(addressEdit.getAdZip());
			// FALTA MOD LOC, PROVINCIA Y PAIS
			localityService.updateLocality(addressEdit.getLocality().getLocId(),addressEdit.getLocality());
			addressRepository.save(ad);
			return "Update Success";
		}
		return "Error";
	}

}
