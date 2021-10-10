package com.misiontic.microservicios.repositories;

import com.misiontic.microservicios.models.Researcher;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

public interface ResearcherRepository extends MongoRepository<Researcher, String> {

    //public Researcher findByResearcherId()
}
