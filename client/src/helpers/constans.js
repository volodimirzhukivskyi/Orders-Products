export const MONTHS = [
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
export const DAYS_OF_WEEK = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];
export const ORDERS_API = "./orders.json";
export const PRODUCTS_API = "./products.json";
export const BANK_API = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"
export const SCHEME_ORDER = [

    {
        Header: 'Arrival Name',
        accessor: 'arrival_name',
    },
    {
        Header: 'Creation Date',
        accessor: 'date',
    },
    {
        Header: 'Amount in hryvnia',
        accessor: 'amount_in_hryvnia',
    },
    {
        accessor: 'product_quantity',
    },

    {
        Header: 'Profile Progress',
        accessor: 'progress',
    }

]
export const SCHEME_PRODUCT_IN_ORDER = [{
    Header: 'Product Name',
    accessor: 'productName',
},
    {
        id: "product_date",
        Header: 'Creation Date',
        accessor: 'date',
    },
    {
        Header: 'Product type',
        accessor: 'productType',
    },
    {
        id: "product_amount",
        Header: 'Amount in hryvnia',
        accessor: 'amount_in_hryvnia',
    }]
export const SCHEME_PRODUCT_IN_PRODUCTS = [
    ...SCHEME_PRODUCT_IN_ORDER,
    {
        Header: 'Order name',
        accessor: 'orderName'
    }
]
