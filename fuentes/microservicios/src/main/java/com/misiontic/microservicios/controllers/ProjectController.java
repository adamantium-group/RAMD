package com.misiontic.microservicios.controllers;

import com.misiontic.microservicios.models.Project;
import com.misiontic.microservicios.repositories.ProjectRepository;
import com.misiontic.microservicios.repositories.ResearcherRepository;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/proyectos")
public class ProjectController {

    private final ProjectRepository projectRepository;
    private final ResearcherRepository researcherRepository;

    public ProjectController(ProjectRepository projectRepository, ResearcherRepository researcherRepository) {
        this.projectRepository = projectRepository;
        this.researcherRepository = researcherRepository;

        Project p1 = new Project("P001",
                "Reptiles del Amazonas",
                "En colaboracion con Discoveru Channel.",
                "inicio",
                "Documentacion",
                150000000L,
                LocalDateTime.of(2021, 9, 18, 0, 0, 0, 0),
                LocalDateTime.of(2022, 12, 10, 12, 0, 0, 0),
                "IN001"
                );

        Project p2 = new Project("P002",
                "Calentamiento Global",
                "En colaboracion con China.",
                "ejecucion",
                "Desarrollo",
                100000000L,
                LocalDateTime.of(2021, 7, 8, 5, 0, 0, 0),
                LocalDateTime.of(2022, 7, 18, 17, 0, 0, 0),
                "IN002"
        );

        this.projectRepository.save(p1);
        this.projectRepository.save(p2);
    }

    //Mostrar todos los proyectos
    @GetMapping
    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    // Mostrar un proyecto en especifico
    @GetMapping("/{projectId}")
    public Project getOneProject(@PathVariable String projectId){
        return projectRepository.findById(projectId).orElse(null);
    }

    // Actualizar los datos de un proyecto en especifico
    @PutMapping("/{projectId}/actualizar")
    public void updateProject(@PathVariable String projectId,
                              @RequestBody Project actualProject) {
        projectRepository.save(actualProject);
    }
}
