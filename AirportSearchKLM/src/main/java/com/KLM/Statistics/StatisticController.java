package com.KLM.Statistics;

import org.json.JSONException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestClientException;

import com.mashape.unirest.http.exceptions.UnirestException;

@RestController
public class StatisticController {

	@Autowired(required = true)
	public StatisticData statisticData;

	@Value("${simple-travel-api.statistic.url}")
	private String airportsUrl;

	private static final Logger logger = LoggerFactory.getLogger(StatisticController.class);

	/**
	 * retrieves statistics from metrics
	 * @return
	 * @throws JSONException
	 * @throws RestClientException
	 * @throws UnirestException
	 */
	@RequestMapping(method = RequestMethod.GET, value = "/getStatisticData")
	public ResponseEntity<String> fetchStatistics() throws JSONException, RestClientException, UnirestException {
		ResponseEntity<String> statistics = statisticData.fetchStatisticData();
		logger.info("Statistics are" + statistics);
		return statistics;

	}

}
