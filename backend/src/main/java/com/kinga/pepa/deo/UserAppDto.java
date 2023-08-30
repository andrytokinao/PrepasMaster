package com.kinga.pepa.deo;

import com.kinga.pepa.entity.UserApp;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserAppDto extends UserApp {
    private String id;
    private String username;
    private String password;
    private String firstname;
    private String lastname;
    private String contact;
    private String email;
    private String adress;
    private String cin;
    private String roles;
    private String errorMessage ;

}
