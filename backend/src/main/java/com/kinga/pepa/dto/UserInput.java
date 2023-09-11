package com.kinga.pepa.dto;

import com.kinga.pepa.entity.UserApp;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@ToString
@Data
public class UserInput  {
    private String id;
    private String firstname;
    private String lastname;
    private String contact;
    private String email;
    private String adress;
    private String cin;
    private Integer idCompany;
    private String userResponsable ;

    @Override
    public UserApp clone() {
        return new UserApp(this.getId(),this.getFirstname(),this.getLastname(),this.getContact(),this.getEmail(),this.getAdress(),this.getCin());
    }
}
