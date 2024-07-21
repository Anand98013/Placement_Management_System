package com.springboot.services;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.entities.Company;
import com.springboot.payloads.CompanyDto;
import com.springboot.repojectries.CompanyRepo;

@Service
public class CompanyImp implements CompanyService {

    @Autowired
    private CompanyRepo companyRepo;

    @Override
    public String addCompany(CompanyDto companyDto) {
        Company company = new Company(
                companyDto.getId(),
                companyDto.getCompanyName(),
                companyDto.getProfile(),
                companyDto.getLocation(),
                companyDto.getNumberOfCandidates(),
                companyDto.getPackage1()
        );

        companyRepo.save(company);
        return company.getCompanyName();
    }

    @Override
    public List<CompanyDto> getAllCompanies() {
        List<Company> companies = companyRepo.findAll();
        List<CompanyDto> companyDtos = new ArrayList<>();
        for (Company company : companies) {
            CompanyDto companyDto = new CompanyDto(
                    company.getId(),
                    company.getCompanyName(),
                    company.getProfile(),
                    company.getLocation(),
                    company.getNumberOfCandidates(),
                    company.getPackage1()
            );
            companyDtos.add(companyDto);
        }
        return companyDtos;
    }
    
    @Override
    public String updateCompany(int id, CompanyDto companyDto) {
        Optional<Company> optionalCompany = companyRepo.findById(id);
        if (optionalCompany.isPresent()) {
            Company existingCompany = optionalCompany.get();
            existingCompany.setCompanyName(companyDto.getCompanyName());
            existingCompany.setProfile(companyDto.getProfile());
            existingCompany.setLocation(companyDto.getLocation());
            existingCompany.setNumberOfCandidates(companyDto.getNumberOfCandidates());
            existingCompany.setPackage1(companyDto.getPackage1());
            
            companyRepo.save(existingCompany);
            
            return existingCompany.getCompanyName(); 
        } else {
            return "Company not found";
        }
    }

    @Override
    public void deleteCompany(int id) {
        companyRepo.deleteById(id);
    }
   
}
