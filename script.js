import { sentences } from './sentences.js'; // sentences.js에서 sentences를 import
import { sentences2 } from './sentences2.js'; // sentences2.js에서 sentences2를 import

// 현재 날짜를 가져오는 함수
function getCurrentDate() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString('ko-KR', options);
}

// 제목을 설정하는 함수
function setTitle() {
    const titleElement = document.querySelector('h1');
    titleElement.textContent = `오늘은 ${getCurrentDate()}입니다.`; // 제목 변경
}

// 문장을 표시하는 함수
let currentIndex = 0; // 현재 문장 인덱스
let currentIndex2 = 0; // 현재 문장 인덱스  

function displaySentence() {
    const sentenceDisplay = document.getElementById('sentenceDisplay');
    if (currentIndex < sentences.length) {
        sentenceDisplay.innerHTML = `
            <p>${sentences[currentIndex].en}</p>
            <p id="koSentence1" style="display: none;">${sentences[currentIndex].ko}</p>
            <button onclick="showTranslation('koSentence1', this)">해석 보기</button>
        `;
        currentIndex++;
    } else {
        // 모든 문장을 다 보았을 때
        currentIndex = 0; // 인덱스를 0으로 리셋
        sentenceDisplay.innerHTML = `
            <p>${sentences[currentIndex].en}</p>
            <p id="koSentence1" style="display: none;">${sentences[currentIndex].ko}</p>
            <button onclick="showTranslation('koSentence1', this)">해석 보기</button>
        `;
        currentIndex++;
    }
    displaySentences2(); // sentences2 문장도 업데이트
}

// 오늘 날짜에 해당하는 sentences2 문장을 표시하는 함수
function displaySentences2() {
    const sentence2Display = document.getElementById('sentence2Display');
    if (currentIndex2 < sentences2.length) {
        sentence2Display.innerHTML = `
            <p>${sentences2[currentIndex2].en}</p>
            <p id="koSentence2" style="display: none;">${sentences2[currentIndex2].ko}</p>
            <button onclick="showTranslation('koSentence2', this)">해석 보기</button>
        `;
        currentIndex2++;
    } else {
        // 모든 문장을 다 보았을 때
        currentIndex2 = 0; // 인덱스를 0으로 리셋
        sentence2Display.innerHTML = `
            <p>${sentences2[currentIndex2].en}</p>
            <p id="koSentence2" style="display: none;">${sentences2[currentIndex2].ko}</p>
            <button onclick="showTranslation('koSentence2', this)">해석 보기</button>
        `;
        currentIndex2++;
    }
}

// 해석 보기 버튼 클릭 시 한글 문장을 표시하는 함수
function showTranslation(koSentenceId, button) {
    document.getElementById(koSentenceId).style.display = 'block'; // 한글 문장 보이기
    button.style.display = 'none'; // 버튼 숨기기
}

// showTranslation 함수를 전역 범위에 노출
window.showTranslation = showTranslation;

// 페이지가 로드될 때 제목을 설정하고 오늘 날짜에 해당하는 문장을 표시
window.onload = function() {
    setTitle();
    const today = new Date();
    const dayOfMonth = today.getDate(); // 오늘 날짜의 일
    currentIndex = dayOfMonth - 1; // 배열 인덱스는 0부터 시작하므로 1을 빼줌
    currentIndex2 = dayOfMonth - 1; // 배열 인덱스는 0부터 시작하므로 1을 빼줌
    displaySentence(); // 첫 문장 표시
};

// 버튼 클릭 시 다음 문장을 표시
document.getElementById('sentenceButton').addEventListener('click', displaySentence);
