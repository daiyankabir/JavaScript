
function cashOut(money) {
    if (money < 0 || typeof (money) != 'number') {
        return 'Invalid';
    }
    const charge = money * (1.75 / 100);
    return charge;
}



function validEmail(email) {
    if (typeof (email) != 'string') {
        return "Invalid";
    }
    const specialChar = ['.', '@', '-', '_', '+'];
    if (email.includes('@') && email.includes('.com') && !email.includes(' ')) {
        if (!specialChar.some(char => email.startsWith(char)) && email.endsWith('.com')) {
            return true;
        }
        else {
            return false;
        }
    }
    return false;

}


function electionResult(votes) {
    if (!Array.isArray(votes) || !votes.every(item => typeof item === 'string')) {
        return 'Invalid';
    }
    const mangoCount = votes.filter(vote => vote === 'mango').length;
    const bananaCount = votes.filter(vote => vote === 'banana').length;

    if (mangoCount > bananaCount) {
        return 'Mango';
    }
    if (bananaCount > mangoCount) {
        return 'Banana';
    }
    return 'Draw';
}


function isBestFriend(f1, f2) {
    if (typeof (f1) != 'object' || typeof (f2) != 'object') {
        return 'Invalid';
    }
    if (f1.roll === f2.bestFriend && f2.roll === f1.bestFriend) {
        return true;
    }
    return false;
}


function calculateWatchTime(times) {
    if (!Array.isArray(times) || !times.every(item => typeof item === 'number')) {
        return 'Invalid';
    }
    let watchTime = 0;
    for (let i = 0; i < times.length; i++) {
        watchTime += times[i];
    }
    const watchTimeInHours = parseInt(watchTime / 3600);
    const watchTimeInMinutes = parseInt((watchTime % 3600) / 60);
    const watchTimeInSeconds = watchTime % 60;
    const watchTimeInDays = {
        hour: watchTimeInHours,
        minute: watchTimeInMinutes,
        second: watchTimeInSeconds
    }
    return watchTimeInDays;

}

