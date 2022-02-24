package uz.soft.cosmos.apptourserver.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReqSignIn {
    private String phoneNumber;

    private String password;

    public ReqSignIn(String phoneNumber){
        this.phoneNumber = phoneNumber;
    }
}
