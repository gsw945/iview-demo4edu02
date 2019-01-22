let util = {}

util.title = function (title) {
    // eslint-disable-next-line
    if(!!title) {
        if(title.startsWith('!')) {
            title = title.substr(1)
        }
        else {
            title += ' - My Site'
        }
    }
    else {
        title = 'iView project'
    }
    window.document.title = title
};

export default util;