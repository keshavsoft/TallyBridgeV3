import fs from "fs";
import { startFunc as readFromTally } from "./readFromTally.js";

const StartFunc = async () => {
    const dataFromTally = await readFromTally();

    fs.writeFileSync("./Data/fromTally.json", JSON.stringify(dataFromTally.data.collection));
};

export { StartFunc };