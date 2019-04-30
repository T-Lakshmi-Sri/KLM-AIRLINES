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
 

