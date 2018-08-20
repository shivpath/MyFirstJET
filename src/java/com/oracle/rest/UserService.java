package com.oracle.rest;  
  

import javax.ws.rs.GET;  
import javax.ws.rs.Path;  
import javax.ws.rs.Produces;  
import javax.ws.rs.core.SecurityContext;  
import javax.ws.rs.core.Context;  
import javax.ws.rs.core.MediaType;  
  
@Path("rest")  
public class UserService {  
    public UserService() {  
        super();  
    }  
    @GET  
    @Produces(MediaType.TEXT_PLAIN)  
    @Path("userinfo")  
    public String getLoggedInUser(@Context SecurityContext sc) {  
        String userName = "Content changed using ajax";  
        if (sc.getUserPrincipal() != null) {  
            userName = sc.getUserPrincipal().getName();  
        }  
        return userName;  
    }  
}  