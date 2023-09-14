package com.kinga.pepa.repository;

import com.kinga.pepa.entity.UserApp;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.security.core.userdetails.User;

import java.util.List;

public interface UserRepository extends JpaRepository<UserApp,String> {
    UserApp findByUsername(String argument);
    UserApp findByEmail(String email);
    UserApp findByContact(String contact);
    UserApp findByCin(String cin);
    @Query("SELECT DISTINCT u FROM Inscription i " +
            "JOIN i.company c " +
            "JOIN i.userApp u " +
            "WHERE c.id = :idCompany")
    List<UserApp> findDistinctByInscriptionCompany_Id(Integer idCompany);
    @Query("SELECT DISTINCT u FROM UserApp u " +
            "JOIN u.parcours parcours " +
            "JOIN parcours.formation formation " +
            "JOIN formation.company company " +
            "WHERE company.id = :idCompany")
    List<UserApp> findDistinctByParcoursCompany(Integer idCompany);

}
