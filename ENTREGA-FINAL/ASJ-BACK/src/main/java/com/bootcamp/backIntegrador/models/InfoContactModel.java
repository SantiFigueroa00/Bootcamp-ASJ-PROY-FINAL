package com.bootcamp.backIntegrador.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "Info_Contacts")
public class InfoContactModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cont_id", unique = true, nullable = false)
    private int contId;

    @Column(name = "cont_name", nullable = false)
    private String contName;
    
    @Column(name = "cont_phone", nullable = false)
    private String contPhone;
    
    @Column(name = "cont_email", nullable = false)
    private String contEmail;
    
    @Column(name = "cont_role", nullable = false)
    private String contRole;

	public InfoContactModel() {
		super();
	}

	public String getContName() {
		return contName;
	}

	public void setContName(String contName) {
		this.contName = contName;
	}

	public String getContPhone() {
		return contPhone;
	}

	public void setContPhone(String contPhone) {
		this.contPhone = contPhone;
	}

	public String getContEmail() {
		return contEmail;
	}

	public void setContEmail(String contEmail) {
		this.contEmail = contEmail;
	}

	public String getContRole() {
		return contRole;
	}

	public void setContRole(String contRole) {
		this.contRole = contRole;
	}

	public int getContId() {
		return contId;
	}

	
    
    
}


