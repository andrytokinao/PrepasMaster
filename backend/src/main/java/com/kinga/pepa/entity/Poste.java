package com.kinga.pepa.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Poste {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Date debut;
    private Date fin;
    private String description;
    @NotNull
    private String poste;
    @ManyToOne
    private Company company;
    @ManyToOne
    private UserApp userApp;
}
