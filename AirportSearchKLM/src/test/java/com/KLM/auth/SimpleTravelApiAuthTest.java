package com.KLM.auth;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;

import org.json.JSONException;
import org.junit.Before;
import org.junit.Test;
import org.springframework.test.util.ReflectionTestUtils;

import com.mashape.unirest.http.exceptions.UnirestException;

public class SimpleTravelApiAuthTest {

	private SimpleTravelApiAuth classUnderTest;

	@Before
	public void setUp() {

		classUnderTest = new SimpleTravelApiAuth();
	}

	@Test
	public void getTokenTest() throws JSONException, UnirestException {
		ReflectionTestUtils.setField(classUnderTest, "username", "username");
		ReflectionTestUtils.setField(classUnderTest, "password", "password");
		ReflectionTestUtils.setField(classUnderTest, "simpleTravelApiUrl", "http://localhost:8080/oauth/token");
		String result = classUnderTest.getToken();
		assertNotNull(result);
	}
	@Test
	public void getTokenTestFail() throws JSONException, UnirestException {
		ReflectionTestUtils.setField(classUnderTest, "username", "username");
		ReflectionTestUtils.setField(classUnderTest, "password", "password");
		ReflectionTestUtils.setField(classUnderTest, "simpleTravelApiUrl", "http://localhost:8080/oauth");
		String result = classUnderTest.getToken();
		assertNull(result);
	}
}
