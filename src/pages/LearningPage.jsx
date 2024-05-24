import { Fragment } from "react";

import FunctionalComponent from "../components/others/FunctionalComponent";
import ClassComponent from "../components/others/ClassComponent";
import CalculatorComponent from "../components/others/CalculatorComponent";
import StyleComponent from "../components/style/StyleComponent";

function LearningPage() {
  return <Fragment>
    <h1>Learning Page</h1>
    <StyleComponent />
    <FunctionalComponent />
    <ClassComponent />
    <CalculatorComponent />
  </Fragment >
}

// function LearningPage() {
//   return <>
//     <h1>Learning Page</h1>
//     <FunctionalComponent />
//     <ClassComponent />
//     <a href="abdulazizprogrammer.uz">Abdulaziz Programmer</a>
//   </>
// }

// function LearningPage() {
//   return <div>
//     <h1>Learning Page</h1>
//     <FunctionalComponent />
//     <ClassComponent />
//     <a href="abdulazizprogrammer.uz">Abdulaziz Programmer</a>
//   </div>
// }

export default LearningPage;