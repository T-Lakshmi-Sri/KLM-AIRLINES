package com.KLM.ControllerTest;

import static org.junit.Assert.assertEquals;

import org.easymock.EasyMock;
import org.json.JSONException;
import org.junit.Before;
import org.junit.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.util.ReflectionTestUtils;

import com.KLM.Controller.FareDetails;
import com.KLM.Controller.FetchDetailsController;
import com.KLM.Controller.RESTDataConsumer;
import com.KLM.auth.SimpleTravelApiAuth;
import com.mashape.unirest.http.exceptions.UnirestException;

public class FetchDetailsControllerTest {

	private FetchDetailsController classUnderTest;
	private SimpleTravelApiAuth mockAuth;
	private RESTDataConsumer mockRestData;

	private String token;

	@Before
	public void setUp() {

		classUnderTest = new FetchDetailsController();
		token = "Generated";
		mockAuth = EasyMock.createMock(SimpleTravelApiAuth.class);
		ReflectionTestUtils.setField(classUnderTest, "apiAuth", mockAuth);
		mockRestData = EasyMock.createMock(RESTDataConsumer.class);
		ReflectionTestUtils.setField(classUnderTest, "restData", mockRestData);

	}

	@Test
	public void fetchFareDetailsSuccessTest() throws JSONException, UnirestException {
		String source = "YOW";
		String destination = "LOA";
		String currency = "EURO";
		EasyMock.expect(mockAuth.getToken()).andReturn(token);
		ResponseEntity<FareDetails> fare = new ResponseEntity<FareDetails>(HttpStatus.OK);
		EasyMock.expect(mockRestData.fetchFairDetails(token, source, destination, currency)).andReturn(fare);
		replayMocks();
		ResponseEntity<FareDetails> response = classUnderTest.fetchFareDetails(source, destination, currency);
		assertEquals(HttpStatus.OK, response.getStatusCode());
	}

	@Test
	public void fetchFareDetailsFailureTest() throws JSONException, UnirestException {
		String source = "YOW";
		String destination = "LOA";
		String currency = "EURO";

		EasyMock.expect(mockAuth.getToken()).andReturn(token);
		ResponseEntity<FareDetails> fare = new ResponseEntity<FareDetails>(HttpStatus.NOT_FOUND);
		EasyMock.expect(mockRestData.fetchFairDetails(token, source, destination, currency)).andReturn(fare);
		replayMocks();
		ResponseEntity<FareDetails> response = classUnderTest.fetchFareDetails(source, destination, currency);
		assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
	}

	@Test
	public void fetchAirportDetailsSuccessTest() throws JSONException, UnirestException {
		String size = "4";
		String page = "1";
		String lang = "lang";
		String term = "term";
		EasyMock.expect(mockAuth.getToken()).andReturn(token);
		ResponseEntity<String> airportDetails = new ResponseEntity<String>(HttpStatus.OK);
		EasyMock.expect(mockRestData.fetchAirportDetails(token, size, page, lang, term)).andReturn(airportDetails);
		replayMocks();
		ResponseEntity<String> response = classUnderTest.fetchAirportDetails(size, page, lang, term);
		assertEquals(HttpStatus.OK, response.getStatusCode());

	}

	@Test
	public void fetchAirportDetailsFailureTest() throws JSONException, UnirestException {
		String size = "4";
		String page = "1";
		String lang = "lang";
		String term = "term";
		EasyMock.expect(mockAuth.getToken()).andReturn(token);
		ResponseEntity<String> airportDetails = new ResponseEntity<String>(HttpStatus.NOT_FOUND);
		EasyMock.expect(mockRestData.fetchAirportDetails(token, size, page, lang, term)).andReturn(airportDetails);
		replayMocks();
		ResponseEntity<String> response = classUnderTest.fetchAirportDetails(size, page, lang, term);
		assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());

	}

	@Test
	public void fetchAirportByCodeSuccessTest() throws JSONException, UnirestException {
		String code = "LOA";
		String lang = "lang";
		EasyMock.expect(mockAuth.getToken()).andReturn(token);
		ResponseEntity<String> airportCode = new ResponseEntity<String>(HttpStatus.OK);
		EasyMock.expect(mockRestData.fetchAirportByCode(token, code, lang)).andReturn(airportCode);
		replayMocks();
		ResponseEntity<String> response = classUnderTest.fetchAirportByCode(code, lang);
		assertEquals(HttpStatus.OK, response.getStatusCode());
	}

	@Test
	public void fetchAirportByCodeFailureTest() throws JSONException, UnirestException {
		String code = "KOP";
		String lang = "lang";
		EasyMock.expect(mockAuth.getToken()).andReturn(token);
		ResponseEntity<String> airportCode = new ResponseEntity<String>(HttpStatus.NOT_FOUND);
		EasyMock.expect(mockRestData.fetchAirportByCode(token, code, lang)).andReturn(airportCode);
		replayMocks();
		ResponseEntity<String> response = classUnderTest.fetchAirportByCode(code, lang);
		assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
	}

	private void replayMocks() {
		EasyMock.replay(mockAuth, mockRestData);
	}

}
