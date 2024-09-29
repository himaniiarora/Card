<script>
    let totalBeds = 250;
    let occupiedBeds = 180;

    function updateBedAvailability() {
        let availableBeds = totalBeds - occupiedBeds;
        document.getElementById('availableBeds').textContent = Available Beds: ${availableBeds};
    }

    // Call this function on page load
    window.onload = updateBedAvailability;
</script>