package com.bootcamp.backIntegrador.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import jakarta.validation.Valid;
import jakarta.validation.constraints.AssertFalse;
import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

import java.time.LocalDateTime;


@Entity
@Table(name = "Providers")
public class ProviderModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "prov_id", unique = true, nullable = false)
    private int provId;

    @NotBlank(message="Must not be Blank or Null")
    @Size(min = 4, message = "Must be at least 4 characters long.")
    @Column(name = "prov_cod", unique = true, nullable = false)
    private String provCod;
    
    @NotBlank(message="Must not be Blank or Null")
    @Size(min = 4, message = "Must be at least 4 characters long.")
    @Column(name = "prov_compName", nullable = false)
    private String provCompName;
    
    @NotBlank(message="Must not be Blank or Null")
    @Pattern(regexp = "^(http|https):\\/\\/[^ \"]+$",message = "Invalid Web Site format")
    @Column(name = "prov_webSite", nullable = false)
    private String provWebSite;
    
    @NotBlank(message="Must not be Blank or Null")
    @Email(message = "Invalid Email format")
    @Column(name = "prov_email", nullable = false)
    private String provEmail;
    
    @NotBlank(message="Must not be Blank or Null")
    @Size(max = 15, message = "Maximum 15 characters allowed.")
    @Column(name = "prov_phone", nullable = false)
    private String provPhone;
    
    @NotBlank(message="Must not be Blank or Null")
    @Pattern(regexp = "^https:\\/\\/.*\\.(png|jpg|jpeg|gif|webp)$",message = "Invalid URL format")
    @Column(name = "prov_logo", nullable = false)
    private String provLogo;
    
    @NotBlank(message="Must not be Blank or Null")
    @Pattern(regexp = "^\\d{2}-\\d{8}-\\d{1}$",message = "Invalid CUIT format")
    @Column(name = "prov_cuit", nullable = false)
    private String provCuit;
    
    @AssertFalse(message = "Must be false")
    @Column(name = "prov_isDeleted", nullable = false)
    private boolean provIsDeleted;
    
	@Valid
	@NotNull(message="Must not be Null")
    @OneToOne
    @JoinColumn(name = "id_cont", nullable = false)
    private InfoContactModel infoContact;
    
	@Valid
    @NotNull(message="Must not be Null")
    @ManyToOne
    @JoinColumn(name = "id_item", nullable = false)
    private ItemModel item;
    
	@Valid
    @NotNull(message="Must not be Null")
    @ManyToOne
    @JoinColumn(name = "id_iva", nullable = false)
    private IvaConditionModel ivaCondition;
    
	@Valid
    @NotNull(message="Must not be Null")
    @OneToOne
    @JoinColumn(name = "id_ad", nullable = false)
    private AddressModel address;
    
    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;
    
    @Column(name = "update_at", nullable = false)
    private LocalDateTime updateAt;

    
   
    public ProviderModel() {
		super();
	}

    
    
	public String getProvCod() {
		return provCod;
	}



	public void setProvCod(String provCod) {
		this.provCod = provCod;
	}



	public String getProvCompName() {
		return provCompName;
	}



	public void setProvCompName(String provCompName) {
		this.provCompName = provCompName;
	}



	public String getProvWebSite() {
		return provWebSite;
	}



	public void setProvWebSite(String provWebSite) {
		this.provWebSite = provWebSite;
	}



	public String getProvEmail() {
		return provEmail;
	}



	public void setProvEmail(String provEmail) {
		this.provEmail = provEmail;
	}



	public String getProvPhone() {
		return provPhone;
	}



	public void setProvPhone(String provPhone) {
		this.provPhone = provPhone;
	}



	public String getProvLogo() {
		return provLogo;
	}



	public void setProvLogo(String provLogo) {
		this.provLogo = provLogo;
	}



	public String getProvCuit() {
		return provCuit;
	}



	public void setProvCuit(String provCuit) {
		this.provCuit = provCuit;
	}



	public boolean isProvIsDeleted() {
		return provIsDeleted;
	}



	public void setProvIsDeleted(boolean provIsDeleted) {
		this.provIsDeleted = provIsDeleted;
	}



	public InfoContactModel getInfoContact() {
		return infoContact;
	}



	public void setInfoContact(InfoContactModel infoContact) {
		this.infoContact = infoContact;
	}



	public ItemModel getItem() {
		return item;
	}



	public void setItem(ItemModel item) {
		this.item = item;
	}



	public IvaConditionModel getIvaCondition() {
		return ivaCondition;
	}



	public void setIvaCondition(IvaConditionModel ivaCondition) {
		this.ivaCondition = ivaCondition;
	}



	public AddressModel getAddress() {
		return address;
	}



	public void setAddress(AddressModel address) {
		this.address = address;
	}



	public LocalDateTime getUpdateAt() {
		return updateAt;
	}



	public void setUpdateAt(LocalDateTime updateAt) {
		this.updateAt = updateAt;
	}



	public int getProvId() {
		return provId;
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
