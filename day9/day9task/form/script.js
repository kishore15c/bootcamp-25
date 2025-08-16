let submissionCount = 0;

document
  .getElementById("userForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    if (!event.target.checkValidity()) {
      event.target.reportValidity();
      return;
    }

    submissionCount++;
    const formData = new FormData(event.target);
    let tableHTML = `<h4>Submission ${submissionCount}</h4><table><tbody>`;

    formData.forEach((value, key) => {
      tableHTML += `<tr><th>${
        key.charAt(0).toUpperCase() + key.slice(1)
      }</th><td>${value}</td></tr>`;
    });

    tableHTML += "</tbody></table>";
    document.getElementById("outputContainer").innerHTML += tableHTML;
    event.target.reset();
  });
