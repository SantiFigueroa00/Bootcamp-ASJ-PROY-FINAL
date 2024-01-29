package com.bootcamp.backIntegrador.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootcamp.backIntegrador.models.PurchaseOrderModel;

public interface PurchaseOrderRepository extends JpaRepository<PurchaseOrderModel, Integer>{

}
