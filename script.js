// Code for Tower Of Hanoi
function towerOfHanoi(disk, source, auxiliary, destination, steps) {
    if (disk === 1) {
        steps.push(`Move disk 1 from ${source} to ${destination}`);
        return 1;
    }
    const steps1 = towerOfHanoi(disk - 1, source, destination, auxiliary, steps);
    steps.push(`Move disk ${disk} from ${source} to ${destination}`);
    const steps2 = towerOfHanoi(disk - 1, auxiliary, source, destination, steps);
    return steps1 + steps2 + 1;
}

// Code for Showing staps and Total Staps
function solveTowerOfHanoi() {
    const diskNumber = parseInt(document.getElementById('diskNumber').value);
    const stepsDiv = document.getElementById('steps');
    const totalStepsDiv = document.getElementById('totalSteps');
    stepsDiv.innerHTML = '';
    totalStepsDiv.innerHTML = '';

    if (isNaN(diskNumber) || diskNumber < 1) {
        stepsDiv.innerText = 'Please enter a valid number of disks.';
        return;
    }

    const steps = [];
    const totalSteps = towerOfHanoi(diskNumber, 'A', 'B', 'C', steps);

    stepsDiv.innerText = steps.join('\n');
    totalStepsDiv.innerText = `Total Steps: ${totalSteps}`;
}
