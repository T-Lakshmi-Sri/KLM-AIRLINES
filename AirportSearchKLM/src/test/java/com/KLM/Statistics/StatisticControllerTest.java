package com.KLM.Statistics;

import static org.junit.Assert.assertEquals;

import org.easymock.EasyMock;
import org.json.JSONException;
import org.junit.Before;
import org.junit.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.util.ReflectionTestUtils;
import org.springframework.web.client.RestClientException;

import com.mashape.unirest.http.exceptions.UnirestException;

public class StatisticControllerTest {

	private StatisticController classUnderTest;

	private StatisticData mockData;

	@Before
	public void setUp() {
		classUnderTest = new StatisticController();
		mockData = EasyMock.createMock(StatisticData.class);
		ReflectionTestUtils.setField(classUnderTest, "statisticData", mockData);
	}

	@Test
	public void fetchStatistics() throws RestClientException, JSONException, UnirestException {
		ResponseEntity<String> statistic = new ResponseEntity<String>(HttpStatus.OK);
		EasyMock.expect(mockData.fetchStatisticData()).andReturn(statistic);
		EasyMock.replay(mockData);
		ResponseEntity<String> actual = classUnderTest.fetchStatistics();
		assertEquals(HttpStatus.OK, actual.getStatusCode());
	}

}
