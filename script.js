// Listen for the form submit event
document.getElementById('myForm').addEventListener('submit', function(event) {
  // Prevent the form from submitting normally
  event.preventDefault();

  // Get the input field values
  const name = encodeURIComponent(document.getElementById('name').value);
  const year = encodeURIComponent(document.getElementById('year').value);

  // Construct the query string
  const queryString = `?name=${name}&year=${year}`;

  // Get the h3 element and update its text
  const urlElement = document.getElementById('url');
  urlElement.textContent = `https://localhost:8080/${queryString}`;
});