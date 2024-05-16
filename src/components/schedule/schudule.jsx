import './schedule.css'

function Schedule(){
    return (
        <>
            <div className="schedule-inner">
                <div className="schedule-title">Режим работы</div>
                <div className="schedule-text">
                    <div className="schedule-days">C 10:00 до 21:00 (Пн-Пт)</div>
                    <div className="schedule-days">С 11:00 до 20:00 (Сб-Вс)</div>
                </div>
            </div>
        </>
    )
}

export default Schedule