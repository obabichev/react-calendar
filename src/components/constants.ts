export const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

export function formatHour(hour: number): string {
    if (hour < 12) {
        return `${hour} AM`
    }
    if (hour === 12) {
        return '12 PM';
    }
    if (hour === 24) {
        return '';
    }
    return `${hour - 12} PM`
}