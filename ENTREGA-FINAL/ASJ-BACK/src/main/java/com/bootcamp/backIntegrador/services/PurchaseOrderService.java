package com.bootcamp.backIntegrador.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootcamp.backIntegrador.models.PurchaseOrderModel;
import com.bootcamp.backIntegrador.repositories.PurchaseOrderRepository;


@Service
public class PurchaseOrderService {

	@Autowired
	PurchaseOrderRepository purchaseOrderRepository;
	
//	@Autowired
	
	
	
	public List<PurchaseOrderModel> getOrders() {
		return purchaseOrderRepository.findAll();
	}
	
	public Optional<PurchaseOrderModel> getOrderById(int id) {
		return purchaseOrderRepository.findById(id);
	}

	public String createOrder(PurchaseOrderModel newOrder) {
		purchaseOrderRepository.save(newOrder);
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
