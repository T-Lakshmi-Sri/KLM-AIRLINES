package com.KLM.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.KLM.auth.SimpleTravelApiAuth;

import com.mashape.unirest.http.exceptions.UnirestException;



@RestController
public class FetchDetailsController {

	@Autowired
	public SimpleTravelApiAuth apiAuth;
	@Autowired
	public RESTDataConsumer restData;

	String token="test";
	@RequestMapping(method=RequestMethod.GET,value="/getFare/{source}/{destination}")
	public ResponseEntity<FareDetails>  fetchFareDetails(@PathVariable String source,@PathVariable String destination,@RequestParam(required = false,name="currency")  String currency ) throws UnirestException {
		token=apiAuth.getToken();
		ResponseEntity<FareDetails> resp=restData.fetchFairDetails(token,source,destination,currency);
		return resp;

	}

	@RequestMapping(method=RequestMethod.GET,value="/getAirportDetails")
	public ResponseEntity<String>  fetchAirportDetails(
			@RequestParam(required = false,name="size") String size,
			@RequestParam(required = false,name="page") String page,
			@RequestParam(required = false,name="lang") String lang,
			@RequestParam(required = false,name="term") String term
			) throws UnirestException {


		token=apiAuth.getToken();
		ResponseEntity<String> resp=restData.fetchAirportDetails(token,size,page,lang,term);
		return resp;

	}

	@RequestMapping(method=RequestMethod.GET,value="/getAirport/{code}")
	public ResponseEntity<String>  fetchAirportByCode(@PathVariable String code,@RequestParam(required = false,name="lang")  String lang ) throws UnirestException {

		token=apiAuth.getToken();
		ResponseEntity<String> resp=restData.fetchAirportByCode(token,code,lang);
		return resp;

	}
}
