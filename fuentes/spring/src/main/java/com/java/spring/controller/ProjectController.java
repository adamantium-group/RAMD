package com.java.spring.controller;

import com.java.spring.model.Project;
import com.java.spring.repository.ProjectRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProjectController {

    private final ProjectRepository projectRepository;

    public ProjectController(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    @GetMapping("/Proyectos")
    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }
}
