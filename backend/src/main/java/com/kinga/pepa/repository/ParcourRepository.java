package com.kinga.pepa.repository;

import com.kinga.pepa.entity.Parcour;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ParcourRepository extends JpaRepository<Parcour,Integer> {
    public List<Parcour> findByCompany_Id(Integer idCompany);
    public List<Parcour> findByCompany_IdAndUserApp_Id(Integer idCompany,String idUser);
    public List<Parcour> findByUserApp_Id(String idUser);
}
