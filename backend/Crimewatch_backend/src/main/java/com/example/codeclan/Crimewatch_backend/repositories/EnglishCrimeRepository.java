package com.example.codeclan.Crimewatch_backend.repositories;

import com.example.codeclan.Crimewatch_backend.models.EnglishCrime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EnglishCrimeRepository extends JpaRepository< EnglishCrime, Long> {
}
