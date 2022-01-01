import axios from "axios";
import { makeObservable, action, observable } from "mobx";

export class LotteryStoreImpl {
  @observable dataLottery = [];

  constructor() {
    makeObservable(this);
  }

  @action
  fetch = async () => {
    const res = await axios.get("");
  };
}

export const LotteryStor: LotteryStoreImpl = new LotteryStoreImpl();
