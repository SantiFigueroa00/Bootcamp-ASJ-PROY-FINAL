package com.bootcamp.backIntegrador.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootcamp.backIntegrador.models.AddressModel;

public interface AddressRepository extends JpaRepository<AddressModel, Integer>{

}
