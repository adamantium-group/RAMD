package com.misiontic.microservicios.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;


@Document
public class Project {

    @Id
    private String projectId;

    private String title;
    private String description;
    private String status;
    private String phase;
    private Long budget;
    private LocalDateTime startDate;
    private LocalDateTime finishDate;
    private String researcherId;


    // Contructor
    public Project(String projectId, String title, String description, String status, String phase, Long budget,
                   LocalDateTime startDate, LocalDateTime finishDate, String researcherId) {
        this.projectId = projectId;
        this.title = title;
        this.description = description;
        this.status = status;
        this.phase = phase;
        this.budget = budget;
        this.startDate = startDate;
        this.finishDate = finishDate;
        this.researcherId = researcherId;
    }


    // Getters y Setters

    public String getProjectId() {
        return projectId;
    }

    public void setProjectId(String projectId) {
        this.projectId = projectId;
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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getPhase() {
        return phase;
    }

    public void setPhase(String phase) {
        this.phase = phase;
    }

    public long getBudget() {
        return budget;
    }

    public void setBudget(long budget) {
        this.budget = budget;
    }

    public LocalDateTime getFinishDate() {
        return finishDate;
    }

    public void setFinishDate(LocalDateTime finishDate) {
        this.finishDate = finishDate;
    }

    public String getResearcherId() {
        return researcherId;
    }

    public void setResearcherId(String researcherId) {
        this.researcherId = researcherId;
    }

    public LocalDateTime getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDateTime startDate) {
        this.startDate = startDate;
    }

}
