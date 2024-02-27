function city_country(city: string, country: string): string {
    return `"${city.toUpperCase()}, ${country.toUpperCase()}"`;
  }
  
  // Call the function with three city-country pairs and print the result
  console.log(city_country("Lahore", "Pakistan"));
  console.log(city_country("Tokyo", "Japan"));
  console.log(city_country("London", "England"));