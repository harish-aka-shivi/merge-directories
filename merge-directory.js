const fs = require('fs').promises;
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

async function mergeFiles(inputDirectory, outputFile) {
    const output = await fs.open(outputFile, 'w')

    const files = await fs.readdir(inputDirectory);

    for await (const file of files) {
        const filePath = path.join(inputDirectory, file);
        const stats = await fs.stat(filePath)

        if (stats.isFile()) {
            await output.write(`# ${file} \n`);

            const content = await fs.readFile(filePath, 'utf-8');
            await output.write(content)

            await output.write(`\n\n`);
            await output.write(`\n------\n`);
            await output.write(`\n\n`);
        }
    }
}

// Example usage
const inputDir = process.env.INPUT_DIRECTOR; 
const outputFile = process.env.OUTPUT_FILE; 
mergeFiles(inputDir, outputFile);