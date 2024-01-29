package com.bootcamp.backIntegrador.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootcamp.backIntegrador.models.ProviderModel;

public interface ProviderRepository extends JpaRepository<ProviderModel, Integer> {

}
