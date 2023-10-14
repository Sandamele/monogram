import { isNull } from "lodash";
import PocketBase from "pocketbase";
const pb = new PocketBase("https://monogram.pockethost.io");
export const fetchData = async (url, filters = null) => {
  if (isNull(filters)) {
    const records = await pb.collection(url).getFullList();
    return records;
  } else {
    const records = await pb.collection(url).getFullList({
      filter: filters,
    });
    return records;
  }
};
