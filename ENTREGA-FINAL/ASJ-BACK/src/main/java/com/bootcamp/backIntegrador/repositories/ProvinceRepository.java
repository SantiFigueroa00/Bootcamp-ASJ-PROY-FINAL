package com.bootcamp.backIntegrador.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootcamp.backIntegrador.models.ProvinceModel;

public interface ProvinceRepository extends JpaRepository<ProvinceModel, Integer>{

	// SELECT p FROM ProvinceModel p WHERE p.country.conId = :conId

	List<ProvinceModel> findByCountry_ConId(Integer id_con);

}
