package com.bootcamp.backIntegrador.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootcamp.backIntegrador.models.DetailOrderModel;

public interface DetailOrderRepository extends JpaRepository<DetailOrderModel, Integer>{

}
