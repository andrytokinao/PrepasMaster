package com.kinga.pepa.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ParcoursInput {
    Integer id;
    List<Integer> formationIds;
    String userId;
    Integer companyId;
    String responsableId;
    Double durree;
    String unitiDurre;
    Double prix;
    String description;
    public String validator(){
        String v ="";
        if(CollectionUtils.isEmpty(this.getFormationIds()))
            v+="Formation is not valid";
        if(StringUtils.isEmpty(userId))
            v+="\n User is not valid";
        if(StringUtils.isEmpty(responsableId))
            v+="\n Responsable is not valid";
        if(StringUtils.isEmpty(responsableId))
            v+="\n company is not valid";
        return v;
    }

}
