const flexContainer = document.querySelector('.flex-container');
const items = document.querySelectorAll('.flex-item');

function resetFlexbox() {
    flexContainer.style.gap = '0px';
    flexContainer.style.flexDirection = 'row';
    flexContainer.style.justifyContent = 'flex-start';
    flexContainer.style.alignItems = 'stretch';
    items.forEach(item => {
        item.style.flexGrow = '0';
    });
    document.getElementById('gap').value = 0;
    document.getElementById('box1').value = 0;
    document.getElementById('box2').value = 0;
    document.getElementById('box3').value = 0;
}

function updateGap() {
    const gapValue = document.getElementById('gap').value;
    flexContainer.style.gap = `${gapValue}px`;
}

function setFlexDirection(direction) {
    flexContainer.style.flexDirection = direction;
}

function justifyContent(position) {
    flexContainer.style.justifyContent = position;
}

function alignItems(position) {
    flexContainer.style.alignItems = position;
}

function resetFlexGrow() {
    items.forEach(item => {
        item.style.flexGrow = '0';
    });
    document.getElementById('box1').value = 0;
    document.getElementById('box2').value = 0;
    document.getElementById('box3').value = 0;
}

function growAll() {
    items.forEach(item => {
        item.style.flexGrow = '1';
    });
}

function updateFlexGrow(boxNumber) {
    const flexGrowValue = document.getElementById(`box${boxNumber}`).value;
    document.getElementById(`item${boxNumber}`).style.flexGrow = flexGrowValue;
}
