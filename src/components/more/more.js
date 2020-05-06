export const moreInit = () => {
    // for show more component
    const moreNode = document.querySelector('.js-more')
    if (moreNode) {
        moreNode.addEventListener('click', () => {
            const hasActive = moreNode.classList.contains('active')
            if (hasActive) {
                moreNode.classList.remove('active')
            } else {
                moreNode.classList.add('active')
            }
        })
    }
}
