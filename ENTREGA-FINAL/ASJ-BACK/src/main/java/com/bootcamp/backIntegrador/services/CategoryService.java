package com.bootcamp.backIntegrador.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootcamp.backIntegrador.models.CategoryModel;
import com.bootcamp.backIntegrador.repositories.CategoryRepository;


@Service
public class CategoryService {

	@Autowired
	CategoryRepository categoryRepository;	
	
	public List<CategoryModel> getCategories() {
		return categoryRepository.findAll();
	}
	
	public Optional<CategoryModel> getCategoryById(int id) {
		return categoryRepository.findById(id);
	}

	public String createCategory(CategoryModel newCat) {
		categoryRepository.save(newCat);
		return "Created Success";
	}

	public String updateCategory(int id, CategoryModel catEdit) {
		CategoryModel c = categoryRepository.findById(id).get();
		if (c!=null) {
			c.setCatName(catEdit.getCatName());
			c.setCatIsDeleted(catEdit.isCatIsDeleted());
			categoryRepository.save(c);
			return "Update Success";
		}
		return "Error";
	}
	
	public String deleteCategory(int id) {
		CategoryModel cat = categoryRepository.findById(id).get();
		if (cat!=null) {
			cat.setCatIsDeleted(!cat.isCatIsDeleted());
			categoryRepository.save(cat);
			return "Delete Success";
		}
		return "error";
	}
	

}
