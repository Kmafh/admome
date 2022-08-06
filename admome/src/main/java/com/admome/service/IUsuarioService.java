package com.admome.service;

import java.util.List;

import com.admome.model.Usuario;

public interface IUsuarioService {

	public List<Usuario> findAll();
	
	public Usuario findById(Long id);
	
	public Usuario save(Usuario usuario);
	
	public void delette(Long id);
}
