var registeredUsers = []; // this array stores valid usernames until the next pageload

function validateForm(e) {
  e.preventDefault(); // stop the submit button from refreshing the page
  console.log("validating....");

  console.log("user name: " + validateUsername());
  console.log("first name: " + validateFirstName());
  console.log("last name: " + validateLastName());
  console.log("email: " + validateEmail());
  console.log("phone: " + validatePhone());
  console.log("password: " + validatePassword());

  if (
    validateUsername() &&
    validateFirstName() &&
    validateLastName() &&
    validateEmail() &&
    validatePhone() &&
    validatePassword()
  ) {
    var _newUser = {
      username: getUserName(),
      fname: getFirstName(),
      lname: getLastName(),
      email: getEmail(),
      phone: getPhone(),
      password: getPassword()
    };
    // add code to update registeredUsers array with new user and call render function
    // TODO
    registeredUsers.push(_newUser);
    renderRegisteredUsers();
    document.registration.reset(); // reset form input fields

    if ((registeredUsers.length = 5)) {
      registeredUsers.shift();
    }
  }
}

function renderRegisteredUsers() {
  document.getElementById("registered-users").innerHTML = "";
  registeredUsers.forEach(function(registeredUser) {
    var _newRegUser = document.createElement("li");
    _newRegUser.innerHTML =
      registeredUser.username +
      ", " +
      registeredUser.fname +
      ", " +
      registeredUser.lname +
      ", " +
      registeredUser.email +
      ", " +
      registeredUser.phone;
    document.getElementById("registered-users").appendChild(_newRegUser);
  });
}

/* original render fucntion
function renderRegisteredUsers() {
    document.getElementById("registered-users").innerHTML = "";
    registeredUsers.forEach(function(registeredUser) {
      var _newUser = document.createElement("li");
      _newUser.innerHTML = registeredUser;
      document.getElementById("registered-users").appendChild(_newUser);
    });
  } */

/**
 * this function supposely validates submitted username
 * @returns [Boolean] true when valid, false otherwise
 */
function validateUsername() {
  var _userName = getUserName();

  return !checkSpace(_userName);
}

function validateFirstName() {
  var _firstName = getFirstName();

  return _firstName !== "";
}

function validateLastName() {
  var _lastName = getLastName();

  return _lastName !== "";
}

/**
 * this function supposely validates submitted email
 * @returns [Boolean] true when valid, false otherwise
 */
function validateEmail() {
  var _email = getEmail();

  if (checkSpace(_email) === true) {
    return false;
  }

  // check for @
  var atSymbol = _email.indexOf("@");
  if (atSymbol < 1) {
    return false;
  }

  // check if there is a dot located less than 2 symbols away from the @ sign
  var dot = _email.indexOf(".");
  if (dot <= atSymbol + 2) {
    return false;
  }

  // check that the dot is not at the end
  if (dot === _email.length - 1) {
    return false;
  }

  return true;
}

function validatePhone() {
  var _phone = getPhone();

  if (isNaN(_phone)) {
    return false;
  }

  if (_phone.length < 6) {
    return false;
  }

  if (_phone.includes("+")) {
    return false;
  }

  return true;
}

/**
 * this function supposely validates submitted password
 * if password and confirmPassword do not match, return false
 *
 * @returns [Boolean] true when valid, false otherwise
 */
function validatePassword() {
  var _password = getPassword();
  var _confirmPassword = getConfirmPassword();

  if (_password !== _confirmPassword) {
    return false;
  }

  if (_password.length < 8) {
    return false;
  }

  // I want the password to include a number
  //   if (_password.includes(!NaN)) {
  //     return false;
  //   }

  return true;
}

/**
 * this function supposely checks whether the sample is an empty string
 * or there is space within it
 * @param [String] sample text to be evaluated
 * @returns [Boolean] true when valid, false otherwise
 */
function checkSpace(sample) {
  return sample === "" || sample.indexOf(" ") > -1;
}

/**
 * this function looks under the form with name "registration"
 * look under the "username" input field and returns the value of it
 * returns nothing if no value is found
 *
 * @returns [Boolean] true when valid, false otherwise
 */
function getUserName() {
  if (typeof document.registration.username.value === "undefined") {
    return "";
  } else {
    return document.registration.username.value;
  }
}

function getFirstName() {
  if (typeof document.registration.first_name.value === "undefined") {
    return "";
  } else {
    return document.registration.first_name.value;
  }
}

function getLastName() {
  if (typeof document.registration.last_name.value === "undefined") {
    return "";
  } else {
    return document.registration.last_name.value;
  }
}

function getEmail() {
  // TODO
  if (typeof document.registration.email.value === "undefined") {
    return "";
  } else {
    return document.registration.email.value;
  }
}

function getPhone() {
  if (typeof document.registration.phone.value === "undefined") {
    return "";
  } else {
    return document.registration.phone.value;
  }
}

function getPassword() {
  // TODO
  if (typeof document.registration.password.value === "undefined") {
    return "";
  } else {
    return document.registration.password.value;
  }
}

function getConfirmPassword() {
  // TODO
  if (typeof document.registration.password_confirm.value === "undefined") {
    return "";
  } else {
    return document.registration.password_confirm.value;
  }
}
