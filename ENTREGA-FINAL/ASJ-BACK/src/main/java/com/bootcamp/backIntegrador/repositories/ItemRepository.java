package com.bootcamp.backIntegrador.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootcamp.backIntegrador.models.ItemModel;

public interface ItemRepository extends JpaRepository<ItemModel, Integer>{

}
