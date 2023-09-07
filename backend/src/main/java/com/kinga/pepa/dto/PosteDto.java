package com.kinga.pepa.dto;

import com.kinga.pepa.entity.Company;
import com.kinga.pepa.entity.UserApp;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import java.util.Date;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PosteDto {
    private Integer id;
    private Date debut;
    private Date fin;
    private String description;
    private String poste;
    private Integer companyId;
    private String username;

}
