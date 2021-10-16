package com.misiontic.microservicios.controllers;

import com.misiontic.microservicios.models.Researcher;
import com.misiontic.microservicios.repositories.ProjectRepository;
import com.misiontic.microservicios.repositories.ResearcherRepository;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/participantes")
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

    // Mostrar todos los participantes y filtrar por ProjectId
    @GetMapping
    public List<Researcher> getAllResearcher(@RequestParam(required = false) String projectId) {
        List<Researcher> result = researcherRepository.findAll();
        if (projectId == null) {
            return result;
        }
        else {
            return result.stream()
                    .filter(r -> r.getProjectId().equals(projectId))
                    .collect(Collectors.toList());
        }
    }

    // Mostrar un participante en especifico
    @GetMapping("/{researcherId}")
    public Researcher getOneResearcher(@PathVariable String researcherId) {
        return researcherRepository.findById(researcherId).orElse(null);
    }

    // Actualizar los datos de un participante en especifico
    @PutMapping("/{researcherId}/actualizar")
    public void updateResearcher(@PathVariable String researcherId,
                                 @RequestBody Researcher actualResearcher) {
        researcherRepository.save(actualResearcher);
    }

    // Nuevo ingreso de un participante
    @PostMapping("/ingresar")
    public void newResearcher(@RequestBody Researcher newResearcher) {
        researcherRepository.save(newResearcher);
    }

    // Borrar un participante
    @DeleteMapping("/borrar")
    public void deleteResearcher(@PathVariable String researcherId) {
        researcherRepository.deleteById(researcherId);
    }

}
