package misiontic.java.spring.repository;

import misiontic.java.spring.model.Project;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProjectRepository extends MongoRepository<Project, String> {
}
