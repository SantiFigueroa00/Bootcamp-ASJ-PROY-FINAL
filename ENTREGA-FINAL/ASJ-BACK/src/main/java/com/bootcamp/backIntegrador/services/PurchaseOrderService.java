package com.bootcamp.backIntegrador.services;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootcamp.backIntegrador.DTOs.ProviderPercentageDTO;
import com.bootcamp.backIntegrador.models.DetailOrderModel;
import com.bootcamp.backIntegrador.models.PurchaseOrderModel;
import com.bootcamp.backIntegrador.repositories.PurchaseOrderRepository;


@Service
public class PurchaseOrderService {

	@Autowired
	PurchaseOrderRepository purchaseOrderRepository;
	
	@Autowired
	DetailOrderService detailOrderService;
	
	
	public List<PurchaseOrderModel> getOrders() {
		return purchaseOrderRepository.findAll();
	}
	
	public Optional<PurchaseOrderModel> getOrderById(int id) {
		return purchaseOrderRepository.findById(id);
	}
	
	public List<PurchaseOrderModel> getOrdersByProvider(int id) {
		return purchaseOrderRepository.findByProvider_ProvId(id);
	}
	
	public List<PurchaseOrderModel> getOrdersActivatedByProvider(int id) {
		return purchaseOrderRepository.findByProvider_ProvIdAndOrderState(id,true);
	}
	
	public List<PurchaseOrderModel> getOrdersCancelledByProvider(int id) {
		return purchaseOrderRepository.findByProvider_ProvIdAndOrderState(id,false);
	}
	
	public Integer getTotalOrders() {
		return purchaseOrderRepository.getTotalPurchaseOrders();
	}
	
	public List<ProviderPercentageDTO> getProviderPercentages() {
		List<ProviderPercentageDTO> providerPercentages = purchaseOrderRepository.getProviderPercentages();

        return providerPercentages.stream()
                .sorted(Comparator.comparing(ProviderPercentageDTO::getPercentage).reversed())
                .limit(4)
                .collect(Collectors.toList());
	}

	public String createOrder(PurchaseOrderModel newOrder) {
		PurchaseOrderModel ord = purchaseOrderRepository.save(newOrder);
		
		for (DetailOrderModel det : newOrder.getDetails()) {
				det.setOrder(ord);
				detailOrderService.createDetail(det);
		}
		return "Created Success";
	}
	

	public String updateOrder(int id, PurchaseOrderModel editOrder) {
		PurchaseOrderModel ord = purchaseOrderRepository.findById(id).get();
		if (ord!=null) {
			ord.setProvider(editOrder.getProvider());
			ord.setOrderDateR(editOrder.getOrderDateR());
			ord.setOrderInfo(editOrder.getOrderInfo());
			ord.setOrderState(editOrder.isOrderState());
			purchaseOrderRepository.save(ord);
			return "Update Success";
		}
		return "error";
	}
	

}
