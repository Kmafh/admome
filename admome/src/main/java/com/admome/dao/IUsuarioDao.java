package com.admome.dao;

import org.springframework.data.repository.CrudRepository;

import com.admome.model.Usuario;

public interface IUsuarioDao extends CrudRepository<Usuario,Long>{

	//Utilizando finByYsername directamente haceos consulta SQL Select
	public Usuario findByUsername(String username);
	
}
