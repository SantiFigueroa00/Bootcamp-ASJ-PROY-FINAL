package com.bootcamp.backIntegrador.DTOs;

public class ProviderPercentageByProvinceDTO {
	
	private Integer provinciaId;
    private String provinciaNombre;
    private Long cantidadProveedores;
    private Double porcentaje;

    public ProviderPercentageByProvinceDTO(Integer provinciaId, String provinciaNombre, Long cantidadProveedores, Double porcentaje) {
        this.provinciaId = provinciaId;
        this.provinciaNombre = provinciaNombre;
        this.cantidadProveedores = cantidadProveedores;
        this.porcentaje = porcentaje;
    }

	public Integer getProvinciaId() {
		return provinciaId;
	}

	public void setProvinciaId(Integer provinciaId) {
		this.provinciaId = provinciaId;
	}

	public String getProvinciaNombre() {
		return provinciaNombre;
	}

	public void setProvinciaNombre(String provinciaNombre) {
		this.provinciaNombre = provinciaNombre;
	}

	public Long getCantidadProveedores() {
		return cantidadProveedores;
	}

	public void setCantidadProveedores(Long cantidadProveedores) {
		this.cantidadProveedores = cantidadProveedores;
	}

	public Double getPorcentaje() {
		return porcentaje;
	}

	public void setPorcentaje(Double porcentaje) {
		this.porcentaje = porcentaje;
	}
    
    
}
