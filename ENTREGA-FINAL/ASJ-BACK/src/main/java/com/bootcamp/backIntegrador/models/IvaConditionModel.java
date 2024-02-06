package com.bootcamp.backIntegrador.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;


@Entity
@Table(name = "IVA_Conditions")
public class IvaConditionModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "iva_id", unique = true, nullable = false)
    private int ivaId;

    @NotBlank(message="Must not be Blank or Null")
    @Column(name = "iva_cond", nullable = false)
    private String ivaCond;

	public IvaConditionModel() {
		super();
	}

	public String getIvaCond() {
		return ivaCond;
	}

	public void setIvaCond(String ivaCond) {
		this.ivaCond = ivaCond;
	}

	public int getIvaId() {
		return ivaId;
	}
    
    
}
