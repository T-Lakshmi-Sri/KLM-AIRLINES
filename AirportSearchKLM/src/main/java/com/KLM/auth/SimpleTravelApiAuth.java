package com.KLM.auth;

import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class SimpleTravelApiAuth implements ApiAuth {

	// private Logger logger = LogManager.getLogger(SimpleTravelApiAuth.class);

	@Value("${simple-travel-api.auth.username}")
	private String username;

	@Value("${simple-travel-api.auth.password}")
	private String password;

	@Value("${simple-travel-api.url}")
	private String simpleTravelApiUrl;

	private volatile String token;
	private volatile long tokenExpiresAtMillis = Long.MIN_VALUE;

	@Override
	public String getToken() throws UnirestException {

		if (System.currentTimeMillis() > tokenExpiresAtMillis) {
			synchronized (this) {
				if (System.currentTimeMillis() > tokenExpiresAtMillis) {
					try {
						obtainToken();
					} catch (JSONException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
				}
			}
		}

		return token;
	}

	private void obtainToken() throws UnirestException, JSONException {
		JSONObject tokenObject = (Unirest.post(simpleTravelApiUrl )
				.header("accept", "application/json")
				.header("content-type", "application/x-www-form-urlencoded")
				.basicAuth("travel-api-client", "psw"))
						.queryString("grant_type", "client_credentials")
						.queryString("username", username)
						.queryString("password", password).asJson().getBody().getObject();

		token = tokenObject.get("access_token").toString();
		tokenExpiresAtMillis = System.currentTimeMillis() + tokenObject.getInt("expires_in") * 1000;

		System.out.println("Auth token received " + token);

		// logger.debug("Auth token received " + token);
	}
}
