package com.example.codeclan.Crimewatch_backend.models;

import javax.persistence.*;

@Entity
@Table(name = "safetyTips")
public class SafetyTip {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name ="title")
    private String title;

    @Column(name = "description")
    private String description;

    @Column(name = "imageURL")
    private String imageURL;

    public SafetyTip(String title, String description, String imageURL){
        this.title = title;
        this.description = description;
        this.imageURL = imageURL;
    }

    public SafetyTip(){

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }
}
