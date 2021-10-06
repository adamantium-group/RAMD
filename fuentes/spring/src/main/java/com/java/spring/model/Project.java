package com.java.spring.model;

import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;
import java.util.List;

public class Project {

    @Id
    private String id;

    private String title;
    private String description;
    private String status;
    private String phase;
    private List<String> progress;
    private List<String> observations;
    private long budget;
    private LocalDateTime finishDate;
    private String generalObjective;
    private String researcherId;
    private List<String> specificObjective;
    private LocalDateTime startDate;
    private String projectId;

    public Project(String id, String title, String description, String status, String phase, List<String> progress, List<String> observations, long budget, LocalDateTime finishDate, String generalObjective, String researcherId, List<String> specificObjective, LocalDateTime startDate, String projectId) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
        this.phase = phase;
        this.progress = progress;
        this.observations = observations;
        this.budget = budget;
        this.finishDate = finishDate;
        this.generalObjective = generalObjective;
        this.researcherId = researcherId;
        this.specificObjective = specificObjective;
        this.startDate = startDate;
        this.projectId = projectId;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
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

    public List<String> getProgress() {
        return progress;
    }

    public void setProgress(List<String> progress) {
        this.progress = progress;
    }

    public List<String> getObservations() {
        return observations;
    }

    public void setObservations(List<String> observations) {
        this.observations = observations;
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

    public String getGeneralObjective() {
        return generalObjective;
    }

    public void setGeneralObjective(String generalObjective) {
        this.generalObjective = generalObjective;
    }

    public String getResearcherId() {
        return researcherId;
    }

    public void setResearcherId(String researcherId) {
        this.researcherId = researcherId;
    }

    public List<String> getSpecificObjective() {
        return specificObjective;
    }

    public void setSpecificObjective(List<String> specificObjective) {
        this.specificObjective = specificObjective;
    }

    public LocalDateTime getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDateTime startDate) {
        this.startDate = startDate;
    }

    public String getProjectId() {
        return projectId;
    }

    public void setProjectId(String projectId) {
        this.projectId = projectId;
    }
}
