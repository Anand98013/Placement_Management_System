package com.springboot.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.entities.Student;
import com.springboot.payloads.StudentDto;
import com.springboot.repojectries.StudentRepo;

@Service
public class StudentServiceImp implements StudentService {

    @Autowired
    private StudentRepo studentRepo;

    @Override
    public String addStudent(StudentDto studentDto) {
        Student student = new Student(
                studentDto.getId(),
                studentDto.getFirstName(),
                studentDto.getLastName(),
                studentDto.getEmail(),
                studentDto.getJobRole(),
                studentDto.getTenthPercentage(),
                studentDto.getTwelfthPercentage(),
                studentDto.getAddress(),
                studentDto.getCity(),
                studentDto.getPincode(),
                studentDto.getResume()
        );

        studentRepo.save(student);
        return student.getFirstName(); // return student name as a confirmation
    }

    @Override
    public List<StudentDto> getAllStudents() {
        List<Student> students = studentRepo.findAll();
        List<StudentDto> studentDtos = new ArrayList<>();
        for (Student student : students) {
            StudentDto studentDto = new StudentDto(
                    student.getId(),
                    student.getFirstName(),
                    student.getLastName(),
                    student.getEmail(),
                    student.getJobRole(),
                    student.getTenthPercentage(),
                    student.getTwelfthPercentage(),
                    student.getAddress(),
                    student.getCity(),
                    student.getPincode(),
                    student.getResume()
            );
            studentDtos.add(studentDto);
        }
        return studentDtos;
    }
    
    @Override
    public String updateStudent(int id, StudentDto studentDto) {
        Optional<Student> optionalStudent = studentRepo.findById(id);
        if (optionalStudent.isPresent()) {
            Student existingStudent = optionalStudent.get();
            existingStudent.setFirstName(studentDto.getFirstName());
            existingStudent.setLastName(studentDto.getLastName());
            existingStudent.setEmail(studentDto.getEmail());
            // update other fields as needed
            
            studentRepo.save(existingStudent);
            
            return existingStudent.getFirstName(); // return student name as a confirmation
        } else {
            return "Student not found";
        }
    }

    @Override
    public void deleteStudent(int id) {
        studentRepo.deleteById(id);
    }
}
