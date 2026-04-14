package com.bookstore.bookstore_backend.service;

import com.bookstore.bookstore_backend.entity.User;
import com.bookstore.bookstore_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.*;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository repo;

    public UserDetails loadUserByUsername(String username) {
        User user = repo.findByUsername(username);

        return new org.springframework.security.core.userdetails.User(
                user.getUsername(),
                user.getPassword(),
                List.of(user::getRole)
        );
    }
}