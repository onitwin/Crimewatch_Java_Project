package com.example.codeclan.Crimewatch_backend.components;

import com.example.codeclan.Crimewatch_backend.models.Crime;
import com.example.codeclan.Crimewatch_backend.repositories.CrimeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    CrimeRepository crimeRepository;

    public DataLoader(){

    }

    @Override
    public void run(ApplicationArguments args){

        Crime crime1 = new Crime("Clackmannanshire", )
        String featureName, int NumberOfNonSexualCrimesOfViolence, int NumberOfSexualCrimes, int NumberOfFrauds, int NumberOfHouseBreakIns, int NumberOfMotorThefts
    }
}



