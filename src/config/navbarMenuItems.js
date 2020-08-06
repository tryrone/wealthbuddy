import DashboardIcon from "static/dashboard.svg";
import SavingsIcon from "static/savings.svg";
import InvestmentIcon from "static/investment.png";
import WalletIcon from "static/wallet.svg";
import SettingsIcon from "static/settings.svg";

const navbarMenuItems = [
  {
    name: "Dashboard",
    icon: DashboardIcon,
    path: "/dashboard",
    exact: true,
  },
  {
    name: "Savings",
    icon: SavingsIcon,
    path: "/dashboard/savings",
    exact: false,
  },
  {
    name: "Investment",
    icon: InvestmentIcon,
    path: "/dashboard/investment",
    exact: false,
  },
  {
    name: "Wallet",
    icon: WalletIcon,
    path: "/dashboard/wallet",
    exact: false,
  },
  {
    name: "Settings",
    icon: SettingsIcon,
    path: "/dashboard/settings",
    exact: false,
  },
];

export default navbarMenuItems;
