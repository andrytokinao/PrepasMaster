package com.kinga.pepa;

import com.kinga.pepa.entity.Company;
import com.kinga.pepa.entity.Formation;
import com.kinga.pepa.entity.UserApp;
import com.kinga.pepa.repository.FormationRepository;
import com.kinga.pepa.services.CompanyService;
import com.kinga.pepa.services.UserService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import java.util.Arrays;

import static com.kinga.pepa.config.Roles.ROLE_RESPONSABLE
        ;
import static com.kinga.pepa.config.Roles.ROLE_SUP_ADMIN;

@SpringBootApplication
public class PrepasApplication {

    public static void main(String[] args) {
        ConfigurableApplicationContext ctx = SpringApplication.run(PrepasApplication.class, args);
        UserService userService = ctx.getBean(UserService.class);
        CompanyService companyService = ctx.getBean(CompanyService.class);
        FormationRepository formationRepository = ctx.getBean(FormationRepository.class);
        UserApp userApp = new UserApp();
        userApp.setPass("123");
        userApp.setLastname("Andriamahefasoa");
        userApp.setFirstname("Tokiniaina");
        userApp.setContact("0341981972");
        userApp.addRolles(Arrays.asList(ROLE_SUP_ADMIN));
        userApp = userService.save(userApp);

        Company company = new Company();
        company.setName("Default Company ");
        company.setSlogan("Slongant ");
        company.setDescription("Init description of company ");
        companyService.save(company);


        for (int i = 1; i < 6; i++) {
            Formation f = new Formation();
            f.setName("Prepa TEST"+i);
            f.setDescriptin("Cours prepa TEST"+i);
            formationRepository.save(f);
        }

    }

}
