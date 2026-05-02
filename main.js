function username_password () {
    let username = document.getElementById('input1').value;
    let password = document.getElementById('input2').value;
    const btn = document.getElementById('btn');

    if (username === 'Franchesca Dela Rosa' && password === 'OBMCGH') {
        window.alert('You have successfully logged in! Welcome, Franchesca Dela Rosa!');
        window.location.href = "#";
        return;
    } else {
        window.alert('Incorrect username and/or password. You have ' + clickCount + ' more attempt/s. Please try again.');
    }
}
// button click count
    let clickCount = 3;

    btn.addEventListener('click', () => {
        clickCount--;

        if (clickCount == -1 ) {
            btn.disabled = true;
        }
    });

// Instructions
function toggle_instructions() {
    document.getElementById('toggle').innerHTML = 'Kindly fill up the following details. After doing so, click the login button to successfully log in to your account. If the password and/or username is incorrect, please try again.';
}

// Stay Logged In
function logged_in() {
    const checkbox = document.getElementById('stay');
    const output = document.getElementById('output');

    if (!checkbox || !output) {
        console.warn('Checkbox or output element not found!');
        return; 
    }

    if (checkbox.checked) {
        output.innerHTML = 'Your session will stay active on this device.';
    } else {
        output.innerHTML = '';
    }
}

function previewimage(event) {
            const reader = new FileReader();
            reader.onload = function() {
                const output = document.getElementById('preview');
                output.src = reader.result;
            }
            reader.readAsDataURL(event.target.files[0]);
        }