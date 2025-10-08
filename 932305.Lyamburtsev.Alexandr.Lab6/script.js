const leftNavigationBtn = document.querySelector('.table_navigation_left');
const rightNavigationBtn = document.querySelector('.table_navigation_right');
const bothNavigationBtn = document.querySelector('.table_navigation_both');
const leftImage = document.querySelector('.table_navigation_image:nth-child(1)');
const rightImage = document.querySelector('.table_navigation_image:nth-child(2)');

leftLayoutBtn.addEventListener('click', () => {
    createAsymmetricColumns(leftImage, rightImage);
});

rightLayoutBtn.addEventListener('click', () => {
    createAsymmetricColumns(rightImage, leftImage);
});

bothNavigationBtn.addEventListener('click', () => {
    rightImage.style.flexBasis = '50%';
    rightImage.querySelector('img').style.width = '100%';
    rightImage.querySelector('img').style.display = 'block';
    leftImage.style.flexBasis = '50%';
    leftImage.querySelector('img').style.display = 'block';
    leftImage.querySelector('img').style.width = '100%';
});

const createAsymmetricColumns = (wideColumnEl, narrowColumnEl) => {
    wideColumnEl.style.flexBasis = '95%';
    wideColumnEl.querySelector('img').style.width = '75%';
    wideColumnEl.querySelector('img').style.display = 'block';
    narrowColumnEl.style.flexBasis = '5%';
    narrowColumnEl.querySelector('img').style.display = 'none';
};