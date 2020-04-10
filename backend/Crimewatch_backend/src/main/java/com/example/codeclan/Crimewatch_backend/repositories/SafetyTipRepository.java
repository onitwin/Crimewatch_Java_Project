package com.example.codeclan.Crimewatch_backend.repositories;

import com.example.codeclan.Crimewatch_backend.models.SafetyTip;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SafetyTipRepository extends JpaRepository<SafetyTip, Long> {
}
