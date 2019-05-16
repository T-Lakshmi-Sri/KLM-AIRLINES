package com.KLM.ControllerTest;

import static org.junit.Assert.assertEquals;

import org.junit.Before;
import org.junit.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.util.ReflectionTestUtils;
import com.KLM.Controller.FareDetails;
import com.KLM.Controller.RESTDataConsumer;

public class RESTDataConsumerTest {

	private RESTDataConsumer classUnderTest;
	private String token;
	ResponseEntity<FareDetails> status = new ResponseEntity<FareDetails>(HttpStatus.OK);
	ResponseEntity<FareDetails> failStatus = new ResponseEntity<FareDetails>(HttpStatus.BAD_GATEWAY);

	@Before
	public void setUp() {
		token = "generated";
		classUnderTest = new RESTDataConsumer();
	}

	@Test
	public void fetchFairDetailsSuccessTest() {
		String source = "YOW";
		String destination = "LOA";
		String currency = "EUR";

		ReflectionTestUtils.setField(classUnderTest, "simpleTravelFareUrl", "http://localhost:8080/fares/");
		ResponseEntity<FareDetails> fairDetails = classUnderTest.fetchFairDetails(token, source, destination, currency);
		assertEquals(HttpStatus.OK, fairDetails.getStatusCode());

	}

	@Test
	public void fetchFairDetailsFailureTest() {
		String source = "YOW";
		String destination = "LOA";
		String currency = "EUR";

		ReflectionTestUtils.setField(classUnderTest, "simpleTravelFareUrl", "http://localhost:8080/fairs/");
		ResponseEntity<FareDetails> fairDetails = classUnderTest.fetchFairDetails(token, source, destination, currency);
		assertEquals(HttpStatus.BAD_GATEWAY, fairDetails.getStatusCode());

	}

	@Test
	public void fetchAirportByCodeSuccessTest() {
		String source = "Yoklohoma";
		String code = "YOW";
		String lang = "Eng";

		ReflectionTestUtils.setField(classUnderTest, "simpleTravelFareUrl", "http://localhost:8080/getAirport");
		ResponseEntity<String> fetchCode = classUnderTest.fetchAirportByCode(source, code, lang);
		assertEquals(HttpStatus.OK, fetchCode.getStatusCode());

	}

	@Test
	public void fetchAirportByCodeFailureTest() {
		String source = "Yoklohoma";
		String code = "YOW";
		String lang = "Eng";

		ReflectionTestUtils.setField(classUnderTest, "simpleTravelFareUrl", "http://localhost:8080/getAirports");
		ResponseEntity<String> fetchCode = classUnderTest.fetchAirportByCode(source, code, lang);
		assertEquals(HttpStatus.BAD_GATEWAY, fetchCode.getStatusCode());

	}

	@Test
	public void fetchAirportDetailsSuccessTest() {
		String lang = "Eng";
		String size = "20";
		String term = "2";
		String page = "1";

		ReflectionTestUtils.setField(classUnderTest, "simpleTravelFareUrl", "http://localhost:8080/getAirportDetails");
		ResponseEntity<String> fetchCode = classUnderTest.fetchAirportDetails(page, size, page, lang, term);
		assertEquals(HttpStatus.OK, fetchCode.getStatusCode());

	}

	@Test
	public void fetchAirportDetailsFailureTest() {
		String lang = "Eng";
		String size = "20";
		String term = "2";
		String page = "1";

		ReflectionTestUtils.setField(classUnderTest, "simpleTravelFareUrl", "http://localhost:8080/getAirportDetail");
		ResponseEntity<String> fetchCode = classUnderTest.fetchAirportDetails(page, size, page, lang, term);
		assertEquals(HttpStatus.BAD_GATEWAY, fetchCode.getStatusCode());

	}

}
