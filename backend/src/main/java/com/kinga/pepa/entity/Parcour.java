package com.kinga.pepa.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Parcour {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id ;
    @ManyToOne
    private Formation formation;
    @ManyToOne
    private UserApp userApp;
    @ManyToOne
    private UserApp responsable;
    @ManyToOne
    private Company company;
    private int durree;
    private String unitiDurre ;
    private Double prix;
    private String description ;
}
