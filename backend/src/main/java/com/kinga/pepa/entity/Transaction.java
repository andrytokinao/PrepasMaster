package com.kinga.pepa.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer externalAction;
    private String action;
    private Double montant;
    private String description;
    @ManyToOne
    private Compte compte;

}
