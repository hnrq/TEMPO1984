export const getLifespan = (birthday, isMale) => {
    var birth = new Date(birthday);
    isMale ? birth.setFullYear(birth.getFullYear() + 72) : birth.setFullYear(birth.getFullYear() + 79);
    return birth - new Date();
}

export const toMinutes = (time) => Number(time.split(':')[0]) * 60 + Number(time.split(':')[1]);

export const minutesTohhMM = (minutes) => {
    if(minutes < 60)
        return `${minutes} minute${minutes === 1 ? '' : 's'}`;
    const min = minutes % 60;
    const hours = (minutes - min)/60
    return `${hours} hour${hours === 1 ? '' : 's'} and ${min} minute${min === 1 ? '' : 's'}`
}

