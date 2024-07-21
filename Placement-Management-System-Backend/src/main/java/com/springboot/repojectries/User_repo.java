package com.springboot.repojectries;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.entities.User;

public interface User_repo extends JpaRepository<User, Integer>{

	User findByEmail(String email);

}
