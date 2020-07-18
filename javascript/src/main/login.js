let attempt = 3; // Variable to count number of attempts.

// Below function Executes on click of login button.

function validate() {

    const mUserName = document.getElementById("mUserName").value;
    const mPassword = document.getElementById("mPassword").value;

    if (mUserName == "nikhil" && mPassword == "nikhil789") {

        alert("Login successfully");
        window.location = "success.html"; // Redirecting to success page.
        return false;
    } else {

        attempt--;// Decrementing by one.
        alert("You have left " + attempt + " attempt;");

        // Disabling fields after 3 attempts.
        if (attempt == 0) {

            document.getElementById("mUserName").disabled = true;
            document.getElementById("mPassword").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}