package com.example.codeclan.Crimewatch_backend.controller;


import com.example.codeclan.Crimewatch_backend.models.SafetyTip;
import com.example.codeclan.Crimewatch_backend.repositories.SafetyTipRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.swing.text.html.parser.Entity;
import java.util.List;

@RestController
public class SafetyController {

    @Autowired
    SafetyTipRepository safetyTipRepository;

    @GetMapping(value="/safetyTips")
    public ResponseEntity<List<SafetyTip>> getAllSafetyTips(){
        return new ResponseEntity<>(safetyTipRepository.findAll(), HttpStatus.OK);
    }


}
