package com.kinga.pepa.repository;

import com.kinga.pepa.entity.Poste;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PosteRepository extends JpaRepository<Poste,Integer> {
   public List<Poste> findByCompany_Id(Integer companyId);
   public List<Poste> findByUserApp_Id(String userId);

}
