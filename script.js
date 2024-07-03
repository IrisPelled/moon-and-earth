
const moon = document.getElementById('moon');
const speedSlider = document.getElementById('speed');
const radiusSlider = document.getElementById('radius');
const speedValue = document.getElementById('speedValue');
const radiusValue = document.getElementById('radiusValue');
const info = document.getElementById('info');

let angle = 0;

function updateMoonPosition() {
    const baseSpeed = parseFloat(speedSlider.value);
    const radius = parseFloat(radiusSlider.value);

    // Calculate speed based on radius (inverse cube relationship)
    const normalizedRadius = radius / 100; // Normalize radius to 1 at 100 pixels
    const speed = baseSpeed * Math.pow(1 / normalizedRadius, 3);

    // Update the radius inversely proportional to speed
    const newRadius = 100 / baseSpeed;
    radiusSlider.value = newRadius;
    radiusValue.textContent = newRadius.toFixed(2);

    angle += 0.02 * speed;
    const x = 300 + newRadius * Math.cos(angle);
    const y = 300 + newRadius * Math.sin(angle);

    moon.style.left = `${x - 15}px`;
    moon.style.top = `${y - 15}px`;

    // Update info display
    info.textContent = `Actual Speed: ${speed.toFixed(2)}, Distance: ${newRadius.toFixed(2)} pixels`;

    requestAnimationFrame(updateMoonPosition);
}

speedSlider.addEventListener('input', () => {
    speedValue.textContent = speedSlider.value;
    const newRadius = 100 / parseFloat(speedSlider.value);
    radiusSlider.value = newRadius;
    radiusValue.textContent = newRadius.toFixed(2);
});

radiusSlider.addEventListener('input', () => {
    radiusValue.textContent = radiusSlider.value;
    const newSpeed = 100 / parseFloat(radiusSlider.value);
    speedSlider.value = newSpeed;
    speedValue.textContent = newSpeed.toFixed(2);
});

updateMoonPosition();
