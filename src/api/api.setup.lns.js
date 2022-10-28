const { API } = require('./api');

if(API !== "http://api.brainshop.ai/get?bid=[bid]&key=[key]&uid=[uid]&msg=[msg]") {
    throw new TypeError('API IS NOT SAME AS THE PROVIDED API.')
}