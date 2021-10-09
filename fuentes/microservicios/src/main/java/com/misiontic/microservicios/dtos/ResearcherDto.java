package com.misiontic.microservicios.dtos;

import java.time.LocalDateTime;

public class ResearcherDto {


    // Parametros
    private String id;
    private int dni;
    private String role;
    private String firstName;
    private String lastName;
    private long phone;
    private LocalDateTime entryDate;
    private String career;
    private String projectId;

    public int getDni() {
        return dni;
    }

    public void setDni(int dni) {
        this.dni = dni;
    }

    // Constructor
    public ResearcherDto(String id, int dni, String role, String firstName, String lastName, long phone, LocalDateTime entryDate, String career, String projectId) {
        this.id = id;
        this.dni = dni;
        this.role = role;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.entryDate = entryDate;
        this.career = career;
        this.projectId = projectId;
    }

    // Getters y Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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

    public long getPhone() {
        return phone;
    }

    public void setPhone(long phone) {
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

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

}
