export const capitalizeLetter = (letter) => {
    if (letter.includes("-")) {
        let convertedString = letter.split("-");
        for (let i=0;i<convertedString.length;i++) {
            convertedString[i] = convertedString[i].charAt(0).toUpperCase() + convertedString[i].slice(1);
        }
        convertedString = convertedString.join(" ");
        return convertedString;
    }
    else {
        return letter.charAt(0).toUpperCase() + letter.slice(1);
    }
}