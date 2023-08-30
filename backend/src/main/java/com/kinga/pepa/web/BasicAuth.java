package com.kinga.pepa.web;

import com.kinga.pepa.config.*;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class BasicAuth {
    @GetMapping(path = "/login")
    @ResponseBody
    @Autorities.Loged
    public Map<String,String> basicauth() {
        Map<String, String> response = new HashMap<>();
        response.put("result","Success");
        return response;
}
}
