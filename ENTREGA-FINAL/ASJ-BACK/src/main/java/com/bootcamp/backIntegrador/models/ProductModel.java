package com.bootcamp.backIntegrador.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import java.time.LocalDateTime;

@Entity
@Table(name = "Products")
public class ProductModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "prod_id", unique = true, nullable = false)
    private int prodId;

    @Column(name = "prod_cod", unique = true, nullable = false)
    private String prodCod;
    
    @Column(name = "prod_Name", nullable = false)
    private String prodName;
    
    @Column(name = "prod_price", nullable = false)
    private Double prodPrice;
    
    @Column(name = "prod_description", nullable = false)
    private String prodDescription; 
    
    @ManyToOne
    @JoinColumn(name = "id_prov", nullable = false)
    private ProviderModel provider;
    
    @ManyToOne
    @JoinColumn(name = "id_cat", nullable = false)
    private CategoryModel category;
    
    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;
    
    @Column(name = "update_at", nullable = false)
    private LocalDateTime updateAt;

	public ProductModel() {
		super();
	}
	
	public String getProdCod() {
		return prodCod;
	}



	public void setProdCod(String prodCod) {
		this.prodCod = prodCod;
	}



	public String getProdName() {
		return prodName;
	}



	public void setProdName(String prodName) {
		this.prodName = prodName;
	}



	public Double getProdPrice() {
		return prodPrice;
	}



	public void setProdPrice(Double prodPrice) {
		this.prodPrice = prodPrice;
	}



	public String getProdDescription() {
		return prodDescription;
	}



	public void setProdDescription(String prodDescription) {
		this.prodDescription = prodDescription;
	}



	public ProviderModel getProvider() {
		return provider;
	}

	public void setProvider(ProviderModel provider) {
		this.provider = provider;
	}

	public CategoryModel getCategory() {
		return category;
	}

	public void setCategory(CategoryModel category) {
		this.category = category;
	}

	public LocalDateTime getUpdateAt() {
		return updateAt;
	}



	public void setUpdateAt(LocalDateTime updateAt) {
		this.updateAt = updateAt;
	}



	public int getProdId() {
		return prodId;
	}



	public LocalDateTime getCreatedAt() {
		return createdAt;
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
