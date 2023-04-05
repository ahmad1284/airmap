// Load the JSON file
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Create the map
        var map = L.map('map').setView([-6.143541092062321, 39.36077439858016], 10);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
            maxZoom: 18
        }).addTo(map);

        // Add markers to the map
        data.forEach(location => {
            var marker = L.marker([location.location.lat, location.location.lng]).addTo(map);
            if (location.url) {
                marker.bindPopup('<a target="_blank" href="' + location.url + '">View on Airbnb</a>');
            }
        });
    });
