package uz.soft.cosmos.apptourserver.payload;

import lombok.Data;


@Data
public class ReqSignIn {
    private String phoneNumber;

    private String password;
}
