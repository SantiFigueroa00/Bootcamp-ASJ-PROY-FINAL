package com.bootcamp.backIntegrador.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootcamp.backIntegrador.models.DetailOrderModel;
import com.bootcamp.backIntegrador.repositories.DetailOrderRepository;


@Service
public class DetailOrderService {

	@Autowired
	DetailOrderRepository detailOrderRepository;
	
//	@Autowired
	
	
	
	public List<DetailOrderModel> getDetails() {
		return detailOrderRepository.findAll();
	}
	
	public Optional<DetailOrderModel> getDetailById(int id) {
		return detailOrderRepository.findById(id);
	}

	public String createDetail(DetailOrderModel newDetail) {
		detailOrderRepository.save(newDetail);
		return "Created Success";
	}
	

	public String updateDetail(int id, DetailOrderModel editDetail) {
		DetailOrderModel det = detailOrderRepository.findById(id).get();
		if (det!=null) {
			det.setDetailPriceProd(editDetail.getDetailPriceProd());
			det.setDetailQuantity(editDetail.getDetailQuantity());
			det.setDetailSubtotal(editDetail.getDetailSubtotal());
			det.setProduct(editDetail.getProduct());
			detailOrderRepository.save(det);
			return "Update Success";
		}
		return "error";
	}
	

}
