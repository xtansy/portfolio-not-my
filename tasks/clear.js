import { deleteAsync } from "del";
import { config } from "./index.js";

export const clear = async () => {
    await deleteAsync(config.paths.pathDest);
};
