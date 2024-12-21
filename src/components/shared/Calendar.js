import Calendar from 'react-calendar';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import { useTranslation } from "react-i18next";
import { updateProject } from '../../services/projects';

const Dates = ({ setUser, setSelectedProject, selectedProject, user, dates }) => {
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

    const saveMeeting = async () => {
        const index = user.projects.findIndex((project) => selectedProject.id === project.id);
        user.projects[index].dates.push(calendarDate.toLocaleDateString('es'))
        setSelectedProject(user.projects[index])
        const updatedUser = await updateProject(selectedProject, user)
        setUser(updatedUser);

        setCalendarDate(new Date())
    }

    return (
        <div className="flex flex-col items-center">
            <Calendar
                onChange={(date) => {
                    setCalendarDate(date);
                }}
                value={calendarDate}
                locale={i18n.language}
                className="dark:bg-gray-800 shadow-md rounded-lg p-6"
                tileClassName={highlightDates}
            />

            {user && <div className="mt-4">
                <button className="text-gray-700 dark:text-gray-200"
                    onClick={saveMeeting}>
                    <strong>Marcar meeting:</strong> {calendarDate.toLocaleDateString('es')}
                </button>
            </div>}

            <style>
                {`
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
                `}
            </style>
        </div>
    );
};

export default Dates;

