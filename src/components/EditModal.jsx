import { func } from 'prop-types'
import React, { useEffect, useState } from 'react'


export default function EditModal({table, editShow, toggleEditModal, addTable, tbls, showAlert, editTbl}) {
  const [maxIndex, setMaxIndex] = useState(0);
  const [updatedTbl, setUpdatedTbl] = useState({...table})

  function handleNameChange(e){ //table name change handler
    setUpdatedTbl({...updatedTbl, name: e.target.value});
  }

  useEffect(()=>{
    setUpdatedTbl(table)
  }, [table])

  function addField(e){
    let tableCopy = {...updatedTbl, fields: updatedTbl.fields.map((element, index)=>{
      return {...element}
    })}
    const insertIndex = parseInt(e.currentTarget.dataset.rowindex) + 1;
    tableCopy.fields.splice(insertIndex,0, {name: 'field'+(maxIndex+1), type: 'INT', isFKey: false, refTbl: 'NONE', refField: 'NONE'})
    setUpdatedTbl(tableCopy);
    setMaxIndex(maxIndex+1);
  }

  function delField(e){
    let tableCopy = {...updatedTbl, fields: updatedTbl.fields.map((element, index)=>{
      return {...element}
    })}
    if(tableCopy.fields.length<2){
      showAlert("Table must have at least one row!","danger");
      return;
    }
    tableCopy.fields.splice(parseInt(e.currentTarget.dataset.rowindex),1)
    setUpdatedTbl(tableCopy);
  }

  function handleChange(e){
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    const rowindex = parseInt(e.currentTarget.dataset.rowindex);
    let tableCopy = {}
    if(e.currentTarget.name==='isFKey'){ //to handle change in fkey checkbox

      let checked = e.currentTarget.checked;
      tableCopy = {...updatedTbl, fields: updatedTbl.fields.map((element, index)=>{
        if(index === rowindex){
          if(checked === false){
            return {...element, [name]:checked, refTbl: 'NONE', refField: 'NONE'}
          }
          return {...element, [name]: checked};
        } else {
          return {...element};
        }
      })}
    } else if (name === 'pKey'){ //handle change in pkey checkbox
      let currentField = updatedTbl.fields[parseInt(e.currentTarget.dataset.rowindex)];
      tableCopy = {...updatedTbl, pKey: currentField.name}
    } else {  //handle change in field name or type or any other text input
      tableCopy = {...updatedTbl, fields: updatedTbl.fields.map((element, index)=>{
        if(index === rowindex){
          return {...element, [name]: value};
        } else {
          return {...element};
        }
      })}
    }
    setUpdatedTbl(tableCopy);
  }

  function handleSelect(e){ //this function handles change in selection of all the select lists
    const name = e.currentTarget.name; //retrieving the name value of the select list, this will be same as the key in the updatedTbl dictionary
    const value = e.currentTarget.value; //retrieving the value of the select field
    const rowindex = parseInt(e.currentTarget.dataset.rowindex); //retrieving the field index using the data attribute of the select input
    if(name==='refTbl'){ //if the user has just changed the refTbl select option, we need to populate the corresponding refField select input with field names
      let refField = document.getElementsByClassName('refFieldInput')[rowindex];
      let reqTbl = e => e.name === value;
      let tblIndex = tbls.findIndex(reqTbl);
      if(value!=='NONE'){
        while (refField.options.length > 0) {
          refField.remove(0);
        }
        refField.add(new Option("NONE","NONE"), undefined);
        for(let field of tbls[tblIndex].fields){
          refField.add(new Option(field.name,field.name), undefined)
        }
      }
    } 
    let tableCopy = {...updatedTbl, fields: updatedTbl.fields.map((element, index)=>{ //now starting actually modifying the select field
        if(index === rowindex){
          return {...element, [name]: value};
        } else {
          return {...element};
        }
      
    })}
    setUpdatedTbl(tableCopy);
  }

  function addTbl(){
    for(let field of updatedTbl.fields){
      if(field.isFKey){
        if(field.refTbl==='NONE' || field.refField==='NONE'){
          showAlert("You must set referenced table and field if you have checked Foreign key!","warning");
          return;
        }
      }
    }
    let res = addTable(updatedTbl);
    if(res!==0){
      return;
    }
    toggleEditModal();
    setUpdatedTbl({name: 'table', pKey: 'id', fields: [{name: 'id', type: 'INT', isFKey: false, refTbl: '', refField: ''}]})
    setMaxIndex(0)
  }

  function closeEditModal(){
    setUpdatedTbl({name: 'table', pKey: 'id', fields: [{name: 'id', type: 'INT', isFKey: false, refTbl: '', refField: ''}]})
    setMaxIndex(0)
    toggleEditModal(0)
  }

  function editTable(){
    editTbl(updatedTbl);
    toggleEditModal();
  }
  return (
    editShow && <div className="overlay overflow-auto fixed justify-start md:justify-center  flex items-start pt-5 top-0 w-screen h-screen bg-black bg-opacity-35" id="addTblModal" data-modal-id="addTblModal">
        <div className="modal bg-white rounded">
            {/* Modal Header */}
            <div className="modal-header flex justify-between items-center border-blue-700 border-b-2 p-3">
              <button type="button" className="p-2 rounded-full transition-colors bg-slate-200 hover:bg-red-300" onClick={closeEditModal}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
              <p className='text-center text-lg font-medium '>Modify Table</p>
              <button className="bg-slate-200 p-2 rounded-full  transition-colors hover:bg-blue-300" type='button' onClick={editTable}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                </svg>
              </button>

            </div>

            {/* Modal Body */}
            <div className="modal-body p-5">
            <form className="flex flex-col overflow-auto">
                    <div className="formItem mb-3">
                        <label className='block' htmlFor='tableName'>Table Name</label>
                        <input name='tblName' id='tableName' className="border p-2 outline-blue-700" value={updatedTbl.name} onChange={handleNameChange} type='text' placeholder='Enter the table name'></input>
                    </div>
                    <table className='text-center border' cellPadding={15} cellSpacing={5}>
                      
                      <tbody>
                        <tr>
                          <th>Field name</th>
                          <th>Datatype</th>
                          <th>Primary Key</th>
                          <th>Foreign Key</th>
                          <th>Referenced Table</th>
                          <th>Referenced Field</th>
                        </tr>
                        {updatedTbl.fields.map((element, index)=>{
                          return <tr key={`row${index}`}>
                          <td>
                            <input name='name' type='text' className='border p-2 outline-blue-700' value={updatedTbl.fields[index].name} data-rowindex={index} placeholder='Enter table name' onChange={handleChange}></input>
                          </td>
                          <td>
                            <select name='type' className='border py-2 px-3 outline-blue-700' value={element.type} data-rowindex={index} onChange={handleSelect}>
                              <option>INT</option>
                              <option>CHAR</option>
                              <option>VARCHAR</option>
                              <option>BOOL</option>
                              <option>FLOAT</option>
                              <option>DATE</option>
                            </select>
                          </td>
                          <td>
                            <input name='pKey' type='checkbox' className='border p-2 w-5 h-5 accent-blue-700' checked={element.name===updatedTbl.pKey?true:false} data-rowindex={index} onChange={handleChange}></input>
                          </td>
                          <td>
                            <input name='isFKey' type='checkbox' className='border p-2 w-5 h-5 accent-blue-700' checked={updatedTbl.fields[index].isFKey} data-rowindex={index} onChange={handleChange}></input>
                          </td>
                          <td>
                            <select name='refTbl' className={`border py-2 px-3 outline-blue-700`} value={element.refTbl} data-rowindex={index} onChange={handleSelect} disabled={!element.isFKey}>
                              <option value="NONE">NONE</option>
                              {tbls && tbls.map((element, index)=>{
                                return <option key={index}>{element.name}</option>
                              })}
                            </select>
                          </td>
                          <td>
                            <select name='refField' className='refFieldInput border py-2 px-3 outline-blue-700' disabled={element.refTbl==='NONE'?true:false} value={element.refTbl==='NONE'?'NONE':element.refField} data-rowindex={index} onChange={handleSelect}>
                              <option value={'NONE'}>NONE</option>
                            </select>
                          </td>
                          <td>
                              <button type="button" className="rounded" data-rowindex={index} onClick={addField}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                              </button>
                          </td>
                          <td>
                              <button type="button" className="rounded" data-rowindex={index} onClick={delField}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                              </button>
                          </td>
                        </tr>
                        })}
                      </tbody>
                    </table>
                </form>
            </div>
        </div>
    </div>
  )
}