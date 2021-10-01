package misiontic.java.spring.controller;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class HomeControllerTest {

@Test
    void homePage() {
        HomeController controller = new HomeController();
        String response = controller.homePage("World");
        assertEquals("Hello, World. Welcome to Adamantium's home page.", response);
}

}
