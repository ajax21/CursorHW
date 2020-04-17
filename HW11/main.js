async function getRandomChinese(length) {
    let str = '';
    let n = 0;
    const ms = 50;
    const time = length * ms;
    console.log('Promise time: ', time, 'ms');
    while (length > n) {
        n++;
        const promise = new Promise(resolve => {
            setTimeout(() => {
                const sign = Date.now().toString().slice(-5);
                const char = String.fromCharCode(sign);
                resolve(char);
            }, time);
        });
    str += await promise;
    }
    return str;
}

getRandomChinese(5).then(str => console.log(str));