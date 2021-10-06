package com.java.spring.controller;

import com.java.spring.dto.ResearcherDto;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;

@RestController
public class ResearcherController {

    @GetMapping("/researcher")
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
}
