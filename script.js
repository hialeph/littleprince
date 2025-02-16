const sentences = [
    { en: "It is only with the heart that one can see rightly; what is essential is invisible to the eye.<br><span class='source'>-The Little Prince-</span>", ko: "가장 중요한 것은 눈에 보이지 않는다. 마음으로 보아야 한다.<br><span class='source'>-어린왕자-</span>" },
    { en: "All grown-ups were once children... but only few of them remember it.<br><span class='source'>-The Little Prince-</span>", ko: "모든 어른들은 처음에는 어린아이였다. 하지만 그 사실을 기억하는 어른은 별로 없다.<br><span class='source'>-어린왕자-</span>" },
    { en: "You become responsible, forever, for what you have tamed.<br><span class='source'>-The Little Prince-</span>", ko: "길들인 것에 대해서는 영원히 책임이 있다.<br><span class='source'>-어린왕자-</span>" },
    { en: "What makes the desert beautiful is that somewhere it hides a well.<br><span class='source'>-The Little Prince-</span>", ko: "사막을 아름답게 만드는 것은 어딘가에 우물을 숨기고 있기 때문이다.<br><span class='source'>-어린왕자-</span>" },
    { en: "The most beautiful things in the world cannot be seen or touched, they are felt with the heart.<br><span class='source'>-The Little Prince-</span>", ko: "세상에서 가장 아름다운 것들은 볼 수도 만질 수도 없고, 마음으로 느껴야 한다.<br><span class='source'>-어린왕자-</span>" },
    { en: "It is the time you have wasted for your rose that makes your rose so important.<br><span class='source'>-The Little Prince-</span>", ko: "장미를 위해 낭비한 시간이 장미를 소중하게 만든다.<br><span class='source'>-어린왕자-</span>" },
    { en: "You must be very, very careful not to let your heart be broken.<br><span class='source'>-The Little Prince-</span>", ko: "당신의 마음이 상하지 않도록 매우 조심해야 한다.<br><span class='source'>-어린왕자-</span>" },
    { en: "The greatest secrets are always hidden in the most unlikely places.<br><span class='source'>-The Little Prince-</span>", ko: "가장 위대한 비밀은 가장 예상치 못한 곳에 숨겨져 있다.<br><span class='source'>-어린왕자-</span>" },
    { en: "We are responsible for what we tame.<br><span class='source'>-The Little Prince-</span>", ko: "우리는 우리가 길들인 것에 대해 책임이 있다.<br><span class='source'>-어린왕자-</span>" },
    { en: "The things that matter most must never be at the mercy of the things that matter least.<br><span class='source'>-The Little Prince-</span>", ko: "가장 중요한 것들은 가장 중요하지 않은 것들에 휘둘려서는 안 된다.<br><span class='source'>-어린왕자-</span>" },
    { en: "You are what you believe.<br><span class='source'>-Demian-</span>", ko: "당신은 당신이 믿는 것이다.<br><span class='source'>-데미안-</span>" },
    { en: "The only thing that matters is the heart.<br><span class='source'>-The Little Prince-</span>", ko: "중요한 것은 오직 마음뿐이다.<br><span class='source'>-어린왕자-</span>" },
    { en: "What is essential is invisible to the eye.<br><span class='source'>-The Little Prince-</span>", ko: "본질적인 것은 눈에 보이지 않는다.<br><span class='source'>-어린왕자-</span>" },
    { en: "The most beautiful things in the world cannot be seen or touched, they are felt with the heart.<br><span class='source'>-The Little Prince-</span>", ko: "세상에서 가장 아름다운 것들은 볼 수도 만질 수도 없고, 마음으로 느껴야 한다.<br><span class='source'>-어린왕자-</span>" },
    { en: "You must be very, very careful not to let your heart be broken.<br><span class='source'>-The Little Prince-</span>", ko: "당신의 마음이 상하지 않도록 매우 조심해야 한다.<br><span class='source'>-어린왕자-</span>" },
    { en: "The greatest secrets are always hidden in the most unlikely places.<br><span class='source'>-The Little Prince-</span>", ko: "가장 위대한 비밀은 가장 예상치 못한 곳에 숨겨져 있다.<br><span class='source'>-어린왕자-</span>" },
    { en: "We are responsible for what we tame.<br><span class='source'>-The Little Prince-</span>", ko: "우리는 우리가 길들인 것에 대해 책임이 있다.<br><span class='source'>-어린왕자-</span>" },
    { en: "You are responsible, forever, for what you have tamed.<br><span class='source'>-The Little Prince-</span>", ko: "당신은 길들인 것에 대해 영원히 책임이 있다.<br><span class='source'>-어린왕자-</span>" },
    { en: "The things that matter most must never be at the mercy of the things that matter least.<br><span class='source'>-The Little Prince-</span>", ko: "가장 중요한 것들은 가장 중요하지 않은 것들에 휘둘려서는 안 된다.<br><span class='source'>-어린왕자-</span>" },
    { en: "It is only with the heart that one can see rightly.<br><span class='source'>-The Little Prince-</span>", ko: "오직 마음으로만 올바르게 볼 수 있다.<br><span class='source'>-어린왕자-</span>" },
    { en: "The essential things in life are invisible to the eye.<br><span class='source'>-The Little Prince-</span>", ko: "인생에서 본질적인 것들은 눈에 보이지 않는다.<br><span class='source'>-어린왕자-</span>" },
    { en: "You are what you believe.<br><span class='source'>-Demian-</span>", ko: "당신은 당신이 믿는 것이다.<br><span class='source'>-데미안-</span>" },
    { en: "The only thing that matters is the heart.<br><span class='source'>-The Little Prince-</span>", ko: "중요한 것은 오직 마음뿐이다.<br><span class='source'>-어린왕자-</span>" },
    { en: "What is essential is invisible to the eye.<br><span class='source'>-The Little Prince-</span>", ko: "본질적인 것은 눈에 보이지 않는다.<br><span class='source'>-어린왕자-</span>" },
    { en: "The most beautiful things in the world cannot be seen or touched, they are felt with the heart.<br><span class='source'>-The Little Prince-</span>", ko: "세상에서 가장 아름다운 것들은 볼 수도 만질 수도 없고, 마음으로 느껴야 한다.<br><span class='source'>-어린왕자-</span>" },
    { en: "You must be very, very careful not to let your heart be broken.<br><span class='source'>-The Little Prince-</span>", ko: "당신의 마음이 상하지 않도록 매우 조심해야 한다.<br><span class='source'>-어린왕자-</span>" },
    { en: "The greatest secrets are always hidden in the most unlikely places.<br><span class='source'>-The Little Prince-</span>", ko: "가장 위대한 비밀은 가장 예상치 못한 곳에 숨겨져 있다.<br><span class='source'>-어린왕자-</span>" },
    { en: "We are responsible for what we tame.<br><span class='source'>-The Little Prince-</span>", ko: "우리는 우리가 길들인 것에 대해 책임이 있다.<br><span class='source'>-어린왕자-</span>" },
    { en: "You are responsible, forever, for what you have tamed.<br><span class='source'>-The Little Prince-</span>", ko: "당신은 길들인 것에 대해 영원히 책임이 있다.<br><span class='source'>-어린왕자-</span>" },
    { en: "The things that matter most must never be at the mercy of the things that matter least.<br><span class='source'>-The Little Prince-</span>", ko: "가장 중요한 것들은 가장 중요하지 않은 것들에 휘둘려서는 안 된다.<br><span class='source'>-어린왕자-</span>" }
];

let currentSentenceIndex = 0;

document.getElementById('sentenceButton').addEventListener('click', () => {
    const sentenceDisplay = document.getElementById('sentenceDisplay');
    const sentence = sentences[currentSentenceIndex];
    sentenceDisplay.innerHTML = `<p>${sentence.en}</p><p>${sentence.ko}</p>`;
    currentSentenceIndex = (currentSentenceIndex + 1) % sentences.length;
});
