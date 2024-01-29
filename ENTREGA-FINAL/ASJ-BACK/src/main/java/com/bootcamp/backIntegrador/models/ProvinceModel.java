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
@Table(name = "Provinces")
public class ProvinceModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "pro_id", unique = true, nullable = false)
    private int proId;

    @Column(name = "pro_name", nullable = false)
    private String proName;
    
    @ManyToOne
    @JoinColumn(name = "id_con", nullable = false)
    private CountryModel country;

	public ProvinceModel() {
		super();
	}

	public String getProName() {
		return proName;
	}

	public void setProName(String proName) {
		this.proName = proName;
	}
	

	public CountryModel getCountry() {
		return country;
	}

	public void setCountry(CountryModel country) {
		this.country = country;
	}

	public int getProId() {
		return proId;
	}
    
}