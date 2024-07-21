package com.springboot.repojectries;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.entities.Student;

public interface StudentRepo extends JpaRepository<Student, Integer> {
}
