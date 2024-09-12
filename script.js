// Function to calculate total IMA and AMA for combined systems
function calculateTotalMA() {
    // Calculate IMA for Gears
    let inputGearTeeth = parseFloat(document.getElementById('inputGearTeeth').value);
    let outputGearTeeth = parseFloat(document.getElementById('outputGearTeeth').value);
    let compoundGears = parseFloat(document.getElementById('compoundGears').value);
    let gearIMA = 1;

    if (!isNaN(inputGearTeeth) && !isNaN(outputGearTeeth) && !isNaN(compoundGears)) {
        gearIMA = (inputGearTeeth / outputGearTeeth) ** compoundGears;
    }

    // Calculate IMA for Pulleys
    let inputPulleys = parseFloat(document.getElementById('inputPulleys').value);
    let pulleyConfig = document.getElementById('pulleyConfig').value;
    let pulleyIMA = 1;

    if (!isNaN(inputPulleys)) {
        if (pulleyConfig === 'fixed') {
            pulleyIMA = 1;
        } else if (pulleyConfig === 'moveable') {
            pulleyIMA = 2 * inputPulleys;
        } else if (pulleyConfig === 'blockAndTackle') {
            pulleyIMA = inputPulleys;
        }
    }

    // Calculate IMA for Levers
    let effortArm = parseFloat(document.getElementById('effortArm').value);
    let loadArm = parseFloat(document.getElementById('loadArm').value);
    let leverIMA = 1;

    if (!isNaN(effortArm) && !isNaN(loadArm)) {
        leverIMA = effortArm / loadArm;
    }

    // Calculate AMA (Actual Mechanical Advantage)
    let inputForce = parseFloat(document.getElementById('inputForce').value);
    let outputForce = parseFloat(document.getElementById('outputForce').value);
    let AMA = 1;

    if (!isNaN(inputForce) && !isNaN(outputForce) && inputForce > 0) {
        AMA = outputForce / inputForce;
    }

    // Calculate total IMA by multiplying all individual IMAs
    let totalIMA = gearIMA * pulleyIMA * leverIMA;

    // Display the result for both total IMA and AMA
    document.getElementById('result').innerHTML = `
        Total Ideal Mechanical Advantage (IMA): ${totalIMA.toFixed(2)}<br>
        Actual Mechanical Advantage (AMA): ${AMA.toFixed(2)}
    `;
}
