const content = [
  {
    id: 1,
    title: "Introduction to JavaScript",
    description: "A beginner's guide to JavaScript programming.",
    tags: ["programming", "javascript"],
  },
  {
    id: 2,
    title: "Advanced CSS Techniques",
    description: "Explore advanced techniques for styling web pages with CSS.",
    tags: ["css", "web design"],
  },
  {
    id: 3,
    title: "Understanding Asynchronous JavaScript",
    description:
      "Learn about asynchronous JavaScript and how to handle asynchronous operations.",
    tags: ["javascript", "asynchronous"],
  },
  {
    id: 4,
    title: "Introduction to React",
    description: "An introduction to building user interfaces with React.",
    tags: ["react", "javascript"],
  },
];

const data = document.getElementById("data");

function contents(filteredContent) {
  data.innerHTML = " ";
  filteredContent.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
            <h2>${item.title}</h2>
            <p>${item.description}</p>
            <h5>Tags: ${item.tags}</h5>
        `;
    data.appendChild(card);
  });
}
const searchInput = document.getElementById("searchInput");

function filterContent(query) {
  return content.filter((item) => {
    const searchIn =
      `${item.title} ${item.description} ${item.tags}`.toLowerCase();
    return searchIn.includes(query.toLowerCase());
  });
}

searchInput.addEventListener("input", () => {
  const query = searchInput.value;
  const filteredContent = filterContent(query);
  contents(filteredContent);
});

contents(content);
