// 현재 날짜를 가져오는 함수
function getCurrentDate() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString('ko-KR', options);
}

// 제목을 설정하는 함수
function setTitle() {
    const titleElement = document.querySelector('h2');
    titleElement.textContent = `${getCurrentDate()} 어린왕자 문구`;
}

// 문장을 표시하는 함수
let currentIndex = 0; // 현재 문장 인덱스

function displaySentence() {
    const sentenceDisplay = document.getElementById('sentenceDisplay');
    if (currentIndex < sentences.length) {
        sentenceDisplay.innerHTML = `
            <p>${sentences[currentIndex].en}</p>
            <p>${sentences[currentIndex].ko}</p>
        `;
        currentIndex++;
    } else {
        // 모든 문장을 다 보았을 때
        currentIndex = 0; // 인덱스를 0으로 리셋
        // sentenceDisplay.innerHTML = "<p>모든 문장을 다 보았습니다. 다시 처음부터 시작합니다.</p>";
        sentenceDisplay.innerHTML = `
            <p>${sentences[currentIndex].en}</p>
            <p>${sentences[currentIndex].ko}</p>
        `;
        currentIndex++;
    }
}

// 페이지가 로드될 때 제목을 설정하고 오늘 날짜에 해당하는 문장을 표시
window.onload = function() {
    setTitle();
    const today = new Date();
    const dayOfMonth = today.getDate(); // 오늘 날짜의 일
    currentIndex = dayOfMonth - 1; // 배열 인덱스는 0부터 시작하므로 1을 빼줌
    displaySentence(); // 첫 문장 표시
};

// 버튼 클릭 시 다음 문장을 표시
document.getElementById('sentenceButton').addEventListener('click', displaySentence);

const sentences = [
    { en: "1. It is only with the heart that one can see rightly; what is essential is invisible to the eye.<br><span class='source'>-The Little Prince-</span>", ko: "가장 중요한 것은 눈에 보이지 않는다. 마음으로 보아야 한다.<br><span class='source'>-어린왕자-</span>" },
    { en: "2. All grown-ups were once children... but only few of them remember it.<br><span class='source'>-The Little Prince-</span>", ko: "모든 어른들은 처음에는 어린아이였다. 하지만 그 사실을 기억하는 어른은 별로 없다.<br><span class='source'>-어린왕자-</span>" },
    { en: "3. You become responsible, forever, for what you have tamed.<br><span class='source'>-The Little Prince-</span>", ko: "길들인 것에 대해서는 영원히 책임이 있다.<br><span class='source'>-어린왕자-</span>" },
    { en: "4. What makes the desert beautiful is that somewhere it hides a well.<br><span class='source'>-The Little Prince-</span>", ko: "사막을 아름답게 만드는 것은 어딘가에 우물을 숨기고 있기 때문이다.<br><span class='source'>-어린왕자-</span>" },
    { en: "5. The most beautiful things in the world cannot be seen or touched, they are felt with the heart.<br><span class='source'>-The Little Prince-</span>", ko: "세상에서 가장 아름다운 것들은 볼 수도 만질 수도 없고, 마음으로 느껴야 한다.<br><span class='source'>-어린왕자-</span>" },
    { en: "6. It is the time you have wasted for your rose that makes your rose so important.<br><span class='source'>-The Little Prince-</span>", ko: "장미를 위해 낭비한 시간이 장미를 소중하게 만든다.<br><span class='source'>-어린왕자-</span>" },
    { en: "7. You must be very, very careful not to let your heart be broken.<br><span class='source'>-The Little Prince-</span>", ko: "당신의 마음이 상하지 않도록 매우 조심해야 한다.<br><span class='source'>-어린왕자-</span>" },
    { en: "8. The greatest secrets are always hidden in the most unlikely places.<br><span class='source'>-The Little Prince-</span>", ko: "가장 위대한 비밀은 가장 예상치 못한 곳에 숨겨져 있다.<br><span class='source'>-어린왕자-</span>" },
    { en: "9. We are responsible for what we tame.<br><span class='source'>-The Little Prince-</span>", ko: "우리는 우리가 길들인 것에 대해 책임이 있다.<br><span class='source'>-어린왕자-</span>" },
    { en: "10. The things that matter most must never be at the mercy of the things that matter least.<br><span class='source'>-The Little Prince-</span>", ko: "가장 중요한 것들은 가장 중요하지 않은 것들에 휘둘려서는 안 된다.<br><span class='source'>-어린왕자-</span>" },
    { en: "11. You are what you believe.<br><span class='source'>-Demian-</span>", ko: "당신은 당신이 믿는 것이다.<br><span class='source'>-데미안-</span>" },
    { en: "12. The only thing that matters is the heart.<br><span class='source'>-The Little Prince-</span>", ko: "중요한 것은 오직 마음뿐이다.<br><span class='source'>-어린왕자-</span>" },
    { en: "13. What is essential is invisible to the eye.<br><span class='source'>-The Little Prince-</span>", ko: "본질적인 것은 눈에 보이지 않는다.<br><span class='source'>-어린왕자-</span>" },
    { en: "14. The most beautiful things in the world cannot be seen or touched, they are felt with the heart.<br><span class='source'>-The Little Prince-</span>", ko: "세상에서 가장 아름다운 것들은 볼 수도 만질 수도 없고, 마음으로 느껴야 한다.<br><span class='source'>-어린왕자-</span>" },
    { en: "15. You must be very, very careful not to let your heart be broken.<br><span class='source'>-The Little Prince-</span>", ko: "당신의 마음이 상하지 않도록 매우 조심해야 한다.<br><span class='source'>-어린왕자-</span>" },
    { en: "16. The greatest secrets are always hidden in the most unlikely places.<br><span class='source'>-The Little Prince-</span>", ko: "가장 위대한 비밀은 가장 예상치 못한 곳에 숨겨져 있다.<br><span class='source'>-어린왕자-</span>" },
    { en: "17. We are responsible for what we tame.<br><span class='source'>-The Little Prince-</span>", ko: "우리는 우리가 길들인 것에 대해 책임이 있다.<br><span class='source'>-어린왕자-</span>" },
    { en: "18. You are responsible, forever, for what you have tamed.<br><span class='source'>-The Little Prince-</span>", ko: "당신은 길들인 것에 대해 영원히 책임이 있다.<br><span class='source'>-어린왕자-</span>" },
    { en: "19. The things that matter most must never be at the mercy of the things that matter least.<br><span class='source'>-The Little Prince-</span>", ko: "가장 중요한 것들은 가장 중요하지 않은 것들에 휘둘려서는 안 된다.<br><span class='source'>-어린왕자-</span>" },
    { en: "20. It is only with the heart that one can see rightly.<br><span class='source'>-The Little Prince-</span>", ko: "오직 마음으로만 올바르게 볼 수 있다.<br><span class='source'>-어린왕자-</span>" },
    { en: "21. The essential things in life are invisible to the eye.<br><span class='source'>-The Little Prince-</span>", ko: "인생에서 본질적인 것들은 눈에 보이지 않는다.<br><span class='source'>-어린왕자-</span>" },
    { en: "22. You are what you believe.<br><span class='source'>-Demian-</span>", ko: "당신은 당신이 믿는 것이다.<br><span class='source'>-데미안-</span>" },
    { en: "23. The only thing that matters is the heart.<br><span class='source'>-The Little Prince-</span>", ko: "중요한 것은 오직 마음뿐이다.<br><span class='source'>-어린왕자-</span>" },
    { en: "24. What is essential is invisible to the eye.<br><span class='source'>-The Little Prince-</span>", ko: "본질적인 것은 눈에 보이지 않는다.<br><span class='source'>-어린왕자-</span>" },
    { en: "25. The most beautiful things in the world cannot be seen or touched, they are felt with the heart.<br><span class='source'>-The Little Prince-</span>", ko: "세상에서 가장 아름다운 것들은 볼 수도 만질 수도 없고, 마음으로 느껴야 한다.<br><span class='source'>-어린왕자-</span>" },
    { en: "26. You must be very, very careful not to let your heart be broken.<br><span class='source'>-The Little Prince-</span>", ko: "당신의 마음이 상하지 않도록 매우 조심해야 한다.<br><span class='source'>-어린왕자-</span>" },
    { en: "27. The greatest secrets are always hidden in the most unlikely places.<br><span class='source'>-The Little Prince-</span>", ko: "가장 위대한 비밀은 가장 예상치 못한 곳에 숨겨져 있다.<br><span class='source'>-어린왕자-</span>" },
    { en: "28. We are responsible for what we tame.<br><span class='source'>-The Little Prince-</span>", ko: "우리는 우리가 길들인 것에 대해 책임이 있다.<br><span class='source'>-어린왕자-</span>" },
    { en: "29. You are responsible, forever, for what you have tamed.<br><span class='source'>-The Little Prince-</span>", ko: "당신은 길들인 것에 대해 영원히 책임이 있다.<br><span class='source'>-어린왕자-</span>" },
    { en: "30. The things that matter most must never be at the mercy of the things that matter least.<br><span class='source'>-The Little Prince-</span>", ko: "가장 중요한 것들은 가장 중요하지 않은 것들에 휘둘려서는 안 된다.<br><span class='source'>-어린왕자-</span>" },
    { en: "31. The journey of a thousand miles begins with a single step.<br><span class='source'>-Lao Tzu-</span>", ko: "천 리의 여정도 한 걸음부터 시작된다.<br><span class='source'>-노자-</span>" }
];
