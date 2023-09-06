package com.kinga.pepa.repository;

import com.kinga.pepa.entity.Company;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompanyRepository extends JpaRepository<Company,Integer> {
}
