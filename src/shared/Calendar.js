import Calendar from 'react-calendar';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import { useTranslation } from "react-i18next";

const Dates = ({ dates }) => {
    const [calendarDate, setCalendarDate] = useState(new Date());
    const { i18n } = useTranslation();

    const parseDate = (dateString) => {
        const [day, month, year] = dateString.split('/');
        return new Date(year, month - 1, day);
    };

    const projectDates = dates.map((dateStr) => parseDate(dateStr));
    const highlightDates = ({ date }) => {
        const isHighlighted = projectDates.some(
            (projectDate) =>
                projectDate.getDate() === date.getDate() &&
                projectDate.getMonth() === date.getMonth() &&
                projectDate.getFullYear() === date.getFullYear()
        );
        return isHighlighted ? 'highlighted-date' : '';
    };

    return (
        <>
            <Calendar
                onChange={setCalendarDate}
                value={calendarDate}
                locale={i18n.language}
                className="dark:bg-gray-800 shadow-md rounded-lg p-6"
                tileClassName={highlightDates}
            />
            <style>{
                `.react-calendar {
                    background-color: #d7e9e3;
                    color: #204051;
                }
                .react-calendar__tile:enabled:hover,
                .react-calendar__tile:enabled:focus {
                    background: #c9dcd6;
                    color: #204051;
                }
                .highlighted-date {
                    background-color: #9a3c3c;
                    color: #ffffff;
                }   
                `
            }</style>
        </>
    );
};

export default Dates;
