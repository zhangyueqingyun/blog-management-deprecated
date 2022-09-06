export function getNowDatetime() 
{
    return format(new Date())
}

export function format(date: Date) 
{
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`;
    const day = `${date.getDate()}`;
    const hours = `${date.getHours()}`;
    const seconds = `${date.getSeconds()}`;

    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')} ${hours.padStart(2, '0')}:${seconds.padStart(2, '0')}:00`;
}