package com.springboot.services;

import java.util.List;

import com.springboot.payloads.DriveRecordDto;

public interface DriveRecordService {
	
    String addDrive(DriveRecordDto driveRecordDto);
    List<DriveRecordDto> getAllDrive();
    String updateDrive(int id, DriveRecordDto driveRecordDto);
    void deleteDrive(int id);
}
