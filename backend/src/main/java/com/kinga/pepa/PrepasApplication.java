package com.kinga.pepa;

import com.kinga.pepa.entity.UserApp;
import com.kinga.pepa.services.UserService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@SpringBootApplication
public class PrepasApplication {

    public static void main(String[] args) {
        ConfigurableApplicationContext ctx = SpringApplication.run(PrepasApplication.class, args);
        UserService userService = ctx.getBean(UserService.class);
        UserApp userApp = new UserApp();
        userApp.setPass("123");
        userApp.setLastname("Andriamahefasoa");
        userApp.setFirstname("Tokiniaina");
        userApp.setContact("0341981972");
        userApp = userService.save(userApp);

    }

}
