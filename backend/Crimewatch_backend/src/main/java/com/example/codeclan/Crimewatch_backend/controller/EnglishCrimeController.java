package com.example.codeclan.Crimewatch_backend.controller;

import com.example.codeclan.Crimewatch_backend.models.Crime;
import com.example.codeclan.Crimewatch_backend.models.EnglishCrime;
import com.example.codeclan.Crimewatch_backend.repositories.CrimeRepository;
import com.example.codeclan.Crimewatch_backend.repositories.EnglishCrimeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class EnglishCrimeController {

    @Autowired
    EnglishCrimeRepository englishCrimeRepository;

    @GetMapping(value = "englishCrimes")
    public ResponseEntity<List<EnglishCrime>> getAllEnglishCrimes(){
        return new ResponseEntity<>(englishCrimeRepository.findAll(), HttpStatus.OK);
    }
}
