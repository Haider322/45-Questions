function make_shirt(size: string = "large", message: string = "I love TypeScript") {
    console.log(`Making a ${size} shirt with the message: "${message}"`);
  }
  
  // Make a large shirt (with default size and message)
  make_shirt();
  
  // Make a medium shirt (specifying size, using default message)
  make_shirt("medium");
  
  // Make a shirt with a different size and message
  make_shirt("small", "Code with passion!");