function generateBlocks() {
    const block = document.getElementById("block");
    block.innerHTML = '';
    const blocksCount = 25;
    for(let i = 0; i < blocksCount; i++) {
        const RGB = 255 * 255 * 255;
        const colorNumber = "#" + (Math.floor(Math.random() * RGB)).toString(16);
        let colorBlock = document.createElement("div");
        colorBlock.style.width = '50px';
        colorBlock.style.height = '50px';
        colorBlock.style.backgroundColor = colorNumber;
        block.append(colorBlock);
    }
    return block;
}

function generateBlocksInterval(){
    setInterval(() => generateBlocks(), 1000);
}

generateBlocksInterval();