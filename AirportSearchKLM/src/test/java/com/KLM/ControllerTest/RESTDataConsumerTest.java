package com.KLM.ControllerTest;

import org.junit.Before;
import org.junit.Test;
import org.springframework.http.ResponseEntity;
import org.springframework.test.util.ReflectionTestUtils;

import com.KLM.Controller.FareDetails;
import com.KLM.Controller.RESTDataConsumer;

public class RESTDataConsumerTest {

	private RESTDataConsumer classUnderTest;
	private String token;

	@Before
	public void setUp() {
		token = "generated";
		classUnderTest = new RESTDataConsumer();
	}

	@Test
	public void fetchFairDetailsSuccessTest() {
		String source = "Source";
		String destination = "destination";
		String currency = "EUR";
		ReflectionTestUtils.setField(classUnderTest, "simpleTravelFareUrl", "http://loaclhost:8080/fares/");
		ResponseEntity<FareDetails> fairDetails = classUnderTest.fetchFairDetails(token, source, destination, currency);
		fairDetails.getStatusCode();

	}

}
