package com.bootcamp.backIntegrador.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootcamp.backIntegrador.models.LocalityModel;

public interface LocalityRepository extends JpaRepository<LocalityModel, Integer> {
	
	List<LocalityModel> findByProvince_proId(int proId);
}
