document.addEventListener("DOMContentLoaded", () => {
    const currentContainer = document.getElementById("current-announcement");
    const pastContainer = document.getElementById("announcement-container");
  
    // Fetch the announcements from the JSON file
    fetch("announcements.json")
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to load announcements.json");
        }
        return response.json();
      })
      .then(announcements => {
        console.log(announcements); // Log the loaded announcements to the console
  
        const now = new Date();
  
        announcements.forEach(({ date, title, message }) => {
          const announcementDate = new Date(date);
          const daysOld = (now - announcementDate) / (1000 * 60 * 60 * 24);
  
          const div = document.createElement("div");
          div.className = "announcement";
          div.innerHTML = `
            <h3>[${announcementDate.toDateString()}] ${title}</h3>
            <p>${message}</p>
          `;
  
          // If the announcement is older than 7 days, put it in the past updates section
          if (daysOld > 7) {
            pastContainer.appendChild(div);
          } else {
            currentContainer.appendChild(div);
          }
        });
      })
      .catch(error => console.error("Error loading announcements:", error));
  });
  