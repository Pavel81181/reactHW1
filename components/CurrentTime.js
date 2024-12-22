import "../Time.css"
function CurrentTime() {
    let time = new Date;
    return (
        <div className="time">
            <h1>
                Текущее время: {time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}
                
            </h1>
            <h1>
                
                Текущая дата: {time.toLocaleDateString("ru")}
            </h1>

        </div>
      );
}

export default CurrentTime;