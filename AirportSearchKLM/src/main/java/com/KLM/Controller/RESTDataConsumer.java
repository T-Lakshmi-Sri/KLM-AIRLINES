package com.KLM.Controller;

import java.net.URI;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

import org.apache.commons.codec.binary.Base64;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.util.UriComponentsBuilder;

import com.mashape.unirest.http.Unirest;


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
	
	
	
	public  ResponseEntity<FareDetails>  fetchFairDetails (String token,String source,String destination,String currency) {
		
		RestTemplate restTemplate=new  RestTemplate();
	
		String url = simpleTravelFareUrl+source+"/"+destination;


		// Use the access token for authentication
		HttpHeaders headers1 = new HttpHeaders();
		headers1.add("Authorization", "Bearer " + token);
		HttpEntity<String> entity = new HttpEntity<>(headers1);
		
		UriComponentsBuilder uriBuilder = UriComponentsBuilder.fromHttpUrl(url);
				
				if(StringUtils.isEmpty(currency)) {
					currency="EUR";
				}
				else if(currency.equalsIgnoreCase("EUR") || currency.equalsIgnoreCase("USD")) {
					
				}
				else {
					currency="EUR";
				}
		uriBuilder.queryParam("currency", currency);
					
	    
		ResponseEntity<FareDetails> res = restTemplate.exchange(uriBuilder.toUriString(), HttpMethod.GET, entity, FareDetails.class);
		
		
		
		return res;
		
	}
	
public  ResponseEntity<String>  fetchAirportDetails (String token,String size,String page,String lang,String term) {
		
		
		
		RestTemplate restTemplate=new  RestTemplate();
		
	
		String url = airportsUrl;
		System.out.println("url is "+url);


		// Use the access token for authentication
		HttpHeaders headers1 = new HttpHeaders();
		headers1.add("Authorization", "Bearer " + token);
		HttpEntity<String> entity = new HttpEntity<>(headers1);
		
		UriComponentsBuilder uriBuilder = UriComponentsBuilder.fromHttpUrl(url);
		if(!StringUtils.isEmpty(size)) {
			uriBuilder.queryParam("size", size);
		}
		if(!StringUtils.isEmpty(page)) {
			uriBuilder.queryParam("page", page);
		}
          
		if(!StringUtils.isEmpty(lang)) {
			uriBuilder.queryParam("lang", lang);
		}
          
		if(!StringUtils.isEmpty(term)) {
			uriBuilder.queryParam("term", term);
		}
           
		ResponseEntity<String> res = restTemplate.exchange(uriBuilder.toUriString(), HttpMethod.GET, entity, String.class);
				
		return res;
		
	}
	
//

public  ResponseEntity<String>  fetchAirportByCode (String token,String code,String lang) {
	
	
	RestTemplate restTemplate=new  RestTemplate();

	String url = airportsUrl+"/"+code;
	System.out.println("url is "+url);


	// Use the access token for authentication
	HttpHeaders headers1 = new HttpHeaders();
	headers1.add("Authorization", "Bearer " + token);
	HttpEntity<String> entity = new HttpEntity<>(headers1);
	
	UriComponentsBuilder uriBuilder = UriComponentsBuilder.fromHttpUrl(url);
	
	if(!StringUtils.isEmpty(lang)) {
		uriBuilder.queryParam("lang", lang);
	}
	ResponseEntity<String> res = restTemplate.exchange(uriBuilder.toUriString(), HttpMethod.GET, entity, String.class);
	return res;
	
}

}
