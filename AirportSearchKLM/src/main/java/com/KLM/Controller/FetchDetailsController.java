package com.KLM.Controller;

import org.json.JSONException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestClientException;

import com.KLM.auth.SimpleTravelApiAuth;
import com.mashape.unirest.http.exceptions.UnirestException;

@RestController
public class FetchDetailsController {

	@Autowired
	public SimpleTravelApiAuth apiAuth;
	@Autowired
	public RESTDataConsumer restData;

	private static final Logger logger = LoggerFactory.getLogger(FetchDetailsController.class);

	String token = "notGenerated";

	/**
	 * retrieves fair details from service mock api
	 * @param source
	 * @param destination
	 * @param currency
	 * @return faredetails
	 * @throws JSONException
	 * @throws RestClientException
	 * @throws UnirestException
	 */
	@RequestMapping(method = RequestMethod.GET, value = "/getFare/{source}/{destination}")
	public ResponseEntity<FareDetails> fetchFareDetails(@PathVariable String source, @PathVariable String destination,
			@RequestParam(required = false, name = "currency") String currency)
			throws JSONException, RestClientException, UnirestException {

		token = apiAuth.getToken();
		logger.info("token obtained is" + token);
		ResponseEntity<FareDetails> fairDetails = restData.fetchFairDetails(token, source, destination, currency);
		logger.info("Fair Details are" + fairDetails);
		return fairDetails;

	}

	/**
	 * retrieves airport details from service mock api
	 * @param size
	 * @param page
	 * @param lang
	 * @param term
	 * @return
	 * @throws JSONException
	 * @throws RestClientException
	 * @throws UnirestException
	 */
	@RequestMapping(method = RequestMethod.GET, value = "/getAirportDetails")
	public ResponseEntity<String> fetchAirportDetails(@RequestParam(required = false, name = "size") String size,
			@RequestParam(required = false, name = "page") String page,
			@RequestParam(required = false, name = "lang") String lang,
			@RequestParam(required = false, name = "term") String term)
			throws JSONException, RestClientException, UnirestException {

		token = apiAuth.getToken();
		logger.info("token obtained is" + token);
		ResponseEntity<String> airportDetails = restData.fetchAirportDetails(token, size, page, lang, term);
		logger.info("Airport Details are" + airportDetails);
		return airportDetails;

	}

	/**
	 * retrieves airport by code from service mock api
	 * @param code
	 * @param lang
	 * @return
	 * @throws JSONException
	 * @throws RestClientException
	 * @throws UnirestException
	 */
	@RequestMapping(method = RequestMethod.GET, value = "/getAirport/{code}")
	public ResponseEntity<String> fetchAirportByCode(@PathVariable String code,
			@RequestParam(required = false, name = "lang") String lang)
			throws JSONException, RestClientException, UnirestException {

		token = apiAuth.getToken();
		logger.info("token obtained is" + token);
		ResponseEntity<String> airportCode = restData.fetchAirportByCode(token, code, lang);
		logger.info("Airport Details are" + airportCode);
		return airportCode;

	}
}
