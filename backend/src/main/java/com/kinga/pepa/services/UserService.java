package com.kinga.pepa.services;

import com.kinga.pepa.entity.UserApp;
import com.kinga.pepa.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;


@Service
public class UserService {
    @Autowired
    UserRepository userRepository ;

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

    public void deleteAllByIdInBatch(Iterable<Integer> integers) {
        userRepository.deleteAllByIdInBatch(integers);
    }

    public void deleteAllInBatch() {
        userRepository.deleteAllInBatch();
    }

    @Deprecated
    public UserApp getOne(Integer integer) {
        return userRepository.getOne(integer);
    }

    @Deprecated
    public UserApp getById(Integer integer) {
        return userRepository.getById(integer);
    }

    public UserApp getReferenceById(Integer integer) {
        return userRepository.getReferenceById(integer);
    }

    public <S extends UserApp> List<S> findAll(Example<S> example) {
        return userRepository.findAll(example);
    }

    public <S extends UserApp> List<S> findAll(Example<S> example, Sort sort) {
        return userRepository.findAll(example, sort);
    }

    public <S extends UserApp> List<S> saveAll(Iterable<S> entities) {
        return userRepository.saveAll(entities);
    }

    public List<UserApp> findAll() {
        return userRepository.findAll();
    }

    public List<UserApp> findAllById(Iterable<Integer> integers) {
        return userRepository.findAllById(integers);
    }

    public <S extends UserApp> S save(S entity) {
        return userRepository.save(entity);
    }

    public Optional<UserApp> findById(Integer integer) {
        return userRepository.findById(integer);
    }

    public boolean existsById(Integer integer) {
        return userRepository.existsById(integer);
    }

    public long count() {
        return userRepository.count();
    }

    public void deleteById(Integer integer) {
        userRepository.deleteById(integer);
    }

    public void delete(UserApp entity) {
        userRepository.delete(entity);
    }

    public void deleteAllById(Iterable<? extends Integer> integers) {
        userRepository.deleteAllById(integers);
    }

    public void deleteAll(Iterable<? extends UserApp> entities) {
        userRepository.deleteAll(entities);
    }

    public void deleteAll() {
        userRepository.deleteAll();
    }

    public List<UserApp> findAll(Sort sort) {
        return userRepository.findAll(sort);
    }

    public Page<UserApp> findAll(Pageable pageable) {
        return userRepository.findAll(pageable);
    }

    public <S extends UserApp> Optional<S> findOne(Example<S> example) {
        return userRepository.findOne(example);
    }

    public <S extends UserApp> Page<S> findAll(Example<S> example, Pageable pageable) {
        return userRepository.findAll(example, pageable);
    }

    public <S extends UserApp> long count(Example<S> example) {
        return userRepository.count(example);
    }

    public <S extends UserApp> boolean exists(Example<S> example) {
        return userRepository.exists(example);
    }

    public <S extends UserApp, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction) {
        return userRepository.findBy(example, queryFunction);
    }
}
