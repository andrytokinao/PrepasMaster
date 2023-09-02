package com.kinga.pepa.services;

import com.kinga.pepa.config.ConfigAutorities;
import com.kinga.pepa.deo.UserAppDto;
import com.kinga.pepa.deo.UserDetailsDeto;
import com.kinga.pepa.config.Permission;
import com.kinga.pepa.config.Roles;
import com.kinga.pepa.entity.UserApp;
import com.kinga.pepa.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;

import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

import static com.kinga.pepa.config.Roles.ROLE_USER;
import static com.kinga.pepa.utils.KingaUtils.*;


@Service
public class UserService {
    @Autowired
    UserRepository userRepository;
    private static final Logger logger = LoggerFactory.getLogger(UserService.class);

    public void flush() {
        userRepository.flush();
    }

    public <S extends UserApp> S saveAndFlush(S entity) {
        return userRepository.saveAndFlush(entity);
    }

    public <S extends UserApp> List<S> saveAllAndFlush(Iterable<S> entities) {
        return userRepository.saveAllAndFlush(entities);
    }

    @Deprecated
    public void deleteInBatch(Iterable<UserApp> entities) {
        userRepository.deleteInBatch(entities);
    }

    public void deleteAllInBatch(Iterable<UserApp> entities) {
        userRepository.deleteAllInBatch(entities);
    }


    public void deleteAllInBatch() {
        userRepository.deleteAllInBatch();
    }

    @Deprecated
    public UserApp getOne(String string) {
        return userRepository.getOne(string);
    }

    @Deprecated
    public UserApp getById(String string) {
        return userRepository.getById(string);
    }

    public UserApp getReferenceById(String string) {
        return userRepository.getReferenceById(string);
    }

    public <S extends UserApp> List<S> findAll(Example<S> example) {
        return userRepository.findAll(example);
    }

    public <S extends UserApp> List<S> findAll(Example<S> example, Sort sort) {
        return userRepository.findAll(example, sort);
    }

    public List<UserApp> findAll() {
        return userRepository.findAll();
    }

    public <S extends UserApp> S save(S entity) {
        if (!StringUtils.isEmpty(entity.getUsername())) {
            UserApp userApp = userRepository.findByUsername(entity.getUsername());
            if (userApp != null && (!StringUtils.endsWithIgnoreCase(entity.getId(), userApp.getId())))
                throw new RuntimeException("Usename " + entity.getUsername() + " is alredy in used");
        } else {
            entity.setUsername(generateUsername(entity.getFirstname(), entity.getLastname()));
        }
        if (StringUtils.isEmpty(entity.getContact())) {
            throw new RuntimeException("Contact is requered");
        }
        if (!isValidPhoneNumber(entity.getContact())) {
            throw new RuntimeException("Pleas , make contact valid for " + entity.getContact());
        }
        entity.setContact(cleanPhonNumber(entity.getContact()));

        UserApp userApp = userRepository.findByContact(entity.getContact());
        if (userApp != null && (!StringUtils.endsWithIgnoreCase(entity.getId(), userApp.getId())))
            throw new RuntimeException("Contact " + separatePhoneNumber(entity.getContact()) + " is alredy in used");
        if (!StringUtils.isEmpty(entity.getEmail())) {
            userApp = userRepository.findByContact(entity.getContact().trim());
            if (userApp != null && (!StringUtils.endsWithIgnoreCase(entity.getId(), userApp.getId())))
                throw new RuntimeException("Email  " + entity.getContact() + " is alredy in used");
        }
        if (!StringUtils.isEmpty(entity.getCin())) {
            entity.setCin(entity.getCin().trim());
            userApp = userRepository.findByContact(entity.getCin().trim());
            if (userApp != null)
                throw new RuntimeException("Email  " + entity.getContact() + " is alredy in used");
        }

        if (StringUtils.isEmpty(entity.getId())) {
            String id = UUID.randomUUID().toString().substring(0, 8);
            entity.setId(id);
        }
        if (StringUtils.isEmpty(entity.getRoles())) {
            logger.info("Adding default roles for " + ROLE_USER);
            entity.addRolles(ROLE_USER);
        } else {
            logger.info("Rols existing 0 " + entity.getRoles());
        }
        if (StringUtils.isEmpty(entity.getPassword()) ) {
            if(StringUtils.isEmpty(entity.getPass())) {
                entity.setPass(UUID.randomUUID().toString());
            }
            entity.setPassword(encodePassword(entity.getPass()));
        } else {
            if(! StringUtils.isEmpty(entity.getPass()))  {
              //TODO   Prise en charge le changement de mot de pass
                entity.setPassword(encodePassword(entity.getPass()));
            }
        }
        return userRepository.save(entity);
    }

    public UserApp findByUsernamOrContactOrCinOrEmail(String login) {
        UserApp userApp = null;
        if (isValidPhoneNumber(login)) {
            userApp = userRepository.findByContact(cleanPhonNumber(login));
        }
        if (userApp == null)
            userApp = userRepository.findByUsername(login);
        if (userApp == null)
            userApp = userRepository.findByEmail(login);
        if (userApp == null)
            userApp = userRepository.findByCin(login);
        if (userApp == null) {
            userApp = userRepository.getById(login);
        }
        if (userApp == null)
            return null;
        return userApp;
    }

    public UserDetailsDeto findByUsername(String username) {
        Set<String> permissionNames = new HashSet<>();
        if (StringUtils.isEmpty(username))
            return null;
        UserApp userApp = findByUsernamOrContactOrCinOrEmail(username);
        if (userApp == null)
            return null;
        Set<String> roleApps = userApp.getRolesToList();
        if (CollectionUtils.isEmpty(roleApps))
            return new UserDetailsDeto(userApp.getUsername(), userApp.getPassword(), permissionNames);

        permissionNames = roleApps.stream()
                .flatMap(roleApp -> (ConfigAutorities.getAutorities(roleApp).stream()))
                .collect(Collectors.toSet());
        return new UserDetailsDeto(userApp.getUsername(), userApp.getPassword(), permissionNames);
    }
    public Set<String> getAutorities(String username){
        UserApp userApp = userRepository.findByUsername(username);
        if(userApp == null)
            return new HashSet<>();
        Set<String> roleApps = userApp.getRolesToList();
        if (CollectionUtils.isEmpty(roleApps))
            return new HashSet<>();
        return roleApps.stream()
                .flatMap(roleApp -> (ConfigAutorities.getAutorities(roleApp).stream()))
                .collect(Collectors.toSet());
    }
}
