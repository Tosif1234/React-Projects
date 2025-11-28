import { useState } from 'react'
import './index.css'
import './App.css'
import JsxDemo from './components/JSXDemo'
import PropsStateDemo from './components/PropsStateDemo'
import ListRender from './components/ListRender'
import FormHandling from './components/FormHandling'
import LifecycleDemo from './components/LifeCycleDemo'
import Counter from './components/ClassComponent'

function App() {

  return (
    <>
      <JsxDemo />
      <PropsStateDemo name="Tosif" course="FullStack Devloper"/>
      <ListRender/>
      <FormHandling />
      <LifecycleDemo />
      <Counter />
    </>
  )
}

export default App
