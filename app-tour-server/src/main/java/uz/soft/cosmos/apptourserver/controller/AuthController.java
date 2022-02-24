package uz.soft.cosmos.apptourserver.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import uz.soft.cosmos.apptourserver.entity.User;
import uz.soft.cosmos.apptourserver.payload.ApiResponse;
import uz.soft.cosmos.apptourserver.payload.JwtResponse;
import uz.soft.cosmos.apptourserver.payload.ReqSignIn;
import uz.soft.cosmos.apptourserver.payload.ReqSignUp;
import uz.soft.cosmos.apptourserver.repository.UserRepository;
import uz.soft.cosmos.apptourserver.security.AuthService;
import uz.soft.cosmos.apptourserver.security.JwtTokenProvider;

import java.util.Optional;


@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    JwtTokenProvider tokenProvider;

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    AuthService authService;

    @Autowired
    UserRepository userRepository;

    @PostMapping("/login")
    public HttpEntity<?> login(@RequestBody ReqSignIn reqSignIn) {
        ApiResponse response = authService.login(reqSignIn);
        if (response.isSuccess()) {
            return getApiToken(reqSignIn.getPhoneNumber(), reqSignIn.getPassword());
        } else {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(response);
        }
    }

    @PostMapping("/register")
    public HttpEntity<?> register(@RequestBody ReqSignUp reqSignUp) {
        ApiResponse response = authService.register(reqSignUp);
        if (response.isSuccess()) {

            return getApiToken(reqSignUp.getPhoneNumber(), reqSignUp.getPassword());

        } else {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(response);
        }
    }

    @PostMapping("/check")
    public HttpEntity<?> checkUser(@RequestBody ReqSignIn reqSignIn){
        try {
            Optional<User> user = userRepository.findByPhoneNumber(reqSignIn.getPhoneNumber());

            if (user.isPresent()){
                return ResponseEntity.ok(new ApiResponse(true, "registered"));
            } else
                return ResponseEntity.ok(new ApiResponse(false, "nRegistered"));
        } catch (Exception e){
            return ResponseEntity.ok(new ApiResponse(false, e.getLocalizedMessage()));
        }
    }



    private HttpEntity<?> getApiToken(String phoneNumber, String password) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(phoneNumber, password)
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = tokenProvider.generateToken(authentication);
        User user = userRepository.findByPhoneNumber(phoneNumber).orElseThrow(() -> new UsernameNotFoundException("Telefon raqam topilmadi: " + phoneNumber));

        return ResponseEntity.ok(new JwtResponse(jwt));
    }
}
