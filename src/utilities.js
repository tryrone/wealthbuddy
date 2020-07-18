import { mapValues } from 'lodash';

export const makeParams = (obj) => {
    return Object.keys(obj).map(function (k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(obj[k])
    }).join('&')
}

export const getReference = () => {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";
    for (let i = 0; i < 15; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

export const base64ToHex = (str) => {
    for (var i = 0, bin = atob(str.replace(/[ \r\n]+$/, "")), hex = []; i < bin.length; ++i) {
        var tmp = bin.charCodeAt(i).toString(16);
        if (tmp.length === 1) tmp = "0" + tmp;
        hex[hex.length] = tmp;
    }
    return hex.join("");
}

export const hello = () => {
    return "Hello"
}

export const emptyObject = (obj) => {
    return mapValues(obj, () => "");
}

export const closeModalOnClick = (event) => {
    document
        .querySelector(".modal")
        .addEventListener("click", e => {
            const isVisible = elem =>
                !!elem &&
                !!(
                    elem.offsetWidth ||
                    elem.offsetHeight ||
                    elem.getClientRects().length
                );

            Array.from(document.querySelectorAll(".modal .auth-modal")).forEach(
                element => {
                    if (!element.contains(e.target) && isVisible(element)) {
                        event();
                    }
                }
            );
        });
}

export const formatMoney = (amount, decimalCount = 2, decimal = ".", thousands = ",") => {
    try {
        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
        const negativeSign = amount < 0 ? "-" : "";
        let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
        let j = (i.length > 3) ? i.length % 3 : 0;
        return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "").replace(/\.00$/, '');
    } catch (e) {
        console.log(e)
    }
};


export const getHumanDate = (isoformat) => {
    var readable = new Date(isoformat);  // When we pass the ISO format to the JS Date constructor, the return is "Fri Jul 04 2014 21:06:08 GMT-0400 (Eastern Daylight Time)"
    var m = readable.getMonth();  // returns 6 (note that this number is one less than the number of the month in isoformat)
    var d = readable.getDate();  // returns 15
    var y = readable.getFullYear();  // returns 2012

    // we define an array of the months in a year
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    // we get the text name of the month by using the value of m to find the corresponding month name
    var mlong = months[m];
    return mlong + " " + d + ", " + y;
}

export const checkEmpty = (obj) => {
    let check = false;
    for (var key in obj) {
        if (obj[key] === null || obj[key] === "") {
            check = true;
            break;
        }
    }
    return check;
}


export const monthsFromDate = (current, months) => {
    const now = new Date(current);
    return now.setMonth(now.getMonth() + parseInt(months))
}

export const weeksFromDate = (current, weeks) => {
    const now = new Date(current);
    return now.setDate(now.getDate() + (weeks * 7));
}

export const daysFromDate = (current, days) => {
    const now = new Date(current);
    return now.setDate(now.getDate() + parseInt(days));
}

export const getDesiredTime = (time) => {
    var newDate = new Date(time)
    newDate.setHours(newDate.getHours() + 1);
    var hours = newDate.getHours();
    var minutes = newDate.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

export const closeMobileModalOnClick = (event) => {
    if (document
        .querySelector(".wealth-mobile--nav") !== null) {
        document
            .querySelector(".wealth-mobile--nav")
            .addEventListener("click", e => {
                const isVisible = elem =>
                    !!elem &&
                    !!(
                        elem.offsetWidth ||
                        elem.offsetHeight ||
                        elem.getClientRects().length
                    );

                Array.from(document.querySelectorAll(".mobile-nav")).forEach(
                    element => {
                        if (!element.contains(e.target) && isVisible(element)) {
                            event();
                        }
                    }
                );
            });
    }
}


export const clean = (obj) => {
    for (var prop in obj) {
        if (obj[prop] === null || obj[prop] === "" || typeof obj[prop] === "undefined") {
            delete obj[prop];
        }
        return {
            ...obj,
            [prop]: obj[prop]
        }
    }

}

export const daysBetweenDates = (firstDate, secondDate) => {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    return diffDays
}

export const inThree = () => {
    const inThreeMinutes = new Date(new Date().getTime() + 3 * 60 * 1000);
    return inThreeMinutes;
}