document.addEventListener('DOMContentLoaded', function() {
    // Select the toggle input and the fieldset where the lists will be displayed
    const toggleDecaf = document.getElementById('decaf');
    const blendsList = document.getElementById('blends-list');

    // Define two different sets of <li> elements for each list
    const caffList = [
        { value: 'mexico', label: 'Mexico - Cesmach Coop' },
        { value: 'ritual', label: 'Ritual - House Blend' }
    ];

    const decafList = [
        { value: 'colombia', label: 'Colombia - Decaf de Cana' }
    ];

    // Function to display a list of <li> items in the fieldset
    function displayList(list) {
        // Clear the current content in the fieldset
        blendsList.innerHTML = '';

        // Create a <ul> element to hold the options
        const ul = document.createElement('ul');
        ul.className = 'order-builder';

        // Create a <legend> element for the options and append to <ul>
        const legend = document.createElement('legend');
        legend.appendChild(document.createElement('b'));
        legend.textContent = 'Blend Selection (12oz Bag)';
        ul.appendChild(legend);

        // Loop through the list and create <li> elements
        for (i = 0; i < list.length; i++){
            // Create the list item
            const li = document.createElement('li');
            li.className = 'order-builder';
            
            // Create the radio button element
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = 'blend';
            input.value = list[i].value;  // Value for the radio button
            input.id = list[i].value;  // Label for the radio button

            // Create the <label> element and its stylings
            const label = document.createElement('label');
            label.setAttribute('for', list[i].value);  // Attach label to item value
            label.textContent = list[i].label;  // Set label text
            label.className = 'order-builder';

            // Add image and its stylings
            const image = document.createElement('img');
            image.src = 'images/' + list[i].value + '.png';
            image.className = 'order-builder';

            // Append the <input> and <label> to the <li>
            li.appendChild(input);
            li.appendChild(label);
            li.appendChild(image);

            // Append the <li> to the list of options
            ul.appendChild(li);
        }

        // Append the list of options to the fieldset
        blendsList.appendChild(ul);
    }

    // Event listener to toggle between the two lists based on the checkbox state
    toggleDecaf.addEventListener('change', () => {
        if (toggleDecaf.checked) {
            displayList(decafList); // Show decaf list when checked
        } else {
            displayList(caffList); // Show caff list when unchecked
        }
    });

    // Display caff list by default
    displayList(caffList);
});