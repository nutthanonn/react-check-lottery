import axios from "axios";

export async function DataMonthList() {
  const res = await axios.get("https://lotto.api.rayriffy.com/list");
  return res.data.response;
}
