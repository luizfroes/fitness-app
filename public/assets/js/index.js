console.log("Hello, world!!");

const targetSearch = $("#exTargetBtn");

const addToRoutine = $("#addToRoutineBtns");

const signUpFormElement = $("#signup-form");
const loginFormElement = $("#login-form");

const logoutYesBtn = $(`#yes-logout`);

const logoutNoBtn = $(`#no-logout`);

const handleLogin = async (event) => {
  event.preventDefault();

  const email = $("#email-input").val();
  const password = $("#password-input").val();

  if (!email) {
    alert("Please provide an email and password");
  } else if (!password) {
    alert("Please provide a password");
  } else {
    const response = await fetch("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    console.log(data);

    if (data.success) {
      alert("Login Successful");
      window.location.replace("/dashboard");
    }
  }
};

const handleSignUp = async (event) => {
  event.preventDefault();

  const firstName = $("#first-name-input").val();
  const lastName = $("#last-name-input").val();
  const username = $("#username-input").val();
  const email = $("#email-input").val();
  const password = $("#password-input").val();
  const confirmPassword = $("#confirm-password-input").val();
  const age = $("#age-select :selected").text();

  if (password.length < 8) {
    alert("Password must be 8 or more characters");
  } else if (password.length > 20) {
    alert("Password must be 20 characters or less");
  } else if (password !== confirmPassword) {
    alert("Passwords do not match");
  } else {
    const response = await fetch("/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        user_name: username,
        email,
        password,
        age,
      }),
    });

    const data = await response.json();

    console.log(data);

    if (data.success) {
      alert("Successfully created account");
      window.location.replace("/login");
    }
  }
};

const handleExTarget = async (event) => {
  event.preventDefault();
  const target = $("#exTarget").val();
  console.log(target);
  const response = await fetch(`/exercises/${target}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace(`/exercises/${target}`);
  } else {
    alert("Failed to find exercises");
  }
};

const handleYesLogout = async () => {
  const response = await fetch("/auth/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (data.success) {
    window.location.replace("/");
  }
};

const handleNoLogout = () => {
  window.location.replace("/dashboard");
};

const handleAddToRoutine = async (exercise) => {
  const target = $("#routTarget").val();
  console.log(target);
  console.log(exercise);
};
signUpFormElement.on("submit", handleSignUp);

logoutYesBtn.on("click", handleYesLogout);

logoutNoBtn.on("click", handleNoLogout);

targetSearch.on("click", handleExTarget);

addToRoutine.on("click", handleAddToRoutine);
