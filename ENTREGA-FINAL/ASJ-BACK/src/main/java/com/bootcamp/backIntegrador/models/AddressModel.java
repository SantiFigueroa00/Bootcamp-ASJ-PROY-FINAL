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
@Table(name = "Addresses")
public class AddressModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ad_id", unique = true, nullable = false)
    private int adId;

    @Column(name = "ad_street", nullable = false)
    private String adStreet;

    @Column(name = "ad_zip", nullable = false)
    private String adZip;

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
