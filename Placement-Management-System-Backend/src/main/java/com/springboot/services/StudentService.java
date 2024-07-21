package com.springboot.services;

import java.util.List;

import com.springboot.payloads.StudentDto;

public interface StudentService {

	String addStudent(StudentDto studentDto);

	List<StudentDto> getAllStudents();

	String updateStudent(int id, StudentDto studentDto);

	void deleteStudent(int id);

}
