import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/pt-br';

export function dateFormatter(dateReceived: string) {
    dayjs.extend(relativeTime);
    dayjs.locale('pt-br');

    const date = dayjs(dateReceived);
    const diffRelative = date.fromNow();

    return diffRelative;
}