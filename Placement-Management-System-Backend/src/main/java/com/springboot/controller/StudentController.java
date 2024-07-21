package com.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import com.springboot.payloads.StudentDto;
import com.springboot.services.StudentService;
import java.io.IOException;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/students")
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping("/addstudent")
    public ResponseEntity<String> addStudent(
            @RequestParam("firstName") String firstName,
            @RequestParam("lastName") String lastName,
            @RequestParam("email") String email,
            @RequestParam("jobRole") String jobRole,
            @RequestParam("tenthPercentage") double tenthPercentage,
            @RequestParam("twelfthPercentage") double twelfthPercentage,
            @RequestParam("address") String address,
            @RequestParam("city") String city,
            @RequestParam("pincode") String pincode,
            @RequestParam("resume") MultipartFile resume) {

        try {
            // Create a StudentDto object with all the form fields and resume file
            StudentDto studentDto = new StudentDto();
            studentDto.setFirstName(firstName);
            studentDto.setLastName(lastName);
            studentDto.setEmail(email);
            studentDto.setJobRole(jobRole);
            studentDto.setTenthPercentage(tenthPercentage);
            studentDto.setTwelfthPercentage(twelfthPercentage);
            studentDto.setAddress(address);
            studentDto.setCity(city);
            studentDto.setPincode(pincode);
            studentDto.setResume(resume.getBytes());

            // Call the service method to add the student
            String studentName = studentService.addStudent(studentDto);

            // Return the response
            return ResponseEntity.ok(studentName);
        } catch (IOException e) {
            // Handle the exception if file processing fails
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error uploading resume");
        }
    }

    @GetMapping("/")
    public ResponseEntity<List<StudentDto>> getAllStudents() {
        List<StudentDto> students = studentService.getAllStudents();
        return ResponseEntity.ok(students);
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateStudent(@PathVariable int id, @RequestBody StudentDto studentDto) {
        String studentName = studentService.updateStudent(id, studentDto);
        return ResponseEntity.ok(studentName);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteStudent(@PathVariable int id) {
        studentService.deleteStudent(id);
        return ResponseEntity.noContent().build();
    }
}






//package com.springboot.controller;
//
//import java.io.IOException;
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.springboot.payloads.StudentDto;
//import com.springboot.services.StudentService;
//
//@CrossOrigin(origins = "http://localhost:3000")
//@RestController
//@RequestMapping("/api/students")
//public class StudentController {
//
//    @Autowired
//    private StudentService studentService;
//
//    @PostMapping("/addstudent")
//    public ResponseEntity<String> addStudent(@RequestBody StudentDto studentDto) throws IOException {
//
//        // Call the service method to add the student
//		String studentName = studentService.addStudent(studentDto);
//
//		// Return the response
//		return ResponseEntity.ok(studentName);
//    }
//
//    @GetMapping("/")
//    public ResponseEntity<List<StudentDto>> getAllStudents() {
//        List<StudentDto> students = studentService.getAllStudents();
//        return ResponseEntity.ok(students);
//    }
//
//    @PutMapping("/{id}")
//    public ResponseEntity<String> updateStudent(@PathVariable int id, @RequestBody StudentDto studentDto) {
//        String studentName = studentService.updateStudent(id, studentDto);
//        return ResponseEntity.ok(studentName);
//    }
//
//    @DeleteMapping("/{id}")
//    public ResponseEntity<Void> deleteStudent(@PathVariable int id) {
//        studentService.deleteStudent(id);
//        return ResponseEntity.noContent().build();
//    }
//}
//
