package com.admome.controller;

import java.io.IOException;
import java.util.Date;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.server.Session;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.admome.model.Usuario;
import com.admome.service.IUsuarioService;


@CrossOrigin(origins= {"http://localhost:4200"})
@RestController
@RequestMapping("/api")
public class UsuarioRestController {

	@Autowired
	private IUsuarioService  usuarioService;
	
	@GetMapping("/usuarios")
	public List<Usuario> index(){
		return usuarioService.findAll();
	}
	@PostMapping("/login")
	public Usuario login(@RequestBody Usuario usuario, HttpServletRequest request,HttpServletResponse response) throws ServletException, IOException{
		List<Usuario> userList=usuarioService.findAll();
		Usuario userLogin=new Usuario();
		System.out.println("Nombre: "+usuario.getNombre());
		for(Usuario temp : userList)
		{
			if(temp.getNombre().equals(usuario.getNombre()))
			{
				if(temp.getPassword().equals(usuario.getPassword())) {
					HttpSession session= request.getSession();
					userLogin=temp;
					session.setAttribute("usuario", userLogin);
					//request.getRequestDispatcher("/consumo").forward(request, response);
					return usuarioService.findById(userLogin.getId());
					
				}
				
			}
		}
		return userLogin;
	}
	@GetMapping("/usuarios/{id}")
	@ResponseStatus(HttpStatus.OK)
	public Usuario show(@PathVariable Long id) {
		return usuarioService.findById(id);
	}
	
	@PostMapping("/usuarios")
	@ResponseStatus(HttpStatus.CREATED)
	public Usuario create(@RequestBody Usuario usuario) {
		usuario.setCreateAt(new Date());
		return usuarioService.save(usuario);
	}
	
	@PutMapping("/usuarios/{id}")
	@ResponseStatus(HttpStatus.CREATED)
	public Usuario update(@RequestBody Usuario usuario, @PathVariable Long id) {
		
		Usuario usuarioActual = usuarioService.findById(id);
		
		usuarioActual.setNombre(usuario.getNombre());
		usuarioActual.setPassword(usuario.getPassword());
		usuarioActual.setEmail(usuario.getEmail());
		
		return usuarioService.save(usuarioActual);
	}
	
	@DeleteMapping("/usuarios/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delette(@PathVariable Long id) {
		usuarioService.delette(id);
	}
	
}
