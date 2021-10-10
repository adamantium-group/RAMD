package com.misiontic.microservicios.repositories;

import com.misiontic.microservicios.models.Project;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends MongoRepository<Project, String> {


}
