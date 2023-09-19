package com.kinga.pepa.web;

import com.kinga.pepa.dto.FormationDTO;
import com.kinga.pepa.dto.ParcoursInput;
import com.kinga.pepa.dto.PosteDto;
import com.kinga.pepa.dto.UserInput;
import com.kinga.pepa.entity.Company;
import com.kinga.pepa.entity.Parcour;
import com.kinga.pepa.entity.Poste;
import com.kinga.pepa.services.CompanyService;
import com.kinga.pepa.services.CustomUserDetailsService;
import com.kinga.pepa.services.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import com.kinga.pepa.entity.UserApp;

import java.util.List;

import static com.kinga.pepa.utils.KingaUtils.separatePhoneNumber;

@Controller
public class GQController {
    private static final Logger logger = LoggerFactory.getLogger(CustomUserDetailsService.class);
    @Autowired
    UserService userService;
    @Autowired
    CompanyService companyService;
    @QueryMapping
    public  String addFormation(String userInscrit , List<String> formations){
        return "response";
    }

    @QueryMapping

    public UserApp getUser(@Argument String username){
        return userService.findByUsernamOrContactOrCinOrEmail(username);
    }
    @QueryMapping
   // @Autorities.CanViewList
    public List<UserApp> getStudents(){
        return userService.findAll();
    }

    @QueryMapping
    public List<Company> getCompanies(){
        return companyService.findAll();
    }

    @MutationMapping
    public UserApp saveUser(@Argument UserApp userApp){
        UserApp user = userService.save(userApp);
        user.setContact(separatePhoneNumber(user.getContact()));
        return user;
    }
    @MutationMapping
    public UserApp addUser(@Argument UserInput user){
        return userService.addUser(user);
    }
    @MutationMapping
    public List<Parcour> addParcours(@Argument ParcoursInput parcours){
        return userService.addParcours(parcours);
    }
    @MutationMapping
    public List<Poste> addPosteUser(@Argument PosteDto poste){
        logger.info("Affectation  "+poste.getUsername()+ " "+poste.getPoste() +" in company#"+poste.getCompanyId());
        return userService.addNewPoste(poste);
    }
    @MutationMapping
    public List<Poste> addPosteCompany(@Argument PosteDto poste){
        logger.info("Affectation  "+poste.getUsername()+ " "+poste.getPoste() +" in company#"+poste.getCompanyId());
        userService.addNewPoste(poste);
        return userService.findPosteByCompany(poste.getCompanyId());

    }
    @QueryMapping
    public List<Poste> getPosteByUser(@Argument String username){
        logger.info(" Finding poste by username : "+username);
        return userService.findPosteByUsername(username);
    }
    @QueryMapping
    public List<Poste> getPosteCompany(@Argument Integer idCompany){
        logger.info(" Finding poste by company : "+idCompany);
        return userService.findPosteByCompany(idCompany);
    }
    @MutationMapping
    public Company saveCompany(@Argument Company company){
        logger.info("Saviny company "+company.getName());
        company = companyService.save(company);
        return companyService.getById(company.getId());
    }
    @QueryMapping
    public Company getCompanyById(@Argument Integer idCompany){
        logger.info("Geting company# "+idCompany);
        return companyService.getById(idCompany);
    }
    @QueryMapping
    public List<UserApp> findDistinctByParcoursCompany(@Argument  Integer idCompany) {
        return userService.findDistinctByParcoursCompany(idCompany);
    }
    @QueryMapping
    public List<UserApp> findDistinctByInscriptionCompany_Id(@Argument  Integer idCompany) {
        return userService.findDistinctByInscriptionCompany_Id(idCompany);
    }
    @QueryMapping
    public List<FormationDTO> getFormations(@Argument Integer idCompany){
        return companyService.getFormations(idCompany);
    }
    @GetMapping({"/", "/compte/**", "/etudiants/**","/comptable/**","/admin/**"})
    public String publicRedirection(){
        logger.info("loading page frontend  ");
        return "/index.html";
    }




}
