package com.springboot.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.entities.DriveRecord;
import com.springboot.payloads.DriveRecordDto;
import com.springboot.repojectries.DriveRecordRepo;

@Service
public class DriveRecordServiceImp implements DriveRecordService {

    @Autowired
    private DriveRecordRepo driveRecordRepo;

    @Override
    public String addDrive(DriveRecordDto driveRecordDto) {
        DriveRecord driveRecord = new DriveRecord(
                driveRecordDto.getId(),
                driveRecordDto.getStudentName(),
                driveRecordDto.getPassingYear(),
                driveRecordDto.getCompanyName(),
                driveRecordDto.getBranch(),
                driveRecordDto.getPackage1()
        );

        driveRecordRepo.save(driveRecord);
        return driveRecord.getStudentName();
    }

    @Override
    public List<DriveRecordDto> getAllDrive() {
        List<DriveRecord> driveRecords = driveRecordRepo.findAll();
        List<DriveRecordDto> driveRecordDtos = new ArrayList<>();
        for (DriveRecord driveRecord : driveRecords) {
            DriveRecordDto driveRecordDto = new DriveRecordDto(
                    driveRecord.getId(),
                    driveRecord.getStudentName(),
                    driveRecord.getPassingYear(),
                    driveRecord.getCompanyName(),
                    driveRecord.getBranch(),
                    driveRecord.getPackage1()
            );
            driveRecordDtos.add(driveRecordDto);
        }
        return driveRecordDtos;
    }
    
    @Override
    public String updateDrive(int id, DriveRecordDto driveRecordDto) {
        Optional<DriveRecord> optionalDriveRecord = driveRecordRepo.findById(id);
        if (optionalDriveRecord.isPresent()) {
            DriveRecord existingDriveRecord = optionalDriveRecord.get();
            existingDriveRecord.setStudentName(driveRecordDto.getStudentName());
            existingDriveRecord.setPassingYear(driveRecordDto.getPassingYear());
            existingDriveRecord.setCompanyName(driveRecordDto.getCompanyName());
            existingDriveRecord.setBranch(driveRecordDto.getBranch());
            existingDriveRecord.setPackage1(driveRecordDto.getPackage1());
            
            driveRecordRepo.save(existingDriveRecord);
            
            return existingDriveRecord.getStudentName(); 
        } else {
            return "Student not found";
        }
    }

    @Override
    public void deleteDrive(int id) {
        driveRecordRepo.deleteById(id);
    }
}
