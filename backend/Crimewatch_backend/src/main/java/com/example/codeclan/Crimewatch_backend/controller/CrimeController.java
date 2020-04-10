package com.example.codeclan.Crimewatch_backend.controller;


import com.example.codeclan.Crimewatch_backend.models.Crime;
import com.example.codeclan.Crimewatch_backend.repositories.CrimeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CrimeController {

    @Autowired
    CrimeRepository crimeRepository;

    @GetMapping(value = "crimes")
    public ResponseEntity<List<Crime>> getAllCrimes(){
        return new ResponseEntity<>(crimeRepository.findAll(), HttpStatus.OK);
    }
}
