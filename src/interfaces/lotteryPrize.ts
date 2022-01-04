export interface prizeProps {
  id: string;
  name: string;
  reward: string;
  amount: number;
  number: number[];
}

export interface lotteryPrizeData {
  date?: string;
  endpoint?: string;
  prizes?: prizeProps[];
  runningNumbers?: prizeProps[];
}
