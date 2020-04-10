package com.example.codeclan.Crimewatch_backend.models;


import javax.persistence.*;

@Entity
@Table(name = "crimes")
public class Crime {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "featureName")
    private String featureName;
    @Column(name = "NumberOfNonSexualCrimesOfViolence")
    private int NumberOfNonSexualCrimesOfViolence;
    @Column(name = "NumberOfSexualCrimes")
    private int NumberOfSexualCrimes;
    @Column(name = "NumberOfFrauds")
    private int NumberOfFrauds;
    @Column(name = "NumberOfHouseBreakIns")
    private int NumberOfHouseBreakIns;
    @Column(name = "NumberOfMotorThefts")
    private int NumberOfMotorThefts;


   public Crime(String featureName, int NumberOfNonSexualCrimesOfViolence, int NumberOfSexualCrimes, int NumberOfFrauds, int NumberOfHouseBreakIns, int NumberOfMotorThefts ){
       this.featureName = featureName;
       this.NumberOfNonSexualCrimesOfViolence = NumberOfNonSexualCrimesOfViolence;
       this.NumberOfSexualCrimes = NumberOfSexualCrimes;
       this.NumberOfFrauds = NumberOfFrauds;
       this.NumberOfHouseBreakIns = NumberOfHouseBreakIns;
       this.NumberOfMotorThefts = NumberOfMotorThefts;
   }

   public Crime(){

   }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFeatureName() {
        return featureName;
    }

    public void setFeatureName(String featureName) {
        this.featureName = featureName;
    }

    public int getNumberOfNonSexualCrimesOfViolence() {
        return NumberOfNonSexualCrimesOfViolence;
    }

    public void setNumberOfNonSexualCrimesOfViolence(int numberOfNonSexualCrimesOfViolence) {
        NumberOfNonSexualCrimesOfViolence = numberOfNonSexualCrimesOfViolence;
    }

    public int getNumberOfSexualCrimes() {
        return NumberOfSexualCrimes;
    }

    public void setNumberOfSexualCrimes(int numberOfSexualCrimes) {
        NumberOfSexualCrimes = numberOfSexualCrimes;
    }

    public int getNumberOfFrauds() {
        return NumberOfFrauds;
    }

    public void setNumberOfFrauds(int numberOfFrauds) {
        NumberOfFrauds = numberOfFrauds;
    }

    public int getNumberOfHouseBreakIns() {
        return NumberOfHouseBreakIns;
    }

    public void setNumberOfHouseBreakIns(int numberOfHouseBreakIns) {
        NumberOfHouseBreakIns = numberOfHouseBreakIns;
    }

    public int getNumberOfMotorThefts() {
        return NumberOfMotorThefts;
    }

    public void setNumberOfMotorThefts(int numberOfMotorThefts) {
        NumberOfMotorThefts = numberOfMotorThefts;
    }
}


