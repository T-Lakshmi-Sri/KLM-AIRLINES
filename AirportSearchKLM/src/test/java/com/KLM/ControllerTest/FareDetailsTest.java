package com.KLM.ControllerTest;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

import com.KLM.Controller.FareDetails;

public class FareDetailsTest {

	@Test
	public void fareDetailsSuccessRetrieval() {

		FareDetails fare = new FareDetails();

		double amount = 100;
		fare.setAmount(amount);
		assertEquals(amount, fare.getAmount(), 0);
		String currency = "EUR";
		fare.setCurrency(currency);
		assertEquals(currency, fare.getCurrency());
		String origin = "USA";
		fare.setOrigin(origin);
		assertEquals(origin, fare.getOrigin());
		String destination = "INDIA";
		fare.setDestination(destination);
		assertEquals(destination, fare.getDestination());
	}
}
