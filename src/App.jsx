
import './App.css';
import { Course } from './Course';
import { useState } from 'react';
import CCSharp from './img/ccsharp.png';
import Angular from './img/angular.jpg';
import Bootstrap from './img/bootstrap5.png';
import FullStack from './img/kompleweb.jpg';

function getRandomCourse() {
      const courseArray = ['FullStack', 'Angular', 'CCSharp', 'Bootstrap']
      return courseArray[Math.floor(Math.random() * courseArray.length)]
}
function App() {
      const [value, setValue] = useState(4)
      const [image, setİmage] = useState([])

      return (
            <div className="container">
                  <div className="headTitle bg-slate-500 p-6 text-white flex justify-between">
                        <Course head="Course Projects" />
                        <button className="courseAddbutton" onClick={() => {
                              setValue(value + 1);
                              setİmage([...image, getRandomCourse()])
                        }}>
                              Kurs Ekle
                        </button>
                  </div>
                  <div className="flex flex-wrap">
                        <div className="w-full sm:w-1/2 md:w-1/4 p-4"><Course image={FullStack} title="FullStack" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laboriosam facilis eaque dolor iure esse dolorem voluptatibus, ullam sequi, ea atque, alias labore. Accusamus ab suscipit voluptas maxime inventore fuga?" /></div>
                        <div className="w-full sm:w-1/2 md:w-1/4 p-4"><Course image={Angular} title="Angular" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laboriosam facilis eaque dolor iure esse dolorem voluptatibus, ullam sequi, ea atque, alias labore. Accusamus ab suscipit voluptas maxime inventore fuga?" /></div>
                        <div className="w-full sm:w-1/2 md:w-1/4 p-4"><Course image={CCSharp} title="CCSharp" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laboriosam facilis eaque dolor iure esse dolorem voluptatibus, ullam sequi, ea atque, alias labore. Accusamus ab suscipit voluptas maxime inventore fuga?" /></div>
                        <div className="w-full sm:w-1/2 md:w-1/4 p-4"><Course image={Bootstrap} title="Bootstrap" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laboriosam facilis eaque dolor iure esse dolorem voluptatibus, ullam sequi, ea atque, alias labore. Accusamus ab suscipit voluptas maxime inventore fuga?" /></div>
                  </div>
                  <div className="flex">
                        <div className="sm:w-2/2 md:w-4/4 p-4">  {
                              image.map((course, index) => {
                                    return <Course key={index} title={course} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laboriosam facilis eaque dolor iure esse dolorem voluptatibus, ullam sequi, ea atque, alias labore. Accusamus ab suscipit voluptas maxime inventore fuga?" />
                              })
                        }</div>
                  </div>
                  <div>
                        <h3 className="text-center mt-10">Kurs Sayısı : {value}</h3>
                  </div>

            </div>
      )
}

export default App
