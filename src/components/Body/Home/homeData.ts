import downIcon from "../../../assets/icons/arrow-down.svg";
import dollarIcon from "../../../assets/icons/dollar.svg";
import forkIcon from "../../../assets/icons/fork.svg";
import busIcon from "../../../assets/icons/bus.svg";
import giftIcon from "../../../assets/icons/gift.svg";

export type TransactionType = "income" | "expense";

export interface Transaction {
  id: number;
  title: string;
  date: string;
  amount: number;
  type: TransactionType;
  icon: string;
}

export const money = (value: number): string => {
  return value.toLocaleString("ko-KR") + "원";
};

export const homeSummary = {
  totalAsset: 3140000,
  totalIncome: 2050000,
  totalExpense: 750000,
  incomeRate: 12.5,
  expenseRate: 8.3,
  standardDate: "5월 17일 기준",
};

export const transactions: Transaction[] = [
  {
    id: 1,
    title: "급여",
    date: "5월 17일 (금)",
    amount: 2000000,
    type: "income",
    icon: downIcon,
  },
  {
    id: 2,
    title: "용돈",
    date: "5월 16일 (목)",
    amount: 30000,
    type: "income",
    icon: dollarIcon,
  },
  {
    id: 3,
    title: "식비",
    date: "5월 16일 (목)",
    amount: -15000,
    type: "expense",
    icon: forkIcon,
  },
  {
    id: 4,
    title: "교통비",
    date: "5월 15일 (수)",
    amount: -3000,
    type: "expense",
    icon: busIcon,
  },
  {
    id: 5,
    title: "문화생활",
    date: "5월 14일 (화)",
    amount: -20000,
    type: "expense",
    icon: giftIcon,
  },
];
