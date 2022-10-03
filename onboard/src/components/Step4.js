function Step4() {
    return (
        <div className="main active"><svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
        <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
        <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
    </svg>
    <div class="content">
       <h2>Congratulations! <span id="shown_name"></span></h2>
       <p>You have completed onboarding,you can start using the Eden!</p>
    </div></div>
    )
}

export default Step4
