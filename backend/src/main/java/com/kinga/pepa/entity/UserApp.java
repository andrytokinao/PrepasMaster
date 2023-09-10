package com.kinga.pepa.entity;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;

import java.util.*;

import jakarta.persistence.*;
@Data
@NoArgsConstructor
@Entity
public class UserApp {
    private static final Logger logger = LoggerFactory.getLogger(UserApp.class);
    @Id
    private String id;
    @NonNull
    private String username;
    private String password;
    private String firstname;
    private String lastname;
    private String contact;
    private String email;
    private String adress;
    private String cin;
    private String roles;
    private String pass;
    @OneToMany(mappedBy = "userApp")
    private List<Poste> postes;

    public Set<String> getRolesToList() {
        return (StringUtils.isEmpty(roles) ? new HashSet<>() : new HashSet<String>(Arrays.asList(roles.split(" , "))));
    }

    public String addRolles(List<String> roles) {
        ArrayList<String> rolesExist = (StringUtils.isEmpty(this.roles) ? new ArrayList<>() : new ArrayList<String>(Arrays.asList(this.roles.split(" , "))));
        rolesExist.addAll(roles);
        this.roles = String.join(",", roles);
        return this.roles;
    }
    public String addRolles(String role) {

        ArrayList<String> rolesExist = (StringUtils.isEmpty(this.roles) ? new ArrayList<>() : new ArrayList<String>(Arrays.asList(this.roles.split(" , "))));
        rolesExist.add(role);
        this.roles = String.join(",", rolesExist);
        logger.info("Adding roles "+roles);
        return this.roles;
    }
}
