import dayjs from 'dayjs';

    export const prettyDurationFromSeconds = (second:number)=>{
    const hours = Math.floor((second%(3600*24))/3600)
    const minutes = Math.floor((second%3600)/60)

    const hDisplay = hours>0 ? `${hours} часa` : ''
    const mDisplay = minutes > 0 ? `${minutes} минут` : ''
    return `${hDisplay} ${mDisplay}`
}

    export const prettyTime = (date:any) => dayjs(date).format('HH:mm');