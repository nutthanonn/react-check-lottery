import axios from "axios";
import { prizeProps } from "../interfaces/lotteryPrize";

export async function DataPrize(id: string) {
  const res = await axios.get(`https://lotto.api.rayriffy.com/lotto/${id}`);

  const data = await res.data.response;

  const prizeNumberShow: prizeProps[] = [
    data.prizes[0],
    ...res.data.response.runningNumbers,
  ];

  return [data, prizeNumberShow];
}
