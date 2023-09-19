package com.kinga.pepa.services;

import com.kinga.pepa.dto.FormationDTO;
import com.kinga.pepa.entity.Company;
import com.kinga.pepa.entity.Formation;
import com.kinga.pepa.repository.CompanyRepository;
import com.kinga.pepa.repository.FormationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.function.Function;

@Service
public class CompanyService {
    @Autowired
    CompanyRepository companyRepository;
    @Autowired
    FormationRepository formationRepository;

    @Deprecated
    public Company getById(Integer integer) {
        return companyRepository.getById(integer);
    }

    public Company getReferenceById(Integer integer) {
        return companyRepository.getReferenceById(integer);
    }

    public <S extends Company> List<S> findAll(Example<S> example) {
        return companyRepository.findAll(example);
    }

    public <S extends Company> List<S> findAll(Example<S> example, Sort sort) {
        return companyRepository.findAll(example, sort);
    }

    public List<Company> findAll() {
        return companyRepository.findAll();
    }

    public List<Company> findAllById(Iterable<Integer> integers) {
        return companyRepository.findAllById(integers);
    }

    public <S extends Company> S save(S entity) {
        return companyRepository.save(entity);
    }

    public Optional<Company> findById(Integer integer) {
        return companyRepository.findById(integer);
    }

    public boolean existsById(Integer integer) {
        return companyRepository.existsById(integer);
    }

    public void deleteById(Integer integer) {
        companyRepository.deleteById(integer);
    }

    public void deleteAll() {
        companyRepository.deleteAll();
    }

    public List<Company> findAll(Sort sort) {
        return companyRepository.findAll(sort);
    }

    public Page<Company> findAll(Pageable pageable) {
        return companyRepository.findAll(pageable);
    }

    public <S extends Company> Optional<S> findOne(Example<S> example) {
        return companyRepository.findOne(example);
    }

    public <S extends Company> Page<S> findAll(Example<S> example, Pageable pageable) {
        return companyRepository.findAll(example, pageable);
    }

    public <S extends Company> long count(Example<S> example) {
        return companyRepository.count(example);
    }

    public <S extends Company> boolean exists(Example<S> example) {
        return companyRepository.exists(example);
    }

    public <S extends Company, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction) {
        return companyRepository.findBy(example, queryFunction);
    }
    public List<FormationDTO> getFormations(Integer idCompany){
        List<Formation> formations = formationRepository.findAll();
        List<FormationDTO> formationDTOS = new ArrayList<>();
        formations.forEach((e)->{
            FormationDTO f = new FormationDTO(e);
            f.setDesabled(true);
            formationDTOS.add(f);
        });
        // TODO Identifer les formations desactivé et activée pour chaque company
        return formationDTOS;
    }
}
