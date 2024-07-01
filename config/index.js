// price setup alert // this is default value, but it should be set through command
const ALERT = {
    price: { amount: 40, or_below: true },
    limit: { amount: 6800, or_above: false }
};
//
const PAY_TYPES = ["PagoMovil", "Mercantil", "Zinli"]

const TRADE_TYPE = "SELL"


// delay (in second) to request the API
const TIME = 3;

// BASE_UBIT -> type of fiat currency
const BASE_UNIT = "VES";
// ASSET_UNIT -> type of currency to buy
const ASSET_UNIT = "USDT";

// if true clicking on notification will open binance app 
const BINANCE_APP = false;

const REQUEST_TIMEOUT = 4000;

// assets/sound folder must contain the following files
const SOUNDS = {
    gilfoyle: {
        source: 'gilfoyle_alert.mp3'
    },
    reward: {
        source: 'reward_alert.wav',
        default: true
    }
}

const BLOCKED_ADS = ['11385993853325262848'];

module.exports = { ALERT, TIME, BASE_UNIT, ASSET_UNIT, BINANCE_APP, REQUEST_TIMEOUT, SOUNDS, BLOCKED_ADS, PAY_TYPES, TRADE_TYPE }
