package com.bootcamp.backIntegrador.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootcamp.backIntegrador.models.PurchaseOrderModel;

public interface PurchaseOrderRepository extends JpaRepository<PurchaseOrderModel, Integer>{

	List<PurchaseOrderModel> findByProvider_ProvId(int id);

}
