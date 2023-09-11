package com.kinga.pepa.repository;

import com.kinga.pepa.entity.Inscription;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InscriptionRepository extends JpaRepository<Inscription,Integer> {
    public List<Inscription> findByCompany_Id(Integer idCompany);

}
