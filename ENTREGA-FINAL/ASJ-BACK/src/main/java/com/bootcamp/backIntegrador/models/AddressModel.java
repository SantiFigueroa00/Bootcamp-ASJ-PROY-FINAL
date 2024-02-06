package com.bootcamp.backIntegrador.models;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "Addresses")
public class AddressModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ad_id", unique = true, nullable = false)
    private int adId;

    @NotBlank(message="Must not be Blank or Null")
    @Size(min = 4,max = 50, message = "Between 4 to 50 characters allowed.")
    @Column(name = "ad_street", nullable = false)
    private String adStreet;

    @NotBlank(message="Must not be Blank or Null")
    @Pattern(regexp = "^[a-zA-Z0-9]{4,5}$", message = "Between 4 to 5 characters allowed.")
    @Column(name = "ad_zip", nullable = false)
    private String adZip;

    @NotNull(message="Must not be Blank or Null")
    @Min(value = 1, message = "Must be greater than 1 and less than 10000")
    @Max(value = 10000, message = "Must be greater than 1 and less than 10000")
    @Column(name = "ad_number", nullable = false)
    private int adNumber;

    @ManyToOne
    @JoinColumn(name = "id_loc", nullable = false)
    private LocalityModel locality;

    public AddressModel() {
        super();
    }

    public String getAdStreet() {
        return adStreet;
    }

    public void setAdStreet(String adStreet) {
        this.adStreet = adStreet;
    }

    public String getAdZip() {
        return adZip;
    }

    public void setAdZip(String adZip) {
        this.adZip = adZip;
    }

    public int getAdNumber() {
        return adNumber;
    }

    public void setAdNumber(int adNumber) {
        this.adNumber = adNumber;
    }


	public LocalityModel getLocality() {
		return locality;
	}

	public void setLocality(LocalityModel locality) {
		this.locality = locality;
	}

	public int getAdId() {
        return adId;
    }
}
