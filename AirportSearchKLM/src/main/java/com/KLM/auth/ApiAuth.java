package com.KLM.auth;

import org.json.JSONException;
import com.mashape.unirest.http.exceptions.UnirestException;

public interface ApiAuth {
	String getToken() throws UnirestException, JSONException;
}
