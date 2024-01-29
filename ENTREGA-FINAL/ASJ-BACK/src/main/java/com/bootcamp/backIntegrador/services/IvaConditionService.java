package com.bootcamp.backIntegrador.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootcamp.backIntegrador.models.IvaConditionModel;
import com.bootcamp.backIntegrador.repositories.IvaConditionRepository;

@Service
public class IvaConditionService {

	@Autowired
	IvaConditionRepository ivaConditionRepository;
	
	public List<IvaConditionModel> getIvaConditions() {
		return ivaConditionRepository.findAll();
	}

	public String updateIva(int id, IvaConditionModel ivaConditionEdit) {
		IvaConditionModel i = ivaConditionRepository.findById(id).get();
		if (i!=null) {
			i.setIvaCond(ivaConditionEdit.getIvaCond());
			ivaConditionRepository.save(i);
			return "Update Success";
		}
		return "Error";
		
	}
	

}
