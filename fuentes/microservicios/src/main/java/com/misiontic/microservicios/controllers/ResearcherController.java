package com.misiontic.microservicios.controllers;

import com.misiontic.microservicios.dtos.ResearcherDto;
import com.misiontic.microservicios.models.Researcher;
import com.misiontic.microservicios.repositories.ProjectRepository;
import com.misiontic.microservicios.repositories.ResearcherRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.List;

@RestController
public class ResearcherController {

    private final ResearcherRepository researcherRepository;
    private final ProjectRepository projectRepository;

    public ResearcherController(ResearcherRepository researcherRepository, ProjectRepository projectRepository) {
        this.researcherRepository = researcherRepository;
        this.projectRepository = projectRepository;

        Researcher r1 = new Researcher("E001",
                "Estudiante",
                "Hector",
                "Osorio",
                310600845,
                LocalDateTime.of(2021, 11, 25, 0, 0, 0, 0),
                "Mercadeo",
                "P001"
                );
        Researcher r2 = new Researcher("E002",
                "Estudiante",
                "Juan",
                "Mejia",
                311123455,
                LocalDateTime.of(2021, 12, 10, 0, 0, 0, 0),
                "Ingenieria Ambiental",
                "P001"
        );

        this.researcherRepository.save(r1);
        this.researcherRepository.save(r2);
    }

    @GetMapping("/dummy")
    public ResearcherDto getResearcher() {
        LocalDateTime entryDate = LocalDateTime.of(2021, 11, 25, 0, 0, 0, 0);
        return new ResearcherDto("61461ba90f9b95fb06d365b0",
                101,
                "Estudiante",
                "Hector",
                "Osorio",
                3106008455L,
                entryDate,
                "Mercadeo",
                "614611590f9b95fb06d365a4");
    }

    @GetMapping("/participantes")
    public List<Researcher> getAllResearcher() {
        return researcherRepository.findAll();
    }
}
