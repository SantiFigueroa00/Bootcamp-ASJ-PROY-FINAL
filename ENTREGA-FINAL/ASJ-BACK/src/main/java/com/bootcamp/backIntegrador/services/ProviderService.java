package com.bootcamp.backIntegrador.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootcamp.backIntegrador.models.ProviderModel;
import com.bootcamp.backIntegrador.repositories.ProviderRepository;


@Service
public class ProviderService {

	@Autowired
	ProviderRepository providerRepository;
	
	@Autowired
	AddressService addressService;
	
	@Autowired
	InfoContactService infoContactService;
	
	@Autowired
	ItemService itemService;
	
	@Autowired
	IvaConditionService ivaConditionService;
	
	public List<ProviderModel> getProviders() {
		return providerRepository.findAll();
	}
	
	public Optional<ProviderModel> getProvidersById(int id) {
		return providerRepository.findById(id);
	}

	public String createProvider(ProviderModel newProv) {
		
		addressService.createAddress(newProv.getAddress());
		infoContactService.createInfoContact(newProv.getInfoContact());
		providerRepository.save(newProv);
		return "Created Success";
	}
	

	public String updateProvider(int id, ProviderModel editProv) {
		ProviderModel p = providerRepository.findById(id).get();
		if (p!=null) {
			p.setProvCompName(editProv.getProvCompName());
			p.setProvWebSite(editProv.getProvWebSite());
			p.setProvEmail(editProv.getProvEmail());
			p.setProvPhone(editProv.getProvPhone());
			p.setProvLogo(editProv.getProvLogo());
			p.setProvIsDeleted(editProv.isProvIsDeleted()); 
			providerRepository.save(p);
			infoContactService.updateInfoContact(editProv.getInfoContact().getContId(),editProv.getInfoContact());
			itemService.updateItem(editProv.getItem().getItemId(),editProv.getItem());
			ivaConditionService.updateIva(editProv.getIvaCondition().getIvaId(),editProv.getIvaCondition());
			addressService.updateAddress(editProv.getAddress().getAdId(),editProv.getAddress());
			return "Update Success";
		}
		return "error";
	}
	

}
