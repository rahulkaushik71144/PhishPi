
const protocol = window.location.protocol;

if (protocol === "https:") {
  // Create a message element and append it to the page
  const message = document.createElement("div");
  message.innerText = "Website is secure";
  message.style.backgroundColor = "green";
  message.style.color = "white";
  message.style.padding = "10px";
  message.style.position = "fixed";
  message.style.top = "0";
  message.style.left = "0";
  message.style.width = "100%";
  message.style.zIndex = "9999";
  document.body.appendChild(message);

  // Remove the message element after 1 second
  setTimeout(() => {
    message.remove();
  }, 1000);
} else {
  window.stop();
  // Create a container element and append it to the page
  const container = document.createElement("div");
  container.style.backgroundColor = "red";
  container.style.position = "fixed";
  container.style.top = "0";
  container.style.left = "0";
  container.style.width = "100%";
  container.style.height = "100%";
  container.style.zIndex = "9999";
  document.body.appendChild(container);

  // Create a message element and append it to the container
  const message = document.createElement("div");
  message.innerText = "Website is not secure. Do you want to continue?";
  message.style.color = "black";
  message.style.fontSize = "20px"
  message.style.padding = "10px";
  container.appendChild(message);
  window.stop();

  // Create a button to load the website
  const button = document.createElement("button");
  button.innerText = "Load anyway";
  button.style.margin = "10px";
  button.addEventListener("click", () => {
    container.remove();
  });
  message.appendChild(button);

}
