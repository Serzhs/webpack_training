import * as moment from 'moment';

export const headerInit = () => {
    console.log('esam modulī')
    // header date
    const dateNode = document.querySelector('.js-date')
    dateNode.innerText = moment().format('LLLL')
}

