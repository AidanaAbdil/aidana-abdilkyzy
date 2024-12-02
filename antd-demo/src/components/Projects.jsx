import React, { useState, useEffect } from "react";
import { AntDesignOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Space } from "antd";

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const githubUsername = "AidanaAbdil";
  const selectedRepos = [
    "final-project-servicely",
    "react-images",
    "hackathon-3",
  ];

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${githubUsername}/repos`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        const data = await response.json();
        const filteredRepos = data.filter((repo) =>
          selectedRepos.includes(repo.name)
        );
        setRepos(filteredRepos);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRepos();
  }, []);

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="container">
        {repos.map((repo) => (
          <div className="projects-list">
            <h3>{repo.name}</h3>
            <p>{repo.description || "No description available."}</p>
            <ConfigProvider>
              <Button
                type="primary"
                size="large"
                onClick={() =>
                  window.open("https://github.com/AidanaAbdil", "_blank")
                }
              >
                View on GitHub
              </Button>
            </ConfigProvider>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
