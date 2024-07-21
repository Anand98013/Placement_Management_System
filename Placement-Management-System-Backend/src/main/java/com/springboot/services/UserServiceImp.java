package com.springboot.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.springboot.exceptions.ResourceNotFoundException;
import com.springboot.entities.User;
import com.springboot.payloads.UserDto;
import com.springboot.repojectries.User_repo;

@Service
public class UserServiceImp implements UserServices {
    
    @Autowired   
    private User_repo user_repo;
    
    @Autowired
    private PasswordEncoder passwordEncoder; // Inject PasswordEncoder

    @Override
    public UserDto createUser(UserDto userDto) {
        User user = dtoToUser(userDto);
        User savedUser  = user_repo.save(user);
        return userToDto(savedUser);
    }

    @Override
    public UserDto updateUser(UserDto userDto, Integer userId) {
        User user = user_repo.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User", "Id", userId));
        user.setName(userDto.getName());
        user.setEmail(userDto.getEmail());
        user.setPassword(passwordEncoder.encode(userDto.getPassword())); // Encode password
        User updatedUser = user_repo.save(user);
        return userToDto(updatedUser);
    }


    @Override
    public UserDto getUserById(Integer userId) {
        User user = user_repo.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User", "Id", userId));
        return userToDto(user);
    }

    @Override
    public List<UserDto> getAllUsers() {
        List<User> users = user_repo.findAll();
        return users.stream().map(this::userToDto).collect(Collectors.toList());
    }

    @Override
    public void deleteUser(Integer userId) {
        User user = user_repo.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User", "Id", userId));
        user_repo.delete(user);
    }
    
    public User dtoToUser(UserDto userDto) {
        User user = new User(0, null, null, null);
        user.setEmail(userDto.getEmail());
        user.setName(userDto.getName());
        user.setPassword(passwordEncoder.encode(userDto.getPassword())); // Encode password
        return user;
    }

    public UserDto userToDto(User user) {
        UserDto userDto = new UserDto(0, null, null, null);
        userDto.setId(user.getId());
        userDto.setEmail(user.getEmail());
        userDto.setName(user.getName());
        return userDto;
    }

    public UserDto authenticateUser(String email, String password) {
        System.out.println("Attempting to authenticate user with email: " + email);

        try {
            User user = user_repo.findByEmail(email);

            if (user != null) {
                System.out.println("User found in database: " + user);

                if (passwordEncoder.matches(password, user.getPassword())) {
                    System.out.println("Password matches. User authenticated successfully.");
                    return userToDto(user);
                } else {
                    System.out.println("Password does not match.");
                }
            } else {
                System.out.println("User not found in database.");
            }
        } catch (Exception e) {
            System.out.println("Exception occurred during user authentication: " + e.getMessage());
            e.printStackTrace();
        }
        
        return null;
    }


}
