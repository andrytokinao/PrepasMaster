package com.kinga.pepa.config;


import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public class Permission {
    public static String LOGED = "LOGED";
    public static String CAN_EDIT_PROFILE = "CAN_EDIT_PROFILE";
    public static String CAN_VIEW_LIST_COMPANY = "CAN_VIEW_LIST_COMPANY";
    public static String CAN_AFFECT_ROLE_RESPONSABLE = "CAN_AFFECT_ROLE_RESPONSABLE";
    public static String CAN_AFFECT_ROLE_ADMIN = "CAN_AFFECT_ROLE_ADMIN";
    public static String CAN_ADD_NEW_PARCOURS = "CAN_ADD_NEW_PARCOURS";
    public static String CAN_EDIT_COMPANY = "CAN_EDIT_COMPANY";
    public static String CAN_VIEW_LIST_USER = "CAN_VIEW_LIST_USER";
    public static String CAN_ADD_USER = "CAN_VIEW_LIST_USER";
    public static String CAN_CONTROLE_USER = "CAN_CONTROLE_USER";
    public static String CAN_ADD_PAROURS_USER = "CAN_ADD_PAROURS_USER";
    public static String CAN_VIEW_COMPANY = "CAN_VIEW_COMPANY";
    public static String CAN_ADD_NEW_COMPANY = "CAN_ADD_NEW_COMPANY";
    public static String CAN_VIEW_TRANSACTION = "CAN_VIEW_TRANSACTION";
    public static String CAN_VIEW_ETAT_FINANCIAIRE = "CAN_VIEW_ETAT_FINANCIAIRE";

}

