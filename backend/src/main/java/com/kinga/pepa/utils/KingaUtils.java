package com.kinga.pepa.utils;
import com.kinga.pepa.entity.UserApp;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.Random;
import java.util.StringJoiner;
import java.util.regex.Pattern;
import java.util.regex.Matcher;
public class KingaUtils {
    public static boolean isValidPhoneNumber(String phoneNumber) {
        String cleanedPhoneNumber = phoneNumber.replaceAll("\\s+", "").replaceAll("\\+", "");
        String regex = "^(261|0)(32|33|34|38)\\d{2}\\d{3}\\d{2}$";
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(cleanedPhoneNumber);
        return matcher.matches();
    }

    public static String cleanPhonNumber(String phoneNumber){
        String cleanedPhoneNumber = phoneNumber.replaceAll("\\s+", "");
        if(cleanedPhoneNumber.length()<9){
            throw new RuntimeException("Phone number "+phoneNumber +" is not correct");
        }
        return  "0"+(cleanedPhoneNumber.substring(cleanedPhoneNumber.length() - 9));
    }
    public static String separatePhoneNumber(String phoneNumber) {
        int[] insertIndices = {3, 5, 8};
        String cleanPhone = cleanPhonNumber(phoneNumber);
        StringBuilder stringBuilder = new StringBuilder(cleanPhone);

        for (int i = 0; i < insertIndices.length; i++) {
            int insertIndex = insertIndices[i] + i;
            stringBuilder.insert(insertIndex, " ");
        }

        return stringBuilder.toString();
    }
    public static String generateUsername(String firstName, String lastName) {
        String[] firstNameParts = firstName.split("\\s+");
        String[] lastNameParts = lastName.split("\\s+");
        StringJoiner joiner = new StringJoiner(".");
        for (String part : lastNameParts) {
            joiner.add(part);
        }
        for (String part : firstNameParts) {
            joiner.add(part.trim().substring(0, 1));
        }
        String username = joiner.toString() +"."+ new Random().nextInt(1000);;
        return username;
    }
    public static String encodePassword(String password){
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        return passwordEncoder.encode(password);
    }
}



