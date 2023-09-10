package com.kinga.pepa.dto;

import com.kinga.pepa.entity.UserApp;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserAppDto extends UserApp {
    private String id;
    private String firstname;
    private String lastname;
    private String contact;
    private String email;
    private String adress;
    private String cin;
    private Integer idCompany;
    private String userResponsable ;

}
