package com.bootcamp.backIntegrador.DTOs;

public class ProviderPercentageDTO {

    private String providerCod;
    private String providerName;
    private String providerLogo;
    private Double percentage;

    
	public ProviderPercentageDTO() {}

	

	

	public ProviderPercentageDTO(String providerCod, String providerName, String providerLogo, Double percentage) {
		this.providerCod = providerCod;
		this.providerName = providerName;
		this.providerLogo = providerLogo;
		this.percentage = percentage;
	}





	public String getProviderCod() {
		return providerCod;
	}




	public void setProviderId(String providerCod) {
		this.providerCod = providerCod;
	}




	public String getProviderName() {
		return providerName;
	}


	public void setProviderName(String providerName) {
		this.providerName = providerName;
	}


	public String getProviderLogo() {
		return providerLogo;
	}


	public void setProviderLogo(String providerLogo) {
		this.providerLogo = providerLogo;
	}


	public Double getPercentage() {
		return percentage;
	}


	public void setPercentage(Double percentage) {
		this.percentage = percentage;
	}

    

}
