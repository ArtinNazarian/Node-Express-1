const fs = require("fs");
const readline = require("readline");
const axios = require("axios");

async function readUrlFile(fileName) {
  const fileStream = fs.createReadStream(fileName);
  fileStream.on("error", (err) => {
    console.log("Error in read stream...");
    process.exit(1);
  });
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  for await (const line of rl) {
    let startingIndex = line.indexOf("://") + 3;
    let endIndex = line.indexOf(".") + 4;
    let path = line.slice(startingIndex, endIndex);
    let data = await getData(line);
    if (data !== -1) {
      write(path, data);
    }
  }
}

async function write(path, data) {
  fs.writeFile(path, data, "utf-8", function (err) {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    console.log(`Wrote to ${path}`);
  });
}

async function getData(url) {
  try {
    let data = await axios.get(url);
    let htmlData = String(data.data);
    return htmlData;
  } catch (error) {
    console.log(`Couldn't download ${url}`);
    return -1;
  }
}

readUrlFile(process.argv[2]);
