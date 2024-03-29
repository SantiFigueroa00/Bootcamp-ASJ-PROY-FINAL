package com.bootcamp.backIntegrador.services;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootcamp.backIntegrador.DTOs.ProviderPercentageByProvinceDTO;
import com.bootcamp.backIntegrador.errors.AlreadyExistExeption;
import com.bootcamp.backIntegrador.models.ProductModel;
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
//		Optional<ProviderModel> pbyIdOptional = providerRepository.findById(id);
		
//		if (pbyIdOptional.isEmpty()) {
//			throw new RuntimeException("Proveedor no encontrado");
//		}
		return providerRepository.findById(id);
	}
	
	public Integer getTotalProviders() {
		return providerRepository.getTotalProviders();
	}
	
	public List<ProviderPercentageByProvinceDTO> getProviderPercentageByProvince() {
		List<ProviderPercentageByProvinceDTO> providerPercentages = providerRepository.getProviderPercentageByProvince();

        return providerPercentages.stream()
                .sorted(Comparator.comparing(ProviderPercentageByProvinceDTO::getPorcentaje).reversed())
                .limit(4)
                .collect(Collectors.toList());
	}

	public String createProvider(ProviderModel newProv) throws AlreadyExistExeption{
		
		Optional<ProviderModel> pOptional = providerRepository.findByProvCod(newProv.getProvCod());
		
		if (pOptional.isPresent()) {
			throw new AlreadyExistExeption("The provider with code "+ newProv.getProvCod() +" already exists");
		}
		
		addressService.createAddress(newProv.getAddress());
		infoContactService.createInfoContact(newProv.getInfoContact());
		providerRepository.save(newProv);
		return "Created Success";
	}
	

	public String updateProvider(int id, ProviderModel editProv) throws AlreadyExistExeption {
		
		ProviderModel p = providerRepository.findById(id).get();
		
		if(!p.getProvCod().equals(editProv.getProvCod())) {
			Optional<ProviderModel> pOptional = providerRepository.findByProvCod(editProv.getProvCod());
			
			if (pOptional.isPresent()) {
				throw new AlreadyExistExeption("The provider with code "+ editProv.getProvCod() +" already exists");
			}
		}
		
		
		if (p!=null) {
			p.setProvCod(editProv.getProvCod());
			p.setProvCompName(editProv.getProvCompName());
			p.setProvWebSite(editProv.getProvWebSite());
			p.setProvEmail(editProv.getProvEmail());
			p.setProvPhone(editProv.getProvPhone());
			p.setProvLogo(editProv.getProvLogo());
			p.setProvIsDeleted(editProv.isProvIsDeleted()); 
			providerRepository.save(p);
			p.setItem(editProv.getItem());
			p.setIvaCondition(editProv.getIvaCondition());
			infoContactService.updateInfoContact(editProv.getInfoContact().getContId(),editProv.getInfoContact());
			addressService.updateAddress(editProv.getAddress().getAdId(),editProv.getAddress());
			return "Update Success";
		}
		return "error";
	}

	public String deleteProvider(int id) {
		ProviderModel p = providerRepository.findById(id).get();
		if (p!=null) {
			p.setProvIsDeleted(!p.isProvIsDeleted());
			providerRepository.save(p);
			return "Delete Success";
		}
		
		return "error";
	}
	

}
