package com.bootcamp.backIntegrador.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootcamp.backIntegrador.models.CountryModel;


public interface CountryRepository extends JpaRepository<CountryModel, Integer>{

}
