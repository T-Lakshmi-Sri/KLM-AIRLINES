package com.KLM.Statistics;

import static org.junit.Assert.assertEquals;

import org.easymock.EasyMock;
import org.junit.Before;
import org.junit.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.util.ReflectionTestUtils;
import org.springframework.web.client.RestTemplate;

public class StatisticDataTest {

	private StatisticData classUnderTest;
	private RestTemplate mockTemplate;
	ResponseEntity<String> status = new ResponseEntity<String>(HttpStatus.OK);

	@Before
	public void setUp() {
		classUnderTest = new StatisticData() {

			@Override
			protected RestTemplate generateRestTemplate() {
				mockTemplate = EasyMock.createMock(RestTemplate.class);
				EasyMock.expect(mockTemplate.getForEntity(
						"http://localhost:8880/travel/actuator/metrics/http.server.requests", String.class))
						.andReturn(status);
				ReflectionTestUtils.setField(classUnderTest, "statisticUrl",
						"http://localhost:8880/travel/actuator/metrics/http.server.requests");
				EasyMock.replay(mockTemplate);
				return mockTemplate;
			}
		};
	}

	@Test
	public void fetchStatisticDataTest() {
		ResponseEntity<String> response = classUnderTest.fetchStatisticData();
		assertEquals(status.getStatusCode(), response.getStatusCode());

	}

}
