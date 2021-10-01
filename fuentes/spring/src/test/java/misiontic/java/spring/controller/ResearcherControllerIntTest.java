/*
package misiontic.java.spring.controller;

import misiontic.java.spring.dto.ResearcherDto;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.json.AutoConfigureJsonTesters;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.json.JacksonTester;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.time.LocalDateTime;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(SpringExtension.class)
@AutoConfigureJsonTesters
@WebMvcTest(HomeController.class)

class ResearcherControllerIntTest {
    @Autowired
    private MockMvc mvc;
    @Autowired
    private JacksonTester<ResearcherDto> jsonResearcherDto;

    @Test
    void getResearcherTest() throws Exception {
        RequestBuilder request = MockMvcRequestBuilders.get("/researcher")
                .accept(MediaType.APPLICATION_JSON);
        MvcResult result = mvc.perform(request).andReturn();
        LocalDateTime entryDate = LocalDateTime.of(2021, 11, 25, 0, 0, 0, 0);
        ResearcherDto researcherExpected = new ResearcherDto("61461ba90f9b95fb06d365b0",
                101,
                "Estudiante",
                "Hector",
                "Osorio",
                3106008455L,
                entryDate,
                "Mercadeo",
                "614611590f9b95fb06d365a4");
        //assertEquals(String.valueOf(researcherExpected), result.getResponse().getContentAsString());
        //assertEquals(researcherExpected, result.getResponse());
        assertEquals(researcherExpected.toString(), result.getResponse().getContentAsString());
    }
}*/
