import axios from "axios";

export async function DataPrize(id: string) {
  const res = await axios.get(`https://lotto.api.rayriffy.com/lotto/${id}`);
  return res.data.response;
}
