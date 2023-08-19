package com.kinga.pepa.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@Entity
@Data
@NoArgsConstructor
public class Compte {
    @Id
    private Integer id;
    private Double encaisser;
    private Double toPaye;
    @OneToMany
    private List<Transaction> transactions;
}
