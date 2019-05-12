
package com.KLM.auth;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;

@Component
public class SimpleTravelApiAuth implements ApiAuth {

	@Value("${simple-travel-api.auth.username}")
	private String username;

	@Value("${simple-travel-api.auth.password}")
	private String password;

	@Value("${simple-travel-api.url}")
	private String simpleTravelApiUrl;

	private volatile String token;
	private volatile long tokenExpiresAtMillis = Long.MIN_VALUE;

	/*
	 * @see com.KLM.auth.ApiAuth#getToken() retrieves token
	 */
	@Override
	public String getToken() throws UnirestException, JSONException {
		if (System.currentTimeMillis() > tokenExpiresAtMillis) {
			synchronized (this) {
				if (System.currentTimeMillis() > tokenExpiresAtMillis) {
					try {
						obtainToken();
					} catch (JSONException e) {
						e.printStackTrace();
					}
				}
			}
		}

		return token;
	}

	/**
	 * retrieves token
	 * 
	 * @throws UnirestException
	 * @throws JSONException
	 */
	private void obtainToken() throws UnirestException, JSONException {
		JSONObject tokenObject = (Unirest.post(simpleTravelApiUrl).header("accept", "application/json")
				.header("content-type", "application/x-www-form-urlencoded").basicAuth("travel-api-client", "psw"))
						.queryString("grant_type", "client_credentials").queryString("username", username)
						.queryString("password", password).asJson().getBody().getObject();
		try {
			token = tokenObject.get("access_token").toString();
		} catch (JSONException e) {
			e.printStackTrace();
		}
		tokenExpiresAtMillis = System.currentTimeMillis() + tokenObject.getInt("expires_in") * 1000;

	}
}
