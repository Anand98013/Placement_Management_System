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

import com.springboot.payloads.CompanyDto;
import com.springboot.services.CompanyService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/companys")
public class CompanyController {

    @Autowired
    private CompanyService companyService;

    @PostMapping("/addcompany")
    public String addCompany(@RequestBody CompanyDto companyDto) {
        String companyName = companyService.addCompany(companyDto);
        return companyName;
    }
    
    @GetMapping("/")
    public ResponseEntity<List<CompanyDto>> getAllCompanies() {
        List<CompanyDto> companies = companyService.getAllCompanies();
        return ResponseEntity.ok(companies);
    }
    
    
    @PutMapping("/{id}") 
    public ResponseEntity<String> updateCompany(@PathVariable int id, @RequestBody CompanyDto companyDto) {
        String companyName = companyService.updateCompany(id, companyDto);
        return ResponseEntity.ok(companyName);
    }

    @DeleteMapping("/{id}") 
    public ResponseEntity<Void> deleteCompany(@PathVariable int id) {
        companyService.deleteCompany(id);
        return ResponseEntity.noContent().build();
    }
}
