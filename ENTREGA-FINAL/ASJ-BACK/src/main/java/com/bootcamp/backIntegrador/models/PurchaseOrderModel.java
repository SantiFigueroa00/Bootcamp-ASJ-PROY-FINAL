package com.bootcamp.backIntegrador.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.time.LocalDateTime;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "Purchase_Orders")
//@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "orderId")
public class PurchaseOrderModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_id", unique = true, nullable = false)
    private int orderId;

    @NotBlank(message="Must not be Blank or Null")
    @Size(min = 4, message = "Must be at least 4 characters long.")
    @Column(name = "order_cod", unique = true, nullable = false)
    private String orderCod;
    
    @Column(name = "order_dateE", nullable = false)
    private LocalDateTime orderDateE;
    
    @Column(name = "order_dateR", nullable = false)
    private LocalDateTime orderDateR;
    
    @NotBlank(message="Must not be Blank or Null")
    @Size(min = 5,max = 100, message = "Between 5 to 100 characters allowed.")
    @Column(name = "order_info", nullable = false)
    private String orderInfo; 
    
    @NotNull(message="Must not be Null")
    @Column(name = "order_total", nullable = false)
    private Double orderTotal; 
    
    @NotNull(message = "Must not be Null")
    @Column(name = "order_state", nullable = false)
    private boolean orderState; 
    
    @NotNull(message = "Must not be Null")
    @ManyToOne
    @JoinColumn(name = "id_prov", nullable = false)
    private ProviderModel provider;
    
    
    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;
    
    @Column(name = "update_at", nullable = false)
    private LocalDateTime updateAt;

    @NotNull(message = "Must not be Null")
    @JsonManagedReference
    @OneToMany(mappedBy = "order")
    private List<DetailOrderModel> details;
    

	public PurchaseOrderModel() {
		super();
	}
	
	

	public String getOrderCod() {
		return orderCod;
	}



	public void setOrderCod(String orderCod) {
		this.orderCod = orderCod;
	}



	public LocalDateTime getOrderDateE() {
		return orderDateE;
	}



	public void setOrderDateE(LocalDateTime orderDateE) {
		this.orderDateE = orderDateE;
	}



	public LocalDateTime getOrderDateR() {
		return orderDateR;
	}



	public void setOrderDateR(LocalDateTime orderDateR) {
		this.orderDateR = orderDateR;
	}



	public String getOrderInfo() {
		return orderInfo;
	}



	public void setOrderInfo(String orderInfo) {
		this.orderInfo = orderInfo;
	}



	public Double getOrderTotal() {
		return orderTotal;
	}



	public void setOrderTotal(Double orderTotal) {
		this.orderTotal = orderTotal;
	}



	public boolean isOrderState() {
		return orderState;
	}



	public void setOrderState(boolean orderState) {
		this.orderState = orderState;
	}


	public ProviderModel getProvider() {
		return provider;
	}



	public void setProvider(ProviderModel provider) {
		this.provider = provider;
	}



	public LocalDateTime getUpdateAt() {
		return updateAt;
	}



	public void setUpdateAt(LocalDateTime updateAt) {
		this.updateAt = updateAt;
	}



	public int getOrderId() {
		return orderId;
	}



	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	

	public List<DetailOrderModel> getDetails() {
		return details;
	}



	public void setDetails(List<DetailOrderModel> details) {
		this.details = details;
	}



	@PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updateAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        updateAt = LocalDateTime.now();
    }
}
