package com.bootcamp.backIntegrador.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootcamp.backIntegrador.models.InfoContactModel;
import com.bootcamp.backIntegrador.repositories.InfoContactRepository;

import jakarta.validation.Valid;


@Service
public class InfoContactService {

	@Autowired
	InfoContactRepository infoContactRepository;	
	
	public List<InfoContactModel> getInfoContacts() {
		return infoContactRepository.findAll();
	}

	public String createInfoContact(@Valid InfoContactModel newInfo) {
		infoContactRepository.save(newInfo);
		
		return "Created Success";
	}

	public String updateInfoContact(int contId, InfoContactModel infoEdit) {
		
		InfoContactModel inf = infoContactRepository.findById(contId).get();
		if (inf!=null) {
			inf.setContName(infoEdit.getContName());
			inf.setContEmail(infoEdit.getContEmail());
			inf.setContPhone(infoEdit.getContPhone());
			inf.setContRole(infoEdit.getContRole());
			infoContactRepository.save(inf);
			return "Update Success";
		}
		return "Error";
	}

}
