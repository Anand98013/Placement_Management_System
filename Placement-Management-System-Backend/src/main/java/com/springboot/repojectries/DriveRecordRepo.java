package com.springboot.repojectries;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springboot.entities.DriveRecord;

@Repository
public interface DriveRecordRepo extends JpaRepository<DriveRecord, Integer> {
    // Additional methods if needed
}
