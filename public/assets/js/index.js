const targetSearch = $("#exTargetBtn");
const addToRoutine = $("#addToRoutineBtns");
const signUpFormElement = $("#signup-form");
const logoutYesBtn = $(`#yes-logout`);
const loginFormElement = $("#login-form");
const loginBtn = $("#login-btn");
const signupBtn = $("#signup-btn");
const logoutNoBtn = $(`#no-logout`);
const renderCreateRoutineButton = $("#create-new-routine");
const createRoutineFormElement = $("#create-form");

const goToLogin = () => {
    window.location.replace("/login");
};

const goToSignup = () => {
    window.location.replace("/sign-up");
};

const handleLogin = async(event) => {
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

const handleSignUp = async(event) => {
    event.preventDefault();

    const firstName = $("#first-name-input").val();
    const lastName = $("#last-name-input").val();
    const username = $("#username-input").val();
    const email = $("#email-input").val();
    const password = $("#password-input").val();
    const confirmPassword = $("#confirm-password-input").val();
    const age = $("#age-select :selected").text();
    const location = $("#location-select :selected").text();

    if (!firstName || !lastName) {
        return alert("Please enter your full name");
    }

    if (!username) {
        return alert("Please enter a username");
    }

    if (password.length < 8) {
        return alert("Password must be 8 or more characters");
    }

    if (password.length > 20) {
        return alert("Password must be 20 characters or less");
    }

    if (password !== confirmPassword) {
        return alert("Passwords do not match");
    }

    if (age === "Select an option") {
        return alert("Please enter your age");
    }

    if (location === "Select a location") {
        return alert("Please select a location");
    }
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
            location,
        }),
    });

    const data = await response.json();

    console.log(data);

    if (data.success) {
        alert("Signup Successful");
        window.location.replace("/login");
    }
};

const handleExTarget = async(event) => {
    event.preventDefault();
    const target = $("#exTarget").val();
    //   console.log(target);
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

const handleYesLogout = async() => {
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

const handleCreateRoutine = async(event) => {
    event.preventDefault();

    const routineName = $("#routine-name").val();
    const routineDate = $("#routine-date").val();
    const routineStart = $("#routine-start").val();
    const routineEnd = $("#routine-end").val();

    if (!routineName) {
        alert("Please enter a routine name.");
    } else if (!routineDate) {
        alert("Please enter a date");
    } else if (!routineStart) {
        alert("Please enter a start time");
    } else if (!routineEnd) {
        alert("Please enter a end time");
    }

    const response = await fetch("/api/routines", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            routineName,
            routineDate,
            routineStart,
            routineEnd,
        }),
    });

    const data = await response.json();
    console.log(data);
};

const handleAddToRoutine = async(event) => {
    const target = $(event.target);

    const exercise = {
        target: target.attr("data-target"),
        id: target.attr("data-id"),
        image: target.attr("data-gifUrl"),
        exercise_name: target.attr("data-exercise"),
        routine_id: $("#routTarget").val(),
    };

    const response = await fetch(`/api/exercise`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(exercise),
    });
    const data = await response.json();
    console.log(data);
};

const goToRoutine = (event) => {
    const target = $(event.target);

    if (target.is("button" || "h5")) {
        const routineId = target.data("id");

        window.location.replace(`/routines/${routineId}`);
    }
};

const renderCreateRoutine = (event) => {
    window.location.replace("/create-routine");
};

loginBtn.on("click", goToLogin);
signupBtn.on("click", goToSignup);
signUpFormElement.on("submit", handleSignUp);
logoutYesBtn.on("click", handleYesLogout);
logoutNoBtn.on("click", handleNoLogout);
targetSearch.on("click", handleExTarget);
addToRoutine.on("click", handleAddToRoutine);
loginFormElement.on("submit", handleLogin);
logoutNoBtn.on("click", handleNoLogout);
renderCreateRoutineButton.on("click", renderCreateRoutine);
createRoutineFormElement.on("submit", handleCreateRoutine);
$(`.btn-routine-title`).on("click", goToRoutine);