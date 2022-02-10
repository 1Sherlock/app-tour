package uz.soft.cosmos.apptourserver.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import uz.soft.cosmos.apptourserver.entity.User;
import uz.soft.cosmos.apptourserver.entity.enums.RoleName;
import uz.soft.cosmos.apptourserver.payload.ApiResponse;
import uz.soft.cosmos.apptourserver.payload.ReqSignIn;
import uz.soft.cosmos.apptourserver.payload.ReqSignUp;
import uz.soft.cosmos.apptourserver.repository.RoleRepository;
import uz.soft.cosmos.apptourserver.repository.UserRepository;

import java.util.Optional;
import java.util.UUID;

@Service
public class AuthService implements UserDetailsService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    RoleRepository roleRepository;

    @Override
    public UserDetails loadUserByUsername(String phoneNumber) throws UsernameNotFoundException {
        return userRepository.findByPhoneNumber(phoneNumber).orElseThrow(() -> new UsernameNotFoundException("Bunday telefon raqam topilmadi: " + phoneNumber));
    }

    public UserDetails loadUserById(UUID userId) {
        return userRepository.findById(userId).orElseThrow(() -> new UsernameNotFoundException("ID not found: " + userId));
    }

    public ApiResponse register(ReqSignUp reqSignUp) {
        Optional<User> optionalUser = userRepository.findByPhoneNumber(reqSignUp.getPhoneNumber());

        if (optionalUser.isPresent()) {
            return new ApiResponse(false, "Bunday foydalanuvchi ro'yhatdan o'tgan!");
        } else {
            userRepository.save(
                    new User(
                            reqSignUp.getPhoneNumber(),
                            passwordEncoder.encode(reqSignUp.getPassword()),
                            reqSignUp.getLastName(),
                            reqSignUp.getFirstName(),
                            roleRepository.findAllByName(RoleName.ROLE_USER),
                            reqSignUp.getEmail()
                    ));
            return new ApiResponse(true, "Ro'yhatdan o'tish muvafaqqiyatli amalga oshirildi.");
        }
    }

    public ApiResponse login(ReqSignIn reqSignIn) {
        Optional<User> optionalUser = userRepository.findByPhoneNumber(reqSignIn.getPhoneNumber());

        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            if (passwordEncoder.matches(reqSignIn.getPassword(), user.getPassword())) {
                return new ApiResponse(true, "ok");
            } else {
                return new ApiResponse(false, "Telefon raqam yoki parol noto'g'ri");
            }
        } else {
            return new ApiResponse(false, "Telefon raqam yoki parol noto'g'ri");
        }
    }
}
