package com.bootcamp.backIntegrador.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootcamp.backIntegrador.models.AddressModel;
import com.bootcamp.backIntegrador.repositories.AddressRepository;

@Service
public class AddressService {

	@Autowired
	AddressRepository addressRepository;
	
	public List<AddressModel> getAddresses() {
		return addressRepository.findAll();
	}
	
	public String createAddress(AddressModel addressModel) {
		// AGREGAR PARA QUE SE CREE LOCALIDAD
		addressRepository.save(addressModel);
		return "Created Success";
	}

	public String updateAddress(int id, AddressModel addressEdit) {
		AddressModel ad = addressRepository.findById(id).get();
		if (ad!=null) {
			ad.setAdNumber(addressEdit.getAdNumber());
			ad.setAdStreet(addressEdit.getAdStreet());
			ad.setAdZip(addressEdit.getAdZip());
			
			
			addressRepository.save(ad);
			return "Update Success";
		}
		return "Error";
	}

}
