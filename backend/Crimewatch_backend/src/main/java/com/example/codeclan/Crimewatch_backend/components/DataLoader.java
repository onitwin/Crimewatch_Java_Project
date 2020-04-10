package com.example.codeclan.Crimewatch_backend.components;

import com.example.codeclan.Crimewatch_backend.models.Crime;
import com.example.codeclan.Crimewatch_backend.repositories.CrimeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;



@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    CrimeRepository crimeRepository;

    public DataLoader(){

    }

    @Override
    public void run(ApplicationArguments args){

        Crime scotland = new Crime("Scotland", 8008, 13547, 9675, 13777, 3532 );
        crimeRepository.save(scotland);
        Crime aberdeenCity = new Crime("Aberdeen City", 425, 750, 455, 457, 115);
        crimeRepository.save(aberdeenCity);
        Crime aberdeenshire = new Crime("Aberdeenshire", 191, 495, 210, 266, 17);
        crimeRepository.save(aberdeenshire);
        Crime angus = new Crime("Angus", 116, 364, 94, 160, 15);
        crimeRepository.save(angus);

        Crime argylAndBute = new Crime("Argyll And Bute", 83, 174, 63, 141, 13 );
        crimeRepository.save(argylAndBute);
        Crime edinburgh= new Crime("City Of Edinburgh", 878, 1291, 1440, 2631, 926);
        crimeRepository.save(edinburgh);
        Crime clackmannanshire = new Crime("Clackmannanshire", 107, 122, 87, 95, 16);
        crimeRepository.save(clackmannanshire);
        Crime dumfriesAndGalloway = new Crime("Dumfries And Galloway", 160, 532, 298, 270, 77);
        crimeRepository.save(dumfriesAndGalloway);
        Crime dundee = new Crime("Dundee City", 333, 521, 358, 470, 139 );
        crimeRepository.save(dundee);
        Crime eastAyrshire = new Crime("East Ayrshire", 136, 217, 165, 254, 50);
        crimeRepository.save(eastAyrshire);
        Crime eastDunbartonshire = new Crime("East Dunbartonshire", 101, 174, 112, 234, 27);
        crimeRepository.save(eastDunbartonshire);
        Crime eastLothian = new Crime("East Lothian", 90, 203, 134, 287, 67);
        crimeRepository.save(eastLothian);
        Crime eastRenfrewshire = new Crime("East Renfrewshire", 63, 146, 88, 177, 23 );
        crimeRepository.save(eastRenfrewshire);
        Crime falkirk = new Crime("Falkirk", 214, 429, 238, 320, 66);
        crimeRepository.save(falkirk);
        Crime fife = new Crime("Fife", 508, 944, 603, 755, 113);
        crimeRepository.save(fife);
        Crime glasgowCity = new Crime("Glasgow City", 1702, 2220, 1972, 2389, 737);
        crimeRepository.save(glasgowCity);
        Crime highland = new Crime("Highland", 218, 595, 260, 230, 43);
        crimeRepository.save(highland);
        Crime inverclyde = new Crime("Inverclyde", 131, 163, 108, 160, 31 );
        crimeRepository.save(inverclyde);
        Crime midlothian = new Crime("Midlothian", 104, 202, 157, 353, 40);
        crimeRepository.save(midlothian);
        Crime moray = new Crime("Moray", 96, 245, 71, 103, 9);
        crimeRepository.save(moray);
        Crime naheileananSiar = new Crime("Na h-Eileanan Siar", 10, 43, 18, 10, 0);
        crimeRepository.save(naheileananSiar);
        Crime northAyrshire = new Crime("North Ayrshire", 177, 299, 168, 332, 54 );
        crimeRepository.save(northAyrshire);
        Crime northLanarkshire = new Crime("North Lanarkshire", 492, 638, 661, 923, 311);
        crimeRepository.save(northLanarkshire);
        Crime orkneyIslands = new Crime("Orkney Islands", 15, 42, 14, 7, 1);
        crimeRepository.save(orkneyIslands);
            Crime perthAndKinross = new Crime("Perth and Kinross", 163, 336, 130, 224, 30);
        crimeRepository.save(perthAndKinross);
        Crime  renfrewshire = new Crime("Renfrewshire", 297, 466, 294, 369, 87 );
        crimeRepository.save(renfrewshire);
        Crime scottishBorders = new Crime("Scottish Borders", 106, 188, 132, 256, 53);
        crimeRepository.save(scottishBorders);
        Crime shetlandIslands = new Crime("Shetland Islands", 16, 48, 20, 13, 2);
        crimeRepository.save(shetlandIslands);
        Crime southAyrshire = new Crime("South Ayrshire", 146, 229, 166, 278, 34);
        crimeRepository.save(southAyrshire);
        Crime southLanarkshire = new Crime("South Lanarkshire", 428, 655, 616, 743, 252 );
        crimeRepository.save(southLanarkshire);
        Crime stirling = new Crime("Stirling", 110, 750, 145, 216, 22);
        crimeRepository.save(stirling);
        Crime westDunbartonshire = new Crime("West Dunbartonshire", 163, 171, 127, 143, 51);
        crimeRepository.save(westDunbartonshire);
        Crime westLothian = new Crime("West Lothian", 229, 387, 271, 511, 111);
        crimeRepository.save(westLothian);


    }
}



