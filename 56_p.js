// What is the way to get the status of a CheckBox?

// If the check box will be checked, this alert will return true.
// properties are assigned to objects in the following way
// Example is as follows:
// console.log(document.getElementById("checkbox1").checked);

function getStatus() {
  if (document.getElementById("checkbox").checked) {
    console.log("checkbox is checked");
  } else {
    console.log("checkbox is unchecked");
  }
}

<input type="checkbox" id="checkbox" onblur="getStatus()" />;
getStatus();
