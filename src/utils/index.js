import * as d3 from "d3-format";

export const formatCurrency = (amount = 0) => {
  return amount === 0 ? 0 : d3.format(",.2f")(amount);
};
