function describe_city(city: string, country: string = "Pakistan"): void {
    console.log(`${city.toUpperCase()} is in ${country.toUpperCase()}.`);
  }
  
  // Call the function for three different cities
  describe_city("Karachi");
  describe_city("London", "England");
  describe_city("Tokyo", "Japan");