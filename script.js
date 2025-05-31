// GitHub username
const GITHUB_USERNAME = 'abhinavagg810';

// Function to fetch GitHub profile data
async function fetchGitHubProfile() {
    try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        
        if (!response.ok) {
            throw new Error('Failed to fetch GitHub profile');
        }

        const data = await response.json();
        
        // Update profile picture
        const avatarElement = document.getElementById('github-avatar');
        avatarElement.src = data.avatar_url;
        
        // Update name
        const nameElement = document.getElementById('github-name');
        nameElement.textContent = data.name || GITHUB_USERNAME;
    } catch (error) {
        console.error('Error fetching GitHub profile:', error);
    }
}

// Fetch profile data when the page loads
document.addEventListener('DOMContentLoaded', fetchGitHubProfile);
