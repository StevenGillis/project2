 document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('#chat').onsubmit = () => {

            // Create new item for list
            const li = document.createElement('li');
            li.innerHTML = document.querySelector('#chattext').value;

            // Add new item to task list
            document.querySelector('#chathistory').append(li);

            // Clear input field
            document.querySelector('#chattext').value = '';

            // Stop form from submitting
            return false;
        };
    });
    document.addEventListener('DOMContentLoaded', () => {

        document.querySelector('#addchannel').onsubmit = () => {

            // Create new item for list
            const li = document.createElement('li');
            li.innerHTML = document.querySelector('#channelname').value;

            // Add new item to task list
            document.querySelector('#channellist').append(li);

            // Clear input field
            document.querySelector('#channelname').value = '';

            // Stop form from submitting
            return false;
        };
    });