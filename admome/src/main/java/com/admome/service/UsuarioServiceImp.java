package com.admome.service;
import java.util.List;
import java.util.stream.Collectors;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import com.admome.dao.IUsuarioDao;
import com.admome.model.Usuario;

@Service
public class UsuarioServiceImp implements UserDetailsService{

	private Logger logger = LoggerFactory.getLogger(UsuarioServiceImp.class);
	
	
	@Autowired
	private IUsuarioDao usuarioDao;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Usuario user = usuarioDao.findByUsername(username);
		if(user==null)
		{
			logger.error("Error en login: No existe el usuario en el sistema"+username+".");
			throw new UsernameNotFoundException("Error en login: No existe el usuario en el sistema"+username+".");
		}
		List<GrantedAuthority> authorities = user.getRoles()
				.stream().map(role -> new SimpleGrantedAuthority(role.getNombre()))
				.peek(authority -> logger.info("Role: "+ authority.getAuthority()))
				.collect(Collectors.toList());
		return new User(user.getNombre(),user.getPassword(),user.getEnable(),true,true,true,authorities);
	}

}
