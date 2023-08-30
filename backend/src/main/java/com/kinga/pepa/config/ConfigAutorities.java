package com.kinga.pepa.config;

import com.kinga.pepa.services.CustomUserDetailsService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.CollectionUtils;

import java.util.*;

import static com.kinga.pepa.config.Permission.*;
import static com.kinga.pepa.config.Roles.*;

public class ConfigAutorities {
    private static final Logger logger = LoggerFactory.getLogger(ConfigAutorities.class);
    private static Map<String, List<String>> roleToAutorities = new HashMap<>();

    private static void loadConfiguration(){
        roleToAutorities.put(
                ROLE_SYS_ADMIN, Arrays.asList(
                        CAN_VIEW_LIST,
                        LOGED,CAN_ROLE_VIEW_COMPANY,
                        CAN_ADD_COMPANY,
                        CAN_EDIT_COMPANY,
                        CAN_AFFECT_ROLE));
        roleToAutorities.put(
                ROLE_ADMIN,
                Arrays.asList(
                        CAN_VIEW_LIST,
                        LOGED,
                        CAN_ROLE_VIEW_COMPANY,
                        CAN_EDIT_COMPANY,
                        CAN_AFFECT_ROLE));
        roleToAutorities.put(ROLE_RESPONSABLE, Arrays.asList(
                CAN_VIEW_LIST,
                LOGED,
                CAN_ROLE_VIEW_COMPANY,
                CAN_AFFECT_ROLE));
        roleToAutorities.put(
                ROLE_USER,
                Arrays.asList(
                        LOGED,
                        CAN_ROLE_VIEW_COMPANY));
    }
    public static List<String> getAutorities(String role){
        logger.info("Load autorities for role "+role);
        if(CollectionUtils.isEmpty(roleToAutorities)){
            loadConfiguration();
        }

        return roleToAutorities.get(role);
    }
}
