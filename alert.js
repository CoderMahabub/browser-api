// 1. Alert
// alert("ma is coming");
const maComing = () => {
    alert('Ammu is coming. Open the book');
};

// 2. Confirm
const askPicnic = () => {
    const response = confirm('Are you going to picnic?');
    console.log(response);
    if (response === true) {
        alert('taka bkash kor');
    } else {
        console.log('DGM - Dure Giye Mor!');
    }
};

// 3. Prompt
const askMyName = () => {
    const fullname = prompt('What is your name?');
    if (fullname) {
        console.log(fullname);
    }
}
