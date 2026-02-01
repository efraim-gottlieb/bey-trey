import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let posts = [];
let apiCallTimes = [];

function displayMenu() {
  console.log("\n=== MENU ===");
  console.log("1. Fetch 10 Posts");
  console.log("2. Display Post Statistics");
  console.log("3. Display API Performance Statistics");
  console.log("4. Exit");
  console.log("============\n");
}

function promptUser(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}


async function fetchPosts() {
  console.log("Loading posts...");
  const startTime = Date.now();
  posts = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
  console.log('Posts fetched.');
  const endTime = Date.now();
  const runTime = endTime - startTime;
  console.log(runTime);
  apiCallTimes.push(runTime);
}

// 5. Store the duration in apiCallTimes array

// Option 2: Display post statistics
function displayPostStatistics() {
  // TODO: Implement this function
}

// Option 3: Display API performance statistics
function displayApiPerformance() {
  // TODO: Implement this function
}

// Main function to run the application
async function main() {
  let running = true;

  while (running) {
    displayMenu();
    const choice = await promptUser("Enter your choice (1-4): ");

    switch (choice) {
      case "1":
        await fetchPosts();
        break;
      case "2":
        displayPostStatistics();
        break;
      case "3":
        displayApiPerformance();
        break;
      case "4":
        console.log("Goodbye!");
        running = false;
        rl.close();
        break;
      default:
        console.log("Invalid choice. Please enter 1, 2, 3, or 4.");
    }
  }
}

// Run the application
main();
