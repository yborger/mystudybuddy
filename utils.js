/* 
    Unit tests w/ Jest
    This file is being added as a way of testing the usability of this extension without having to directly add it to Chrome as an extension.
*/



//blocked_choice.js tests
function blockCheck(selections){
    const sites = ['instagram', 'facebook', 'twitter', 'youtube', 'snapchat', 'tiktok'];
    return sites.filter (site => selections[site] === true);
}

//time_choice.js tests -- validation of the all or none options
function parseBreakTypes(queryString){
    const water = queryString.split("water=")[1].split("&")[0];
    const snack = queryString.split("snack=")[1].split("&")[0];
    const stretch = queryString.split("stretch=")[1].split("&")[0];
    return { water, snack, stretch };
}

function validationCheck(breakTypes, times){
    if(breakTypes.water === "true" && times.water === "none") return false;
    if(breakTypes.snack === "true" && times.snack === "none") return false;
    if(breakTypes.stretch === "true" && times.stretch === "none") return false;
    return true;
}

module.exports = { blockCheck, parseBreakTypes, validationCheck };

