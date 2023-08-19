package com.kinga.pepa.repository;

import com.kinga.pepa.entity.UserApp;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserApp,Integer> {
}
