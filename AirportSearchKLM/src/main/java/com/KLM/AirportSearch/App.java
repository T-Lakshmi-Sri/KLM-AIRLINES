package com.KLM.AirportSearch;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("com.KLM.Controller")
@ComponentScan("com.KLM.Statistics")
@ComponentScan("com.KLM.auth")
public class App {
	public static void main(String[] args) {
		SpringApplication.run(App.class, args);
	}
}
