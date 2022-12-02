import React from 'react'
import { Fragment } from 'react';
function ListFields({ arr, editingNode, delList, EditList, SeteditingNode, emargeList }) {
    return (
        <div className='ListField'>
            {arr.map((item) => {
                const isEditing = editingNode?.id === item.id;
                return (<li className='list' key={item.id}>
                    {!isEditing && <Fragment>
                        <span>{item.name}</span>
                        <button className='edit' onClick={() => EditList(item)}>Edit</button>
                        <button className='delete' onClick={() => delList(item.id)}>Delete</button>
                    </Fragment>
                    }
                    {isEditing && <textarea className='editTask' value={editingNode.name} onChange={(e) => SeteditingNode({ ...editingNode, name: e.target.value })}></textarea>}
                    {isEditing && editingNode.name === "" && <button id="saveTask" disabled>Save</button>}
                    {isEditing && editingNode.name !== "" && <button id="saveTask" onClick={() => emargeList()}>Save</button>}
                </li>
                )
            })}
        </div>
    )
}

export default ListFields