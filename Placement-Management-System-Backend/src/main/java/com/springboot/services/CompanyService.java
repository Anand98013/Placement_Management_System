package com.springboot.services;

import java.util.List;

import com.springboot.payloads.CompanyDto;

public interface CompanyService {
	
    String addCompany(CompanyDto companyDto);
    List<CompanyDto> getAllCompanies();
    String updateCompany(int id, CompanyDto companyDto);
    void deleteCompany(int id);
    
    
}
