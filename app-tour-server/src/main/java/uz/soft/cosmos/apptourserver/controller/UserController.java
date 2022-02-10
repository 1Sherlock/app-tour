package uz.soft.cosmos.apptourserver.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import uz.soft.cosmos.apptourserver.entity.User;
import uz.soft.cosmos.apptourserver.payload.ApiResponse;
import uz.soft.cosmos.apptourserver.payload.ResUser;
import uz.soft.cosmos.apptourserver.projection.CustomUser;
import uz.soft.cosmos.apptourserver.repository.RoleRepository;
import uz.soft.cosmos.apptourserver.repository.UserRepository;
import uz.soft.cosmos.apptourserver.security.CurrentUser;

import java.util.List;

/**
 * Created by Sherlock on 13.01.2022.
 */
@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @GetMapping("/me")
    public ResponseEntity<?> getCurrentUser(@CurrentUser User currentUser) {
        try {
            return ResponseEntity.ok(new ResUser(
                            currentUser.getId(),
                            currentUser.getPhoneNumber(),
                            currentUser.getLastName(),
                            currentUser.getFirstName(),
                            currentUser.getRoles(),
                            currentUser.getEmail()
                    )
            );
        } catch (Exception e) {
            return ResponseEntity.ok(new ApiResponse(false, e.getMessage()));
        }
    }

    @PreAuthorize(value = "hasAnyRole('ROLE_ADMIN')")
    @GetMapping("/getUsers")
//    public ResponseEntity<?> getUsers(@RequestParam(defaultValue = "0") Integer page, @RequestParam(defaultValue = "10") Integer size, @RequestParam(defaultValue = "") String search) {
    public ResponseEntity<?> getUsers() {
        try {
//            Page<User> all = userRepository.findAllByPhoneNumberContainsOrLastNameContainsOrFirstNameContainsOrderByCreatedAtDesc(search, search, search, PageRequest.of(page, size));
            List<CustomUser> all = userRepository.findAllByOrderByCreatedAtDesc();
            return ResponseEntity.ok(new ApiResponse(true, "success", all));
        } catch (Exception e) {
            return ResponseEntity.ok(new ApiResponse(false, e.getMessage()));
        }
    }
}

//    @PreAuthorize(value = "hasRole('ROLE_ADMIN')")
//    @PostMapping("/changeRole")
//    public HttpEntity<?> changeRole(@RequestBody ReqChangeRole reqChangeRole){
//        try {
//            User user = userRepository.getOne(reqChangeRole.getUserId());
//
//            user.setRoles(roleRepository.findAllByName(reqChangeRole.getRole()));
//
//            if (reqChangeRole.getRole().equals(RoleName.ROLE_USER)){
//                user.setPartnerId(null);
//            } else {
//                user.setPartnerId(reqChangeRole.getPartner());
//            }
//
//            userRepository.save(user);
//
//            return ResponseEntity.ok(new ApiResponse(true, "Сохранено"));
//
//        } catch (Exception e){
//            return ResponseEntity.ok(new ApiResponse(false, e.getLocalizedMessage()));
//        }
//    }