const githubUsername = 'AidanaAbdil';

    // Define the function to fetch repositories
    async function fetchRepositories() {
        try {
            // Fetch repositories from GitHub API
            const response = await fetch(`https://api.github.com/users/${githubUsername}/repos`);
            
            // Check if the response is ok (status code 200-299)
            if (!response.ok) {
                throw new Error('Error fetching repositories');
            }

            // Parse the JSON response
            const repositories = await response.json();

            // Get the element to display the projects
            const projectsList = document.getElementById('projects-list');

            const selectedRepos = ['final-project-servicely', 'react-images', 'generic-hipster-coffee','hackathon-3'];

            const filteredRepos = repositories.filter(repo => selectedRepos.includes(repo.name));

            
            // Loop through the repositories and display them
            filteredRepos.forEach(repo => {
                const projectDiv = document.createElement('div');
                projectDiv.classList.add('project');

                const projectTitle = document.createElement('h3');
                projectTitle.textContent = repo.name;

                const projectDescription = document.createElement('p');
                projectDescription.textContent = repo.description || 'No description available.';

                const projectLink = document.createElement('a');
                projectLink.href = repo.html_url;
                projectLink.textContent = 'View on GitHub';
                projectLink.target = '_blank';

                // Append the elements to the project div
                projectDiv.appendChild(projectTitle);
                projectDiv.appendChild(projectDescription);
                projectDiv.appendChild(projectLink);

                // Append the project div to the projects list
                projectsList.appendChild(projectDiv);
            });
        } catch (error) {
            console.error('Error fetching GitHub repositories:', error);
        }
    }

    // Call the function to fetch and display the repositories
    fetchRepositories();
