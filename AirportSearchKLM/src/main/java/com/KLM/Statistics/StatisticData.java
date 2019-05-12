package com.KLM.Statistics;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@Component
public class StatisticData {

	@Value("${simple-travel-api.statistic.url}")
	private String statisticUrl;

	private static final Logger logger = LoggerFactory.getLogger(StatisticData.class);

	/**
	 * retrieves statistics data from metrics
	 * @return
	 */
	public ResponseEntity<String> fetchStatisticData() {

		RestTemplate restTemplate = generateRestTemplate();
		String url = statisticUrl;
		UriComponentsBuilder uriBuilder = UriComponentsBuilder.fromHttpUrl(url);
		logger.info("statisticUrl" + statisticUrl);
		ResponseEntity<String> statisticData = restTemplate.getForEntity(uriBuilder.toUriString(), String.class);
		logger.info("statisticData" + statisticData);
		return statisticData;

	}
	/**
	 * generated rest template
	 * @return
	 */
	protected RestTemplate generateRestTemplate() {
		return new RestTemplate();
	}
}
