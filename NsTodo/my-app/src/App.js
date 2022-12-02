import React, { Fragment, useState } from 'react'
import InputField from './InputField'
import ListField from './ListFields'

function App() {
  const [inputTxt, SetinputTxt] = useState("")
  const [arr, Setarr] = useState([]);
  const [editingNode, SeteditingNode] = useState(null);

  function addLists(e) {
    e.preventDefault();
    Setarr([...arr, { name: inputTxt, Done: false, id: Date.now() }])
    SetinputTxt("");
  }
  function delList(props) {
    Setarr(arr.filter((item) => {
      return item.id !== props;
    }))
  }
  function EditList(props) {
    SeteditingNode({ ...props });
  }
  function emargeList() {
    Setarr(arr.map((item) => {
      if (item.id === editingNode.id) {
        return editingNode;
      } else {
        return item;
      }
    }))
    SeteditingNode(null);
  }
  return (
    <>
        <InputField
          SetinputTxt={SetinputTxt}
          addLists={addLists}
          inputTxt={inputTxt} />
        <ListField arr={arr}
          editingNode={editingNode}
          delList={delList}
          EditList={EditList}
          SeteditingNode={SeteditingNode}
          emargeList={emargeList} />
    </>
  );
}

export default App;
