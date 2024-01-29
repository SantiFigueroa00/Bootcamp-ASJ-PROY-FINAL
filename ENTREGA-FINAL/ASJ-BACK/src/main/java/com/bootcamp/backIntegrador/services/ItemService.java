package com.bootcamp.backIntegrador.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootcamp.backIntegrador.models.ItemModel;
import com.bootcamp.backIntegrador.repositories.ItemRepository;


@Service
public class ItemService {

	@Autowired
	ItemRepository itemRepository;	
	
	public List<ItemModel> getItems() {
		return itemRepository.findAll();
	}
	
	public Optional<ItemModel> getItemById(int id) {
		return itemRepository.findById(id);
	}

	public String createItem(ItemModel newItem) {
		itemRepository.save(newItem);
		
		return "Created Success";
	}

	public String updateItem(int id, ItemModel itemEdit) {
		ItemModel i = itemRepository.findById(id).get();
		if (i!=null) {
			i.setItemName(itemEdit.getItemName());
			itemRepository.save(i);
			return "Update Success";
		}
		return "Error";
	}
	

}
