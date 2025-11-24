package com.example.auth.service;

import java.util.Optional;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.auth.model.User;
import com.example.auth.repository.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepo;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public UserService(UserRepository userRepo) {
        this.userRepo = userRepo;
    }

    public Optional<User> signup(String name, String email, String password) {
        if (userRepo.findByEmail(email).isPresent()) {
            return Optional.empty();
        }
        User u = new User();
        u.setEmail(email);
        u.setName(name);
        u.setPasswordHash(passwordEncoder.encode(password));
        userRepo.save(u);
        return Optional.of(u);
    }

    public Optional<User> login(String email, String password) {
        Optional<User> maybe = userRepo.findByEmail(email);
        if (maybe.isPresent()) {
            User u = maybe.get();
            if (passwordEncoder.matches(password, u.getPasswordHash())) {
                return Optional.of(u);
            }
        }
        return Optional.empty();
    }
}
