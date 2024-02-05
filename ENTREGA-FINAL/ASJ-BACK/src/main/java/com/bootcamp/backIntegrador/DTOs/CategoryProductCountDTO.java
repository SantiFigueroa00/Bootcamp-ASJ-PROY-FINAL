package com.bootcamp.backIntegrador.DTOs;

public class CategoryProductCountDTO {
	
	private String categoryName;
    private Long productCount;
    
    
	public CategoryProductCountDTO() {
		super();
	}
	public CategoryProductCountDTO(String categoryName, Long productCount) {
		super();
		this.categoryName = categoryName;
		this.productCount = productCount;
	}
	
	public String getCategoryName() {
		return categoryName;
	}
	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}
	public Long getProductCount() {
		return productCount;
	}
	public void setProductCount(Long productCount) {
		this.productCount = productCount;
	}
    
    
}
