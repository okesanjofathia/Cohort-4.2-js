/**
 * Function JavaScript funtion syntax,
 * passing data to functions,
 * the return keyword,
 * ES6 arrow functions, and
 * Concise body syntax.
 * Function is a reusable piece of code for performing specific task.
 */

/**
 * Ways of declaring function
 * 1. Function Declaration
 * 2. Function Expression
 * 3. Arrow Function
 */

/**
 * 1. Function Declaration: This can be created by writing the function keyword 
 * followed by function name, parenthesis () and curly braces. 
 */
function functionName() {};
function name(params) {};

/**
 * 2. Function Expression: This can be created by storing a function inside of a variable
 */
  let sayHello = function name(params) {};

  /**
   * 3. Arrow Function: This can be created by replacing the function keyword in function expression with an arrow 
   */
  let welcomeStudent  = () => {};

  /**
   * Calling or invoking a Function
   * A function can be called by writing the function name followed by a parenthesis
   */
  functionName();
  sayHello();
  welcomeStudent();
  /**
   * Parameters and Arguements
   * Parameter(s) is a placeholder expecting a value or values, 
   * Whereas, Arguement is the real value for parameter on calling or
   * invoking a function
  //  */
  // let calculatePerimeterofArectangle = (parameter) => {};
  // calculatePerimeterofArectangle(arguement);

  /**
   * Function body: The expression/code/logic inside of the curly braces is the function body
   */
  let loggedInuser = () => {
    // function body
  };
  loggedInuser()

  /**
   * The "return" keyword is used to execute the body of the function.
   */
  let greetStudent = (firstName) => {
    return `You are welcome ${firstName}`;
  }
  console.log(greetStudent("Marusoft"))

  /**
   * Concise Body Function can be achieved for omitting the return keyword and the curly braces
   */
  let greetStudentagain = (firstName) => `You are welcome ${firstName}`;

  /**
   * 
   */
  let favouriteColorandCity = function (color,city) {
    return `I love ${color} color and would like to visit ${city}`
  }
  let colorAndcity = favouriteColorandCity("Dodgerblue", "Lagos")
  console.log('colorAndcity ==>', colorAndcity)
  /**
   * Classwork
   * Write a JS to calculate the volume of a sphere
   * Hint v= 4/3 * PI * r * r * r
  //  */
  // let volumeOfaSphere = function (r) => {
  //   const PI = Math.PI;
  //   return (4/3) * PI * r * r * r;
  // } 
  // let sphereResult = volumeOfaSphere(4)
  // console.log('sphereResult', sphereResult)

  /**
   * CLASSWORK
   * Write a JS program to calculate the area of a circle
   */
  let areaOfaCircle = (r) => {
    const PI = Math.PI
    return PI * r * r;
  }
  let areaResult = areaOfaCircle(5)
  console.log('areaResult', areaResult)

  /**
   * classwork
   *  Write a JS program to capitalize a string
   */
  const capitalizeString = (string) => {
    return `${string.toUpperCase()}`;
  } ;
  let stringInupperCase1 = capitalizeString("mubarak")
  let stringInupperCase2 = capitalizeString("fathia")
  let stringInupperCase3 = capitalizeString("aliyah")
  let stringInupperCase4 = capitalizeString("david")
  console.log('stringInupperCase: ==>', stringInupperCase1)
  console.log('stringInupperCase: ==>', stringInupperCase2)
  console.log('stringInupperCase: ==>', stringInupperCase3)
  console.log('stringInupperCase: ==>', stringInupperCase4)
  /**
   * ClAsSwOrK
   * Write a js program to welcome a loggedInuser on a 
   * website platform.The function should take two parameters: email and password
   * and return the expression `${email} is successfully logged in on the dashboard`
   */
   let welcomeUsers = (email, password) => {
    let passCode = "ope1234"
    let emailAddress = "okesanjofathia@gmail.com"
    if (password === passCode && email === emailAddress) {
      return `${email} is successfully logged in on the dashboard`
    }
    else{
        return `Either email or password is incorrect`;
    }
   };
   let successfullyWelcomeuser = welcomeUsers("okesanjofathia@gmail.com", "ope124")
   console.log('successfulyLoggedin =>',successfullyWelcomeuser)

   /**
    * classWORK
    * Write a js program to abbreviate your middleName
    * and display the expression `Welcome Alimi M. Kehinde`
    */
   let abbreviateName = (firstName, middleName, lastName) => { 
   return `Welcome ${firstName} ${middleName[0]}. ${lastName}`
   }
   let successfullyWelcome = abbreviateName("Okesanjo","Fathia", "Opeyemi")
   console.log(successfullyWelcome)
   /**
    * CLASSwork
    * Write a js function to classify individuals based on their age
    */
   let classification = (age) => { 
   if (age <= 12){
   return "A pre-teen";
   }
   else if(age >= 18){
   return "An Adult";;
   }
   else{
   return "A teenager";
   }
  };
  let classifiedIndividuals = classification
   console.log('ClassifiedIndividuals =>', classifiedIndividuals(12));
   console.log('ClassifiedIndividuals =>', classifiedIndividuals(15));
   console.log('ClassifiedIndividuals =>', classifiedIndividuals(18));
   console.log('ClassifiedIndividuals =>', classifiedIndividuals(42));
   