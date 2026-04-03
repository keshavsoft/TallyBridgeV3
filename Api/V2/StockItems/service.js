import fs from "fs";
import { startFunc as readFromTally } from "./readFromTally.js";

const startFunc = async () => {
    const dataFromTally = await readFromTally();

    const LocalNewArray = dataFromTally.data.collection.map(element => {
        return {
            StockItemName: element.metadata.name,
            StockItemReservedName: element.metadata.reservedname,
            StockItemType: element.metadata.type
        }
    });

    fs.writeFileSync("./Data/StockItems.json", JSON.stringify(LocalNewArray));
};

export { startFunc };