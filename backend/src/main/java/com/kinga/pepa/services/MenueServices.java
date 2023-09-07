package com.kinga.pepa.services;
import com.kinga.pepa.dto.AutoritiesDto;
import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@GraphQLApi
@Service
public class MenueServices {
    private static final Logger logger = LoggerFactory.getLogger(MenueServices.class);
   @Autowired
   UserDetailsService userDetailsService;
    @GraphQLQuery(name = "getAutorities")
    public List<AutoritiesDto> getAutorities(){
        logger.info("------LOGED");
        List<AutoritiesDto> autorities = new ArrayList<>();
        autorities.add(new AutoritiesDto(("LOGED")));
        return autorities;
    }
}
