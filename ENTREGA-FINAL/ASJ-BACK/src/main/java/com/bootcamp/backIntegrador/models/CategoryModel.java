package com.bootcamp.backIntegrador.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import java.time.LocalDateTime;

@Entity
@Table(name = "Categories")
public class CategoryModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cat_id", unique = true, nullable = false)
    private int catId;

    @Column(name = "cat_name", nullable = false)
    private String catName;
    
    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;
    
    @Column(name = "update_at", nullable = false)
    private LocalDateTime updateAt;
    
    @Column(name = "cat_IsDeleted", nullable = false)
    private boolean catIsDeleted;

    public CategoryModel() {
		super();
	} 

	public boolean isCatIsDeleted() {
		return catIsDeleted;
	}



	public void setCatIsDeleted(boolean catIsDeleted) {
		this.catIsDeleted = catIsDeleted;
	}




	public String getCatName() {
		return catName;
	}



	public void setCatName(String catName) {
		this.catName = catName;
	}



	public LocalDateTime getUpdateAt() {
		return updateAt;
	}



	public void setUpdateAt(LocalDateTime updateAt) {
		this.updateAt = updateAt;
	}



	public int getCatId() {
		return catId;
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
