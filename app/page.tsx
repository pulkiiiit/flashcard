"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const flashcards = [{quesiton: "Q1", answer: "A1"},{quesiton: "Q2", answer: "A2"},{quesiton: "Q3", answer: "A3"},{quesiton: "Q4", answer: "A4"},{quesiton: "Q5", answer: "A5"},]
  const [showAnswer , setShowAnswer] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  function handlePrevious(): void {
    if(currentIndex >0){
      setCurrentIndex(currentIndex - 1);
      setShowAnswer(false);
    }
  }
  function handleNext(): void {
    if(currentIndex >=0){
      setCurrentIndex(currentIndex + 1);
      setShowAnswer(false);
    }
  }
  function handleShowAnswer(): void {
      if(showAnswer===false){
        setShowAnswer(true);
      }else if (showAnswer===true){
        setShowAnswer(false);
      }
  }

  return (
    <main>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="">
          <p className="text-3xl mb-3 font-bold" >Flash Cards</p>
          <div className="flex items-center justify-between w-150 border border-gray-500 rounded-xl pl-1 pr-1">
            <div className="flex items-center">
              <div className="h-10 w-50 bg-gray-400 m-1 rounded-xl"></div>
              <div className="ml-3"><p>25%</p></div>
            </div>
            <div className="font-bold">5 of 20</div>
          </div>
          <div className="border border-gray-500 rounded-xl mt-3 p-2 ">
            <div>
              <div className="flex items-center justify-center h-90 bg-gray-100 rounded-2xl">
                <div className="text-3xl w-70 font-bold ">{showAnswer ? flashcards[currentIndex].answer : flashcards[currentIndex].quesiton}</div>
              </div>
              <div>
                <div className="flex items-center  h-12 bg-gray-100 rounded-2xl mt-2">
                <div className="flex justify-between w-full p-2">
                  <button onClick={handlePrevious}> &lt;  Previous</button>
                  <button onClick={handleShowAnswer} className="font-bold">Show Answer</button>
                  <button onClick={handleNext}>Next &gt;</button>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
