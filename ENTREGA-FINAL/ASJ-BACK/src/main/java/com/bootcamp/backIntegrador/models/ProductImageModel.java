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


@Entity
@Table(name = "Products_Images")
public class ProductImageModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "img_id", unique = true, nullable = false)
    private int imgId;

    @Column(name = "img_url", nullable = false)
    private String imgUrl;
    
    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "id_prod", nullable = false)
    private ProductModel product;

	public ProductImageModel() {
		super();
	}

	public String getImgUrl() {
		return imgUrl;
	}

	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}

	public ProductModel getProduct() {
		return product;
	}

	public void setProduct(ProductModel product) {
		this.product = product;
	}

	public int getImgId() {
		return imgId;
	}

	

	
    
}