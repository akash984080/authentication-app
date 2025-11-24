
package com.example.auth.controller;

import java.util.Map;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.auth.model.User;
import com.example.auth.service.UserService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173") // local host 
public class AuthController {
    private final UserService userService;
    public AuthController(UserService userService) { this.userService = userService; }

    record SignupRequest(String name, String email, String password) {}
    record LoginRequest(String email, String password) {}
   

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody @Valid SignupRequest req) {
        Optional<User> created = userService.signup(req.name(), req.email(), req.password());
        if (created.isEmpty()) {
            return ResponseEntity.badRequest().body(Map.of("message", "Email already exists"));
        }
        User u = created.get();
        return ResponseEntity.ok(Map.of("id", u.getId(), "email", u.getEmail(), "name", u.getName()));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody @Valid LoginRequest req) {
        Optional<User> u = userService.login(req.email(), req.password());
        if (u.isEmpty()) {
            return ResponseEntity.status(401).body(Map.of("message", "Invalid credentials"));
        }
        User user = u.get();
        // For demo we return user name — in real app return JWT/session token
        return ResponseEntity.ok(Map.of("id", user.getId(), "email", user.getEmail(), "name", user.getName()));
    }

    
}
