package misiontic.java.spring.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping("/")
    public String homePage() {
        return "Hola Mundo: Equipo ADAMANTIUM con CI/DC";
    }
}
