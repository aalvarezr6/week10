

const formButton = document.getElementById('formSubmit') //constant variable that it's a reference to the submit button

formButton.addEventListener('click', (event) => { //This adds an event listener to execute the button when it's clicked.
    event.preventDefault() //Prevents from refreshing when clicking the button.

    let firstName = document.getElementById('firstName').value //This retrieves input fields and access the value from the user.
    let lastName = document.getElementById('lastName').value
    let phoneNumber = document.getElementById('phoneNumber').value
    let emailAddress = document.getElementById('emailAddress').value


    let newTableRow = document.createElement('tr') //creates a new table row

    let firstNameNode = document.createElement('td') //this is what we use to create the new table row as we are adding data.
    firstNameNode.innerHTML = firstName
    newTableRow.append(firstNameNode) //This appends the new cell to the newTableRow element for each input.

    let lastNameNode = document.createElement('td')
    lastNameNode.innerHTML = lastName
    newTableRow.append(lastNameNode)

    let phoneNumberNode = document.createElement('td')
    phoneNumberNode.innerHTML = phoneNumber
    newTableRow.append(phoneNumberNode)

    let emailAddressNode = document.createElement('td')
    emailAddressNode.innerHTML = emailAddress
    newTableRow.append(emailAddressNode)

    document.getElementById('tBody').appendChild(newTableRow) //This appends the new row to the table.

    document.getElementById('firstName').value = '' //This is what resets the form after every input
    document.getElementById('lastName').value = ''
    document.getElementById('phoneNumber').value = ''
    document.getElementById('emailAddress').value = ''
})