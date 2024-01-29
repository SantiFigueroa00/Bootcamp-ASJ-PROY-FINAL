package com.bootcamp.backIntegrador.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Detail_Orders")
public class DetailOrderModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "detail_id", unique = true, nullable = false)
    private int detailId;

    @Column(name = "detail_quantity", nullable = false)
    private int detailQuantity;
    
    @Column(name = "detail_priceProd", nullable = false)
    private Double detailPriceProd;
    
    @Column(name = "detail_subtotal", nullable = false)
    private Double detailSubtotal;
    
    
    @ManyToOne
    @JoinColumn(name = "id_prod", nullable = false)
    private ProductModel product;
    
    @ManyToOne
    @JoinColumn(name = "id_order", nullable = false)
    private PurchaseOrderModel order;

	public DetailOrderModel() {
		super();
	}

	public int getDetailQuantity() {
		return detailQuantity;
	}

	public void setDetailQuantity(int detailQuantity) {
		this.detailQuantity = detailQuantity;
	}

	public Double getDetailPriceProd() {
		return detailPriceProd;
	}

	public void setDetailPriceProd(Double detailPriceProd) {
		this.detailPriceProd = detailPriceProd;
	}

	public Double getDetailSubtotal() {
		return detailSubtotal;
	}

	public void setDetailSubtotal(Double detailSubtotal) {
		this.detailSubtotal = detailSubtotal;
	}

	public ProductModel getProduct() {
		return product;
	}

	public void setProduct(ProductModel product) {
		this.product = product;
	}

	public PurchaseOrderModel getOrder() {
		return order;
	}

	public void setOrder(PurchaseOrderModel order) {
		this.order = order;
	}

	public int getDetailId() {
		return detailId;
	}
    
   

}
