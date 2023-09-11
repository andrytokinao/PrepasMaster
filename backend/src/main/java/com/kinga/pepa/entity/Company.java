package com.kinga.pepa.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Company {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String slogan;
    private String description ;
    @OneToMany(mappedBy = "company")
    private List<Inscription> inscriptions;
    @OneToMany(mappedBy = "company")
    private List<Poste> postes;
    @OneToMany
    private List<Parcour> parcours;
    @OneToMany
    private List<Formation> formations;


}
