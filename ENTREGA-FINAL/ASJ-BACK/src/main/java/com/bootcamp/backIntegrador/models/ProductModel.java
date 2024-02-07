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
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.time.LocalDateTime;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;


@Entity
@Table(name = "Products")
public class ProductModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "prod_id", unique = true, nullable = false)
    private int prodId;

    @Column(name = "prod_cod", nullable = false)
    private String prodCod;
    
    @NotBlank(message="Must not be Blank or Null")
    @Size(min = 4, message = "Must be at least 4 characters long.")
    @Column(name = "prod_Name", nullable = false)
    private String prodName;
    
    @NotNull(message="Must not be Blank or Null")
    @Min(value = 1, message = "Must be greater than 1 and less than 10000000")
    @Max(value = 10000000, message = "Must be greater than 1 and less than 10000000")
    @Column(name = "prod_price", nullable = false)
    private Double prodPrice;
    
    @NotBlank(message="Must not be Blank or Null")
    @Size(min = 4,max = 100, message = "Between 4 to 100 characters allowed.")
    @Column(name = "prod_description", nullable = false)
    private String prodDescription; 
    
    @NotNull(message = "Must not be Null")
    @Column(name = "prod_isDeleted", nullable = false)
    private boolean prodIsDeleted;
    
    @NotNull(message = "Must not be Null")
    @ManyToOne
    @JoinColumn(name = "id_prov", nullable = false)
    private ProviderModel provider;
    
    @NotNull(message = "Must not be Null")
    @ManyToOne
    @JoinColumn(name = "id_cat", nullable = false)
    private CategoryModel category;
    
    @JsonManagedReference
    @OneToMany(mappedBy = "product")
	private List<ProductImageModel> images;
    
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

	

	public boolean isProdIsDeleted() {
		return prodIsDeleted;
	}

	public void setProdIsDeleted(boolean prodIsDeleted) {
		this.prodIsDeleted = prodIsDeleted;
	}

	public List<ProductImageModel> getImages() { 
		return images;
	}

	public void setImages(List<ProductImageModel> images) {
		this.images = images;
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
