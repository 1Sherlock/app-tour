package uz.soft.cosmos.apptourserver.component;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import uz.soft.cosmos.apptourserver.entity.User;
import uz.soft.cosmos.apptourserver.repository.RoleRepository;
import uz.soft.cosmos.apptourserver.repository.UserRepository;

/**
 * Created by Sherlock on 09.04.2020.
 */

@Component
public class DataLoader implements CommandLineRunner {
    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Value("${spring.datasource.initialization-mode}")
    String initialMode;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Override
    public void run(String... strings) throws Exception {
        if (initialMode.equals("always")) {
            User user = new User("+998934366331", passwordEncoder.encode("root123"), "Muxammatov", "Nizom", roleRepository.findAll(), "nizom702@gmail.com");
            userRepository.save(user);
        }
    }
}
