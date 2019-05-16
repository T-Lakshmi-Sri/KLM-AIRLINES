package com.KLM.Controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@Component
public class RESTDataConsumer {

	@Value("${simple-travel-api.auth.username}")
	private String username;

	@Value("${simple-travel-api.auth.password}")
	private String password;

	@Value("${simple-travel-api.fares.url}")
	private String simpleTravelFareUrl;

	@Value("${simple-travel-api.allAirports.url}")
	private String airportsUrl;

	private static final Logger logger = LoggerFactory.getLogger(RESTDataConsumer.class);

	/**
	 * fetches fair details from service
	 * @param token
	 * @param source
	 * @param destination
	 * @param currency
	 * @return
	 * @throws RestClientException
	 */
	public ResponseEntity<FareDetails> fetchFairDetails(String token, String source, String destination,
			String currency) throws RestClientException {

		RestTemplate restTemplate = new RestTemplate();

		String url = simpleTravelFareUrl + source + "/" + destination;
		logger.info("Source " + source + " and Destination " + destination);
		HttpHeaders fairDetailsheaders = new HttpHeaders();
		fairDetailsheaders.add("Authorization", "Bearer " + token);
		HttpEntity<String> entity = new HttpEntity<>(fairDetailsheaders);

		UriComponentsBuilder uriBuilder = UriComponentsBuilder.fromHttpUrl(url);
		logger.info("URL is" + uriBuilder);

		if (StringUtils.isEmpty(currency)) {
			currency = "EUR";
		} else if (currency.equalsIgnoreCase("EUR") || currency.equalsIgnoreCase("USD")) {

		} else {
			currency = "EUR";
		}
		uriBuilder.queryParam("currency", currency);

		ResponseEntity<FareDetails> fairDetails = restTemplate.exchange(uriBuilder.toUriString(), HttpMethod.GET,
				entity, FareDetails.class);
		logger.info("fair details consumed are" + fairDetails);

		return fairDetails;

	}

	/**
	 * fetches airport details from service
	 * @param token
	 * @param size
	 * @param page
	 * @param lang
	 * @param term
	 * @return
	 * @throws RestClientException
	 */
	public ResponseEntity<String> fetchAirportDetails(String token, String size, String page, String lang, String term)
			throws RestClientException {

		RestTemplate restTemplate = new RestTemplate();

		String url = airportsUrl;

		logger.info("Fetch Airport Details URL" + url);

		HttpHeaders airportDetailsHeaders = new HttpHeaders();
		airportDetailsHeaders.add("Authorization", "Bearer " + token);
		HttpEntity<String> entity = new HttpEntity<>(airportDetailsHeaders);

		UriComponentsBuilder uriBuilder = UriComponentsBuilder.fromHttpUrl(url);
		if (!StringUtils.isEmpty(size)) {
			uriBuilder.queryParam("size", size);
		}
		if (!StringUtils.isEmpty(page)) {
			uriBuilder.queryParam("page", page);
		}

		if (!StringUtils.isEmpty(lang)) {
			uriBuilder.queryParam("lang", lang);
		}

		if (!StringUtils.isEmpty(term)) {
			uriBuilder.queryParam("term", term);
		}

		ResponseEntity<String> airportDetails = restTemplate.exchange(uriBuilder.toUriString(), HttpMethod.GET, entity,
				String.class);
		logger.info("Airport Details" + airportDetails);

		return airportDetails;

	}

	/**
	 * fetches airport using code from service
	 * @param token
	 * @param code
	 * @param lang
	 * @return
	 * @throws RestClientException
	 */
	public ResponseEntity<String> fetchAirportByCode(String token, String code, String lang)
			throws RestClientException {

		RestTemplate restTemplate = new RestTemplate();

		String url = airportsUrl + "/" + code;
		logger.info("Fetch Airport by Code URL" + url);

		HttpHeaders airportCodeHeaders = new HttpHeaders();
		airportCodeHeaders.add("Authorization", "Bearer " + token);
		HttpEntity<String> entity = new HttpEntity<>(airportCodeHeaders);

		UriComponentsBuilder uriBuilder = UriComponentsBuilder.fromHttpUrl(url);

		if (!StringUtils.isEmpty(lang)) {
			uriBuilder.queryParam("lang", lang);
		}
		ResponseEntity<String> airportByCode = restTemplate.exchange(uriBuilder.toUriString(), HttpMethod.GET, entity,
				String.class);
		logger.info("Fetch Airport by Code" + airportByCode);
		return airportByCode;

	}

}
