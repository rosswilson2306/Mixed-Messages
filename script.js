// Object to hold string sections for fortune output
const fortuneStr = {
    person: ['a rich man from the east', 'a taylor with an interest in science', 'an old woman with some missing teeth', 'an out of breath policeman'],
    theyWill: ['talk you into competing in a drag race', 'help you out in a time of need', 'save your life from a falling piano', 'try to sell you an old house with a mysterious past'],
    youShould: ['go with the flow, life is all about surprises', 'promise to name your first born after them', 'buy them a burger to say thank you', 'give up smoking, it\'s bad for you']
}


const randomNum = num => {
    return Math.floor(Math.random() * num);
}

const randomMessage = () => {
    //Array to store message
    let messageContent = [];

    // Iterate through object to get substrings
    for (let key in fortuneStr) {
        let optionIndex = randomNum(fortuneStr[key].length);

        // Generate message
        if (key === 'person') {
            messageContent.push(`Soon you will meet ${fortuneStr[key][optionIndex]}.`);
        } else if (key === 'theyWill') {
            messageContent.push(`They will ${fortuneStr[key][optionIndex]}.`);
        } else if (key === 'youShould') {
            messageContent.push(`You should ${fortuneStr[key][optionIndex]}.`);
        }
    }
    return messageContent.join(' ');
}

console.log(randomMessage());