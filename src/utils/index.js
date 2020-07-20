import * as d3 from "d3-format";

export const formatCurrency = (amount = 0) => {
  let formattedAmount = d3.format(",.2f")(amount);
  let splitAmount = formattedAmount.split(".");
  return parseInt(splitAmount[1]) ? formattedAmount : splitAmount[0];
};
