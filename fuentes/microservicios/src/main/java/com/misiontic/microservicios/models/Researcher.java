package com.misiontic.microservicios.models;

import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;

public class Researcher {

    // Parametros
    @Id
    private String researcherId;

    private String role;
    private String firstName;
    private String lastName;
    private Integer phone;
    private LocalDateTime entryDate;
    private String career;
    private String projectId;

    // Constructor

    public Researcher(String researcherId, String role, String firstName, String lastName, Integer phone,
                      LocalDateTime entryDate, String career, String projectId) {
        this.researcherId = researcherId;
        this.role = role;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.entryDate = entryDate;
        this.career = career;
        this.projectId = projectId;
    }

    // Getter y Setter

    public String getResearcherId() {
        return researcherId;
    }

    public void setResearcherId(String researcherId) {
        this.researcherId = researcherId;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Integer getPhone() {
        return phone;
    }

    public void setPhone(Integer phone) {
        this.phone = phone;
    }

    public LocalDateTime getEntryDate() {
        return entryDate;
    }

    public void setEntryDate(LocalDateTime entryDate) {
        this.entryDate = entryDate;
    }

    public String getCareer() {
        return career;
    }

    public void setCareer(String career) {
        this.career = career;
    }

    public String getProjectId() {
        return projectId;
    }

    public void setProjectId(String projectId) {
        this.projectId = projectId;
    }
}
