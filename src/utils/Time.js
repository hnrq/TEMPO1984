export const getLifespan = (birthday, isMale) => {
    var birth = new Date(birthday);
    isMale ? birth.setFullYear(birth.getFullYear() + 72) : birth.setFullYear(birth.getFullYear() + 79);
    return birth - new Date();
}




