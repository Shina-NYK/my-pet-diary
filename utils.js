export const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];
// Match the month name to the exact name's index + 1 in the array of monthNames
export const convertToMonthNum = (monthName) => {
    return monthNames.findIndex((name) => name === monthName) + 1;
};
