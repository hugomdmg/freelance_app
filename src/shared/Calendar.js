import Calendar from 'react-calendar';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css'; // Importar estilos predeterminados del calendario


const Dates = ({ dates }) => {
    const [calendarDate, setCalendarDate] = useState(new Date());

    // Función para convertir las fechas en formato dd/mm/yyyy a objetos Date
    const parseDate = (dateString) => {
        const [day, month, year] = dateString.split('/');
        return new Date(year, month - 1, day); // Month is 0-indexed in JS Date
    };

    // Convertir las fechas del proyecto a objetos Date
    const projectDates = dates.map((dateStr) => parseDate(dateStr));

    // Función para resaltar las fechas en el calendario
    const highlightDates = ({ date }) => {
        // Comparar solo año, mes y día
        const isHighlighted = projectDates.some(
            (projectDate) =>
                projectDate.getDate() === date.getDate() &&
                projectDate.getMonth() === date.getMonth() &&
                projectDate.getFullYear() === date.getFullYear()
        );
        return isHighlighted ? 'highlighted-date' : ''; // Añadimos una clase CSS personalizada

    }


    return (
        <>
            <Calendar
                onChange={setCalendarDate}
                value={calendarDate}
                className="dark:bg-gray-800 shadow-md rounded-lg p-6"
                tileClassName={highlightDates}

            />
            <style>{
                `.highlighted-date {
                    background-color: green;
                    color: black;
                }
                .react-calendar {
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
    )
}

export default Dates