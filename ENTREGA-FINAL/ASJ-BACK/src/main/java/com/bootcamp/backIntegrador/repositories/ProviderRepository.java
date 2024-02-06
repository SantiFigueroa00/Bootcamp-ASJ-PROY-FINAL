package com.bootcamp.backIntegrador.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bootcamp.backIntegrador.DTOs.ProviderPercentageByProvinceDTO;
import com.bootcamp.backIntegrador.models.ProviderModel;

public interface ProviderRepository extends JpaRepository<ProviderModel, Integer> {
	
	@Query("SELECT COUNT(p) FROM ProviderModel p")
    int getTotalProviders();

	@Query("SELECT new com.bootcamp.backIntegrador.DTOs.ProviderPercentageByProvinceDTO(P.proId, P.proName, COUNT(PR.provId), ROUND(COUNT(PR.provId) * 100.0 / (SELECT COUNT(*) FROM ProviderModel),2)) " +
	           "FROM ProvinceModel P " +
	           "LEFT JOIN LocalityModel L ON P.proId = L.province.proId " +
	           "LEFT JOIN AddressModel A ON L.locId = A.locality.locId " +
	           "LEFT JOIN ProviderModel PR ON A.adId = PR.address.adId " +
	           "GROUP BY P.proId, P.proName ")
	    List<ProviderPercentageByProvinceDTO> getProviderPercentageByProvince();
}
