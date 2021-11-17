const validate = {
    isMobile (text) {
        const pattern = /^1[3-9]\d{9}$/
        return pattern.test(text)
    },
}
export default validate