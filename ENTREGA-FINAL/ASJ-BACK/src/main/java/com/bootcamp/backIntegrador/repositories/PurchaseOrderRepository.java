package com.bootcamp.backIntegrador.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bootcamp.backIntegrador.DTOs.ProviderPercentageDTO;
import com.bootcamp.backIntegrador.models.PurchaseOrderModel;

public interface PurchaseOrderRepository extends JpaRepository<PurchaseOrderModel, Integer>{

	List<PurchaseOrderModel> findByProvider_ProvId(int id);

	List<PurchaseOrderModel> findByProvider_ProvIdAndOrderState(int id, boolean b);

	@Query("SELECT COUNT(po) FROM PurchaseOrderModel po")
    int getTotalPurchaseOrders();
	
	@Query("SELECT NEW com.bootcamp.backIntegrador.DTOs.ProviderPercentageDTO(" +
            "p.provider.provCod as providerCod, p.provider.provCompName AS providerName, p.provider.provLogo AS providerLogo, " +
            "ROUND(COUNT(p) * 100.0 / NULLIF(SUM(COUNT(p)) OVER(), 0),2)) AS percentage " +
            "FROM PurchaseOrderModel p " +
            "GROUP BY p.provider.provId, p.provider.provCompName, p.provider.provLogo ")
    List<ProviderPercentageDTO> getProviderPercentages();
}
