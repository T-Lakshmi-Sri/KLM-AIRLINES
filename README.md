AirPort Search for KLM AIRLINES 
===============================

In Order to retrieve the endpoint service-mock-api needs to be started. Below are the steps to start mock-servive-api

[![Build Status](https://drone.io/bitbucket.org/afklmdevnet/simple-travel-api-mock/status.png)](https://drone.io/bitbucket.org/afklmdevnet/simple-travel-api-mock/latest)

Clone this repo and start the mock (on windows systems use the gradlew.bat file):

`./gradlew bootRun`

to list all tasks:

`./gradlew tasks`

After running travel-service-mock we should run KLMAirportSearch

Clone this repo and start the KLMAirportSearch using

`./mvn spring-boot:run`  

The mock resources are consumed and authenticated by KLM Airport Search 
 
Resource endpoints:
-------------------

**Retrieve a list of airports**:

`http://localhost:8880/getAirportDetails`

Query params:

- size: the size of the result
- page: the page to be selected in the paged response
- lang: the language, supported ones are nl and en
- term: A search term that searches through code, name and description.

**Retrieve a specific airport**:

`http://localhost:8880/getAirport/{code}`

Query params:

- lang: the language, supported ones are **nl** and **en**

**Retrieve a fare offer**:

`http://localhost:8880/getFare/{origin_code}/{destination_code}`

Query params:

- currency: the requested resulting currency, supported ones are EUR and USD


This project fetches airport details and after selection of specific origin and destination user will be able to fetch fare.


# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

 

