package in.purabtech.angular.springbootcrudapi.repository;

import in.purabtech.angular.springbootcrudapi.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Integer> {
}
