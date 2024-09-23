export const getOffset = (start= -11.5, ending = 12) => {
    const offsets = []
    for (let i = start; i <= ending; i += 0.5) {
        offsets.push(i)  
    }

    return offsets
}

export const getTimezone = () => {
    return ['UTC', 'GMT', 'EST', 'PST', 'EDT', 'BST']
}

export const TIMEZONE_OFFSET = {
    UTC: 0,
    GMT: 0,
    PST: -7*60,
    EST: -4*60,
    EDT: -4*60,
    BST: 1*60
}