const btnNum = document.querySelectorAll('button[type=button]');
console.log(btnNum);
const btnSub = document.querySelector('button[type=submit]');
console.log(btnSub);
let number;

btnNum.forEach((btn) => {
    btn.addEventListener('click', () => {
        number = btn.textContent;
        console.log(number);
    });
});

btnSub.addEventListener('click', () => {
    if (number > 0) {
        showResult();
    } else {
        document.body.innerHTML = `<div class="container">
                                        <h1 id="no">Mere Rating ge ni hese sieta.</h1>
                                    </div>`;

        setTimeout(() => {
            window.location.reload();
        }, 1000);

    }
});

const showResult = () => {
    const result = `<div class="container">

                        <img src="images/thank-you.svg" alt="thanks">

                        <span>You selected ${number} out of 5</span>

                        <h1>Thank you!</h1>

                        <p>
                            We appreciate you taking the time to give a rating.
                            If you ever need more support, don't hesitate to
                            get in touch!
                        </p>

                    </div>`;

    document.body.innerHTML = result;
};