import React, {useState} from "react"
import "./layout-page.css"
function LayoutPage() {
  const [progress, setProgress] = useState(75)

  const changeProgress = () => {
    let min = Math.ceil(10);
    let max = Math.floor(100);
    setProgress(Math.floor(Math.random() * (max - min + 1)) + min)
  }

  return (
    <div className="popup-wrapper">
        <div className="popup-body">
          <div className="popup-background-cover">
          <div className="popup-top">
            <h3 className="popup-title">Обучение продажам</h3>
            <p className="sales">Вы сделали 13 продаж и заработали:</p>
            <p className="earnings">$ 2 000</p>
          </div>
          <div className="popup-bottom">
            <h4 className="progress-title">Месячный план выполнен на</h4>

            <Progress progress={progress}/>

            <div className="continue-subscribe">
              <button onClick={changeProgress} className="continue-btn">Продолжить</button>
              <p className="day-left">Осталось 8 дней</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Progress = ({progress}) => {
  return (
    <div className="progress-bar" >
      <div className="progress-line" style={{width: progress + "%"}}/>
      {progress}%
    </div>
  )
};


export default LayoutPage;