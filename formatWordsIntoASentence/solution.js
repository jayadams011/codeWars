function formatWords(words){
    var sentence1 = '';
    if (words.length === 1) {
    sentence1 = words[0];
    } else if (words.length === 2) {
    sentence1 = words.join(' and ');
    } else if (words.length > 2) {
    sentence1 = words.slice(0,-1).join(', ') + ', and ' + words.slice(-1);
    }
    return sentence1;
    }
    