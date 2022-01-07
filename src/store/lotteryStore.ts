import { DataMonthList } from "../api/dataMonthList";
import { DataPrize } from "../api/dataPrize";

import { observable, makeObservable, action, configure } from "mobx";

//interface
import { lotteryPrizeData } from "../interfaces/lotteryPrize";
import { prizeProps } from "../interfaces/lotteryPrize";

configure({
  enforceActions: "never",
});

export class LotteryStoreImpl {
  @observable LotteryPrizeData: lotteryPrizeData = {};
  @observable LotteryDate: string = "";
  @observable PrizeNumber: prizeProps[] = [];

  @observable ClientNumber: string[] = [];

  constructor() {
    makeObservable(this);
  }

  @action
  async fetch_data_prize() {
    //Do when client change lottery date (fetch API)
    const res = await DataPrize(this.LotteryDate);
    this.LotteryPrizeData = res[0];
    this.PrizeNumber = res[1];
    console.log("Work");
  }

  @action
  async fetch_data_per_half_month() {
    const res = await DataMonthList(); // fetch งวดที่ให้เลือกที่มีข้อมูลในระบบ
    this.LotteryDate = res[0].id; // เปลี่ยนค่าใน store เป็นค่างวดล่าสุดเพื่อให้ state อื่น action ได้
    this.fetch_data_prize(); //call back function
    return res;
  }

  @action
  change_lottery_date(id: string) {
    //do when client change date lottery
    this.LotteryDate = id;
    this.fetch_data_prize();
  }
}

export const LotteryStore = new LotteryStoreImpl();
