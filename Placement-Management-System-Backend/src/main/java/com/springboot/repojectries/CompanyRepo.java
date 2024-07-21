package com.springboot.repojectries;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springboot.entities.Company;

@Repository
public interface CompanyRepo extends JpaRepository<Company, Integer> {
    // Additional methods if needed
}
