package com.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.springboot.payloads.DriveRecordDto;
import com.springboot.services.DriveRecordService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/drives")
public class DriveRecordContrroller {

    @Autowired
    private DriveRecordService driveRecordService;

    @PostMapping("/add")
    public ResponseEntity<String> addDrive(@RequestBody DriveRecordDto driveRecordDto) {
        String studentName = driveRecordService.addDrive(driveRecordDto);
        return ResponseEntity.ok(studentName);
    }

    
    @GetMapping("/")
    public ResponseEntity<List<DriveRecordDto>> getAllDrive() {
        List<DriveRecordDto> drives = driveRecordService.getAllDrive();
        return ResponseEntity.ok(drives);
    }
    
    @PutMapping("/{id}") 
    public ResponseEntity<String> updateDrive(@PathVariable int id, @RequestBody DriveRecordDto driveRecordDto) {
        String studentName = driveRecordService.updateDrive(id, driveRecordDto);
        return ResponseEntity.ok(studentName);
    }

    @DeleteMapping("/{id}") 
    public ResponseEntity<Void> deleteDrive(@PathVariable int id) {
        driveRecordService.deleteDrive(id);
        return ResponseEntity.noContent().build();
    }
}
