package com.misiontic.microservicios.repositories;

import com.misiontic.microservicios.models.Researcher;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface ResearcherRepository extends MongoRepository<Researcher, String> {

    Optional<Researcher> findById(String researchId);

    List<Researcher> findByRole(String role);

}
