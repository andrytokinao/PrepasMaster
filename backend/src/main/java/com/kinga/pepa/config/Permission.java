package com.kinga.pepa.config;


import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;



public class Permission {
    public static String CAN_AFFECT_ROLE = "CAN_AFFECT_ROLE";
    public static String CAN_ADD_COMPANY = "CAN_ADD_COMPANY";
    public static String CAN_EDIT_COMPANY = "CAN_EDIT_COMPANY";
    public static String CAN_ROLE_VIEW_COMPANY = "CAN_ROLE_VIEW_COMPANY";
    public static String LOGED = "LODED";
    public static String CAN_VIEW_LIST = "CAN_VIEW_LIST";

}

