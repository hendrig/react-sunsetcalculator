const SunsetCalculator = () => {

}

const ConvertToDegrees = (degree, minute, second) => {
    return degree + (((second / 60) + minute) / 60 );
}


export default { SunsetCalculator, ConvertToDegrees};