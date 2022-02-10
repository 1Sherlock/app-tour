package uz.soft.cosmos.apptourserver.projection;

import uz.soft.cosmos.apptourserver.entity.enums.RoleName;

import java.sql.Timestamp;
import java.util.List;
import java.util.UUID;

public interface CustomUser {
    UUID getId();

    boolean isAccountNonExpired();

    boolean isAccountNonLocked();

    Timestamp getCreatedAt();

    boolean isCredentialsNonExpired();

    String getEmail();

    boolean isEnabled();

    String getFirstName();

    String getLastName();

    String getPatron();

    String getPhoneNumber();

    List<RoleInfo> getRoles();

    interface RoleInfo {
        Integer getId();

        String getDescription();

        RoleName getName();
    }
}
