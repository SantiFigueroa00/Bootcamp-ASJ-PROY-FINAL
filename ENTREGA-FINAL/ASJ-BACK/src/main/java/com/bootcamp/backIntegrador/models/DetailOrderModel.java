package com.bootcamp.backIntegrador.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "Detail_Orders")
//@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "detailId")
public class DetailOrderModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "detail_id", unique = true, nullable = false)
    private int detailId;

    @NotNull(message="Must not be Blank or Null")
    @Min(value = 1, message = "Must be greater than 1 and less than 1000")
    @Max(value = 1000, message = "Must be greater than 1 and less than 1000")
    @Column(name = "detail_quantity", nullable = false)
    private int detailQuantity;
    
    @NotNull(message="Must not be Blank or Null")
    @Column(name = "detail_priceProd", nullable = false)
    private Double detailPriceProd;
    
    @NotNull(message="Must not be Blank or Null")
    @Column(name = "detail_subtotal", nullable = false)
    private Double detailSubtotal;
    
    @NotNull(message="Must not be Blank or Null")
    @ManyToOne
    @JoinColumn(name = "id_prod", nullable = false)
    private ProductModel product;
    
    @NotNull(message="Must not be Blank or Null")
    @JsonBackReference
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
