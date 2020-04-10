package com.example.codeclan.Crimewatch_backend.components;

import com.example.codeclan.Crimewatch_backend.models.Crime;
import com.example.codeclan.Crimewatch_backend.models.SafetyTip;
import com.example.codeclan.Crimewatch_backend.repositories.CrimeRepository;
import com.example.codeclan.Crimewatch_backend.repositories.SafetyTipRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;



@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    CrimeRepository crimeRepository;

    @Autowired
    SafetyTipRepository safetyTipRepository;

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

        SafetyTip tip1 = new SafetyTip("Be prepared", "Plan your route in advance. Carry a charged mobile phone and some cash, and tell someone where you’re going.", "");
        safetyTipRepository.save(tip1);

        SafetyTip tip2 = new SafetyTip("Be assertive", "From the moment you step out onto the street in the morning, look assertive and act and walk with confidence. This will always make you appear in control and much less vulnerable.", "");
        safetyTipRepository.save(tip2);

        SafetyTip tip3 = new SafetyTip("Be aware", "Using a mobile phone, whether making a call or texting, wearing a hood or listening to loud music, all affect your awareness of your surroundings.", "");
        safetyTipRepository.save(tip3);

        SafetyTip tip4 = new SafetyTip("Hide it", "Keep your valuables including your mobile phone, other devices and jewellery, hidden. Remember, out of sight, out of mind.", "");
        safetyTipRepository.save(tip4);

        SafetyTip tip5 = new SafetyTip("Go against the flow", "When walking on the pavement, always face oncoming traffic, as it will make it far more difficult for thieves on two wheelers to ride up from behind and snatch your property. But still also be aware of anyone approaching from ahead of you.", "");
        safetyTipRepository.save(tip5);

        SafetyTip tip6 = new SafetyTip("Trust your instincts", "Try to avoid walking alone at night in places such as parks and side streets or any unfamiliar environment. If you do have to walk, stick to busy places where is a lot of activity CCTV and good lighting.", "");
        safetyTipRepository.save(tip6);
        SafetyTip tip7 = new SafetyTip("Make a plan", "And stick to it. First off, discuss with friends what to do if something were to go wrong on your night out together, eg if one of you has too much to drink or you were to get separated. Agree on a backup plan and look out for one another.", "");
        safetyTipRepository.save(tip7);
        SafetyTip tip8 = new SafetyTip("Be vigilant", "Alcohol and drugs will reduce reaction times and inhibitions, which makes it harder to assess risks and decide how to deal with them. So keep an eye on how much you drink and never let your glass or bottle out of your sight.", "");
        safetyTipRepository.save(tip8);

        SafetyTip tip9 = new SafetyTip("Safety in numbers", "Try to travel with people you know and, where possible, stick to routes and forms of transport that others are using and avoid shortcuts in lonely places.", "");
        safetyTipRepository.save(tip9);


    }
}



