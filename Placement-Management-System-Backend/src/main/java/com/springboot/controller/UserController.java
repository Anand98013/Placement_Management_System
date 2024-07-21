package com.springboot.controller;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.payloads.UserDto;
import com.springboot.services.UserServices;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @Autowired
    private UserServices userServices;
    
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody UserDto userDto) {
        UserDto authenticatedUserDto = userServices.authenticateUser(userDto.getEmail(), userDto.getPassword());
        if (authenticatedUserDto != null) {
            return ResponseEntity.ok(authenticatedUserDto);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
        }
    }
    
    @PostMapping("/") // Change the value to "/"
    public ResponseEntity<UserDto> createUser(@RequestBody UserDto userDto){
        UserDto createuserDto = this.userServices.createUser(userDto);
        return new ResponseEntity<>(createuserDto, HttpStatus.CREATED);
    }
    
    @PutMapping("/{userId}")
    public ResponseEntity<UserDto> updateEntity(@RequestBody UserDto userDto, @PathVariable("userId") Integer uid){
        UserDto updateduser = this.userServices.updateUser(userDto, uid);
        return ResponseEntity.ok(updateduser);
    }
    
    @DeleteMapping("/{userId}")
    public ResponseEntity<?> deleteUser(@PathVariable("userId") Integer id){
        this.userServices.deleteUser(id);
        return new ResponseEntity<Object>(Map.of("message","User deleted successfully"), HttpStatus.OK);
    }
    
    @GetMapping("/")
    public ResponseEntity<List<UserDto>> getAllUsers() {
        List<UserDto> userDtos = this.userServices.getAllUsers().stream()
                                              .map(user -> this.userServices.getUserById(user.getId()))
                                              .collect(Collectors.toList());
        return ResponseEntity.ok(userDtos);
    }

    
}
