package com.kinga.pepa.dto;

import com.kinga.pepa.entity.Formation;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class FormationDTO {
    Integer id;
    String name;
    boolean desabled= false;
    String description;

    public FormationDTO(Formation formation){
        setId(formation.getId());
        setName(formation.getName());
        setDescription(formation.getDescriptin());
    }
}
