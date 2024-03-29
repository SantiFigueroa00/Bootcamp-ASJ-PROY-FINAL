package com.bootcamp.backIntegrador.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;


@Entity
@Table(name = "Localities")
public class LocalityModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "loc_id", unique = true, nullable = false)
    private int locId;

    @NotBlank(message="Must not be Blank or Null")
    @Size(max = 50, message = "Maximum 50 characters allowed.")
    @Column(name = "loc_name", nullable = false)
    private String locName;
    
    @ManyToOne
    @JoinColumn(name = "id_pro", nullable = false)
    private ProvinceModel province;

	public LocalityModel() {
		super();
	}

	public String getLocName() {
		return locName;
	}

	public void setLocName(String locName) {
		this.locName = locName;
	}


	public ProvinceModel getProvince() {
		return province;
	}

	public void setProvince(ProvinceModel province) {
		this.province = province;
	}

	public int getLocId() {
		return locId;
	}

	
    
}