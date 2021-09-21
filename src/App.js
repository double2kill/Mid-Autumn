import {ref} from 'vue'

export const diceNumberList = ref([1,2,3,4,5,6])

const generateNewNumberList = () => {
    diceNumberList.value = Array.from({length: 6 }, _ => (Math.floor(Math.random()*6) + 1))
}

export const rollingIntervalId = ref(null)

let timeoutId = null

export const handleStartRoll = () => {
    if(!rollingIntervalId.value) {
        rollingIntervalId.value = setInterval(generateNewNumberList, 100)
        timeoutId = setTimeout(handleEndRoll, 1000)
    } else {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(handleEndRoll, 1000)
    }
}

export const handleEndRoll = () => {
    clearInterval(rollingIntervalId.value)
    rollingIntervalId.value = null
}