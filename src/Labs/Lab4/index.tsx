import React from 'react'
import ClickEvent from './ClickEvent'
import PassingDataOnEvent from './PassingDataOnEvent'
import PassingFunctions from './PassingFunctions'
import EventObject from './EventObject'
import Counter from './Counter'
import BooleanStateVariables from './BooleanStateVariables'
import StringStateVariables from './StringStateVariables'
import DateStateVariable from './DateStateVariables'
import ObjectStateVariable from './ObjectStateVariable'
import ArrayStateVariable from './ArrayStateVariable'
import ParentStateComponent from './ParentStateComponent'
import ReduxExamples from './ReduxExamples'

const Lab4 = () => {
    function sayHello() {
        alert('Hello');
    }
  return (
    <div>
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions theFunction={sayHello}/>
      <EventObject />
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariable />
      <ObjectStateVariable />
      <ArrayStateVariable />
      <ParentStateComponent />
      <ReduxExamples />
    </div>
  )
}

export default Lab4
