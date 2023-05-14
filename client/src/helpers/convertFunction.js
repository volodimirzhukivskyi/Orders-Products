import {BANK_API, DAYS_OF_WEEK, MONTHS} from "./constans";
import {sendRequest} from "./otherFunction";

export const convertFunction = (date = new Date()) => {
    return {
        weekday: DAYS_OF_WEEK[date.getDay()],
        date: `${date.getDate()} ${MONTHS[date.getMonth()]}, ${date.getFullYear()}`,
        time: `${date.getHours()}:${date.getMinutes()}`
    }


};
export const convertUAHTo = async (money, currency) => {
    try {
        const data = await sendRequest(BANK_API)
        const currencyObj = data.find(item => item.cc === currency)
        const number = money / currencyObj.rate;
        return number.toFixed(2);

    } catch (e) {

    }

}

