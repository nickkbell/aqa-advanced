function printTextAfterTimeout (text, timeout) {
    setTimeout(() => {
        console.log(text);
    }, timeout)
}

printTextAfterTimeout('test', 5000);
