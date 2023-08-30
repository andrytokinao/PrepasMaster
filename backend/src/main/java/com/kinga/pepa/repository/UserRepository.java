package com.kinga.pepa.repository;

import com.kinga.pepa.entity.UserApp;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.User;

import java.util.List;

public interface UserRepository extends JpaRepository<UserApp,String> {
    UserApp findByUsername(String argument);
    UserApp findByEmail(String email);
    UserApp findByContact(String contact);
    UserApp findByCin(String cin);

}
