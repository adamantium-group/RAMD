package misiontic.java.spring.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping("/")
    public String homePage(String name) {
        return String.format("Hello, %s. Welcome to Adamantium's home page.", name);
    }
}
