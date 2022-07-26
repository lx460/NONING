package com.fivenonjangi.noning.service;

import com.fivenonjangi.noning.data.dto.user.SignupRequestDTO;
import com.fivenonjangi.noning.data.dto.user.UserDTO;
import com.fivenonjangi.noning.data.dto.user.UserDataDTO;
import com.fivenonjangi.noning.data.dto.user.UserResponseDTO;
import com.fivenonjangi.noning.data.entity.user.User;
import com.fivenonjangi.noning.data.entity.user.UserData;
import com.fivenonjangi.noning.data.repository.UserDataRepository;
import com.fivenonjangi.noning.data.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.MessageDigest;
import java.security.SecureRandom;
import java.time.LocalDateTime;

@Service
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;
    private final UserDataRepository userDataRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, UserDataRepository userDataRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.userDataRepository = userDataRepository;
        this.passwordEncoder = passwordEncoder;
    }


    @Override
    public void signupUser(SignupRequestDTO signupRequestDTO) {
        try {
            User user = User.builder()
                    .genderCode(signupRequestDTO.getGenderCode())
                    .mbti1Code(signupRequestDTO.getMbti1Code())
                    .mbti2Code(signupRequestDTO.getMbti2Code())
                    .mbti3Code(signupRequestDTO.getMbti3Code())
                    .mbti4Code(signupRequestDTO.getMbti4Code())
                    .age(signupRequestDTO.getAge())
                    .ageRangeCode(ageToAgeCode(signupRequestDTO.getAge()))
                    .reg(signupRequestDTO.getReg())
                    .build();
            UserData userData = UserData.builder()
                    .email(signupRequestDTO.getEmail())
                    .password(passwordEncoder.encode(signupRequestDTO.getPassword()))
                    .nickname(signupRequestDTO.getNickname())
                    .img(signupRequestDTO.getImg())
                    .build();
            userData.setUser(userRepository.save(user));
            userDataRepository.save(userData);
        }
        catch (Exception e){
            System.out.println(e.getStackTrace());
        }

    }

    @Override
    public UserDTO getUser(long userId) {
        return userRepository.findById(userId).get().toDto();
    }

    @Override
    public UserDataDTO getUserDataDto(long userId) {
        UserData  userData = userDataRepository.findByUser_Id(userId);
        return userData.toDTO();
    }

    @Override
    public UserResponseDTO login(String email, String password, LocalDateTime curTime) {
        try {
            UserData userData = userDataRepository.findByEmail(email);
            if (userData == null || !userData.isEmailVerified()) return null;

            if (passwordEncoder.matches(password,userData.getPassword())){
                userData.getUser().setLastLogin(curTime);
            userRepository.save(userData.getUser());
            return UserResponseDTO.builder()
                    .id(userData.getUser().getId())
                    .nickname(userData.getNickname())
                    .img(userData.getImg())
                    .genderCode(userData.getUser().getGenderCode())
                    .mbti1Code(userData.getUser().getMbti1Code())
                    .mbti2Code(userData.getUser().getMbti2Code())
                    .mbti3Code(userData.getUser().getMbti3Code())
                    .mbti4Code(userData.getUser().getMbti4Code())
                    .age(userData.getUser().getAge())
                    .ageRangeCode(userData.getUser().getAgeRangeCode())
                    .build();
            }
        }
        catch (Exception e){
            System.out.println(4);
            e.getStackTrace();
            return null;
        }
        return null;
    }

    @Override
    public UserData getUserByEmail(String email) {
        return userDataRepository.findByEmail(email);
    }

    @Override
    public UserData getUserById(long id) {
        return userDataRepository.findById(id).get();
    }

    private String ageToAgeCode(byte age) {
        switch (age/10) {
            case 0: return "A0101";
            case 1: return "A0102";
            case 2: return "A0103";
            case 3: return "A0104";
            case 4: return "A0105";
            case 5: return "A0106";
            default: return "A0107";
        }
    }
}
