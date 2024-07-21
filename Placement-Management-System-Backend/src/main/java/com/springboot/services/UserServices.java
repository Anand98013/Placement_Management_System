package com.springboot.services;

import java.util.List;

import com.springboot.payloads.UserDto;

public interface UserServices {
	UserDto createUser(UserDto user);
	UserDto updateUser(UserDto user, Integer userId);
	UserDto getUserById(Integer userId);
	List<UserDto> getAllUsers();
	void deleteUser(Integer userId);
	
	UserDto authenticateUser(String email, String password);
}
