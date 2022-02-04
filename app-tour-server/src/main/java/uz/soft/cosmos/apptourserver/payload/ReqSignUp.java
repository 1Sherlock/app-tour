package uz.soft.cosmos.apptourserver.payload;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ReqSignUp {
    private String lastName;
    private String firstName;
    private String email;
    private String phoneNumber;
    private String password;
}
