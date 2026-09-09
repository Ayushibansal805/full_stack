const usernameInput = document.querySelector("#username");
const fetchBtn = document.querySelector("#fetchBtn");
const profile = document.querySelector("#profile");
const status = document.querySelector("#status");

fetchBtn.addEventListener("click", async () => {

    const username = usernameInput.value.trim();

    if (!username) {
        status.textContent = "Please enter a GitHub username!";
        status.style.color = "red";
        return;
    }

    try {
        status.textContent = "Loading...";
        status.style.color = "black";
        profile.innerHTML = "";

        const url = `https://api.github.com/users/${username}`;

        const response = await fetch(url);

        // Agar user exist nahi karta
        if (!response.ok) {
            throw new Error("GitHub user not found!");
        }

        const user = await response.json();

        displayUser(user);

        status.textContent = "";

    } catch (error) {
        status.textContent = error.message;
        status.style.color = "red";

        profile.innerHTML = "";

        console.log(`Error caught: ${error.message}`);
    }

});


function displayUser(user) {

    profile.innerHTML = `
        <div class="profile-card">

            <img 
                src="${user.avatar_url}" 
                alt="${user.login}'s profile picture"
                class="profile-pic"
            >

            <h1>${user.name || user.login}</h1>

            <p class="username">@${user.login}</p>

            <p class="bio">
                ${user.bio || "No bio available"}
            </p>

            <div class="stats">
                <div>
                    <strong>${user.public_repos}</strong>
                    <span>Repositories</span>
                </div>

                <div>
                    <strong>${user.followers}</strong>
                    <span>Followers</span>
                </div>

                <div>
                    <strong>${user.following}</strong>
                    <span>Following</span>
                </div>
            </div>

            <div class="details">
                <p>📍 ${user.location || "Location not available"}</p>

                <p>🏢 ${user.company || "Company not available"}</p>

                <p>🐦 ${user.twitter_username || "Twitter not available"}</p>

                <p>📅 Joined: ${new Date(user.created_at).toDateString()}</p>
            </div>

            <a href="${user.html_url}" target="_blank">
                View GitHub Profile
            </a>

        </div>
    `;
}