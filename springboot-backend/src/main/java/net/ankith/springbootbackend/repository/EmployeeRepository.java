package net.ankith.springbootbackend.repository;

import net.ankith.springbootbackend.Model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    // All Crude database methods
}