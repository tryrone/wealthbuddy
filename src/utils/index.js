import * as d3 from "d3-format";
import moment from "moment";

export const formatCurrency = (amount = 0) => {
  let formattedAmount = d3.format(",.2f")(amount);
  let splitAmount = formattedAmount.split(".");
  return parseInt(splitAmount[1]) ? formattedAmount : splitAmount[0];
};

export const closeMobileNavOnClick = (event) => {
  if (document.querySelector(".wealth-mobile--nav") !== null) {
    document
      .querySelector(".wealth-mobile--nav")
      .addEventListener("click", (e) => {
        const isVisible = (elem) =>
          !!elem &&
          !!(
            elem.offsetWidth ||
            elem.offsetHeight ||
            elem.getClientRects().length
          );

        Array.from(document.querySelectorAll(".mobile-nav")).forEach(
          (element) => {
            if (!element.contains(e.target) && isVisible(element)) {
              event();
            }
          }
        );
      });
  }
};

export const closeModalOnOutsideClick = (callback) => {
  document.querySelector(".modal").addEventListener("click", (e) => {
    const isVisible = (elem) =>
      !!elem &&
      !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);

    Array.from(document.querySelectorAll(".modal .auth-modal")).forEach(
      (element) => {
        if (
          (!element.contains(e.target) && isVisible(element)) ||
          e.target.className === "closeModal"
        ) {
          callback();
        }
      }
    );
  });
};

export const getReference = () => {
  let text = "";
  let possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";
  for (let i = 0; i < 15; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
};

export const convertIsoDateToYmdJson = (isoDate) => {
  const dateMoment = moment(isoDate);

  return {
    year: parseInt(moment(dateMoment).format("YYYY")),
    month: parseInt(moment(dateMoment).format("M")),
    day: parseInt(moment(dateMoment).format("D")),
  };
};

export const convertYmdJsonToIsoDate = (datePickerDateObj) => {
  return moment(
    `${datePickerDateObj.year}-${datePickerDateObj.month}-${datePickerDateObj.day}`,
    "YYYY-M-D"
  ).toISOString();
};
