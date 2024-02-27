function describeCar(
    manufacturer: string,
    model: string,
    optionalInfo: { [key: string]: string } // No rest parameter for array
  ): { [key: string]: string } {
    const car: { [key: string]: string } = { manufacturer, model };
  
    // Combine optional information into the car object
    for (const [key, value] of Object.entries(optionalInfo)) {
      car[key] = value;
    }
  
    return car;
  }
  
  // Call the function with required information and optional features
  const toyotaCamry = describeCar("Toyota", "Camry", { color: "Red", feature: "Sunroof" });
  const hondaCivic = describeCar("Honda", "Civic", { mileage: "20,000 miles" });
  
  console.log("Toyota Camry:", toyotaCamry);
  console.log("Honda Civic:", hondaCivic);