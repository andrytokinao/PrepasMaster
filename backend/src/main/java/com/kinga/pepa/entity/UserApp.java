package com.kinga.pepa.entity;

import jakarta.persistence.*;
import lombok.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;

import java.util.*;

import jakarta.persistence.*;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class UserApp implements Cloneable{
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
    @OneToOne(mappedBy = "userApp")
    private Inscription inscription;
    @OneToMany(mappedBy = "userApp")
    private List<Poste> postes;
    @OneToMany
    private List<Parcour> parcours;

    public UserApp(String id, String firstname, String lastname, String contact, String email, String adress, String cin) {
        this.setId(id);
        this.setFirstname(firstname);
        this.setLastname(lastname);
        this.setContact(contact);
        this.setAdress(adress);
        this.setCin(cin);
        this.setEmail(email);
    }

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
    @Override
    public UserApp clone() {
        try {
            UserApp clone = (UserApp) super.clone();
            // TODO: copy mutable state here, so the clone can't change the internals of the original
            return clone;
        } catch (CloneNotSupportedException e) {
            throw new AssertionError();
        }
    }
}
