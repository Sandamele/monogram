import { isNull } from "lodash";
import PocketBase from "pocketbase";
import { useEffect, useState } from "react";
const pb = new PocketBase(import.meta.env.VITE_CMS);

export default function useFetchData(recordName, filters = null ) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    if (isNull(filters)) {
      try {
        const records = await pb.collection(recordName).getFullList();
        setData(records);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    } else {
      try {
        const records = await pb.collection(recordName).getFullList({
          filter: filters,
        });
        setData(records);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
  };
  useEffect(() => {
  getData();

  },[recordName,filters])
  return { data, loading, error };
}
