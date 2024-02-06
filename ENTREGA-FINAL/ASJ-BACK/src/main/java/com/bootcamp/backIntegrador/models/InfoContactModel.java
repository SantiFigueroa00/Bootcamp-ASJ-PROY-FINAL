package com.bootcamp.backIntegrador.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;


@Entity
@Table(name = "Info_Contacts")
public class InfoContactModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cont_id", unique = true, nullable = false)
    private int contId;

    @NotBlank(message="Must not be Blank or Null")
    @Size(max = 50,min = 4, message = "Between 4 to 50 characters allowed." )
    @Column(name = "cont_name", nullable = false)
    private String contName;
    
    @NotBlank(message="Must not be Blank or Null")
    @Size(max = 15, message = "Maximum 15 characters allowed.")
    @Column(name = "cont_phone", nullable = false)
    private String contPhone;
    
    @NotBlank(message="Must not be Blank or Null")
    @Email(message = "Invalid Email format")
    @Column(name = "cont_email", nullable = false)
    private String contEmail;
    
    @NotBlank(message="Must not be Blank or Null")
    @Size(max = 30, message = "Maximum 30 characters allowed.")
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


