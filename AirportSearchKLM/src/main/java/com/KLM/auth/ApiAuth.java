package com.KLM.auth;

import com.mashape.unirest.http.exceptions.UnirestException;

public interface ApiAuth {
    String getToken() throws UnirestException;
}
