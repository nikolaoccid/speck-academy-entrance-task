function handleSubmit(e) {
  //Prevent page reload
  e.preventDefault();

  //Get form data
  let technologyInput = document.getElementById("technology");

  //If no data is passed do nothing
  if (technologyInput.value === '') {
    return
  }

  //Get div where we want to store entered data from the form
  const technologyDiv = document.getElementsByClassName('technologies');

  //Create li element and push ih to technologies ul
  let li = document.createElement("li");
  li.setAttribute('class', 'item center');

  //Add input text to the li element
  li.appendChild(document.createTextNode(technologyInput.value));

  //Get spacer element
  const lastNode = document.getElementsByClassName('spacer')

  //Inject li element in the DOM before spacer(for CSS purposes)
  technologyDiv[0].insertBefore(li, lastNode[0]);

  //Reset input field
  technologyInput.value='';
}

function removeAllItems() {
  //Get added technologies
  const technologyDiv = document.getElementsByClassName('technologies')

  //Remove added technologies
  technologyDiv[0].innerHTML='';

}