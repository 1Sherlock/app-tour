package uz.soft.cosmos.apptourserver.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import uz.soft.cosmos.apptourserver.entity.Role;
import uz.soft.cosmos.apptourserver.entity.enums.RoleName;

import java.util.List;

//@RepositoryRestResource(path = "role",collectionResourceRel = "list",excerptProjection = CustomRole.class)
public interface RoleRepository extends JpaRepository<Role, Integer> {
    List<Role> findAllByName(RoleName roleName);
    List<Role> findAllByNameIn(List<RoleName> names);
}
