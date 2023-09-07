package com.kinga.pepa.web;

import com.kinga.pepa.config.*;
import com.kinga.pepa.entity.UserApp;
import com.kinga.pepa.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class BasicAuth {
    @Autowired
    UserService userService;
    @GetMapping(path = "/login")
    @ResponseBody
    @Autorities.Loged
    public Map<String,String> basicauth() {
        Map<String, String> response = new HashMap<>();
        response.put("result","Success");
        return response;
}
    @RequestMapping(value = "/username", method = RequestMethod.GET)
    @ResponseBody
    public UserApp currentUserName() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && authentication.isAuthenticated()) {
            String  username = authentication.getName();
            return userService.findByUsernamOrContactOrCinOrEmail(username);
        } else {
            return null;
        }
    }
    @RequestMapping(value = "/autorities", method = RequestMethod.GET)
    @ResponseBody
    public Set<String> getAutotities() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && authentication.isAuthenticated()) {
            String  username = authentication.getName();
            return userService.getAutorities(username);
        }
        return new HashSet<>();
    }


}
