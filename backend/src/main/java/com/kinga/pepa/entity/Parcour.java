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
public class Parcour {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id ;
    @ManyToMany
    private List<Formation> formations;
    @ManyToOne
    private UserApp userApp;
    @ManyToOne
    private UserApp responsable;
    @ManyToOne
    private Company company;
    private Double durree;
    private String unitiDurre ;
    private Double prix;
    private String description ;


}
