import React, { useEffect } from 'react'
import { useState } from 'react';

export default function MainCanvas() {
    const [tbls,setTbls] = useState([{x: 0, y: 0, w: 150, h: 40, rh: 20, fields:[{name:'id',type:'int'}]}]);
    const [selections,setSelections] = useState({selectedTbl:0,is_dragging:false});
    useEffect(draw);
    let startX; //these are used to determine initial position of pointer
    let startY; //when dragging a table. It needs to be global because
    //initially, the values will be set by handleMouseDown and then modified
    //by tblDragHandler
    //this function checks if the value of arguments x,y lies in the table
    //represented by tbl argument and returns true or false accordingly
    function isPointerInTbl(x,y,tbl){
        let top = tbl.y;
        let left = tbl.x;
        let right = tbl.x + tbl.w;
        let bottom = tbl.y + tbl.h;
        if(x>=left && x <= right && y >= top && y <= bottom){
            return true;
        }
        return false;
    }
    
    //handleMouseDown checks if the click on canvas is on any of the 
    // tables in the state and sets the selectedTblIndex state variable
    // to the index of the table on which mouse button is down
    function handleMouseDown(event){
        event.preventDefault();
        //By default the clientY and clientX values will be relative to whole document
        //therefore we need to get offsets of the canvas relative to document
        //and subtract them from the clientX and clientY values.
        let clientX_correct = event.clientX - event.target.getBoundingClientRect().left;
        let clientY_correct = event.clientY - event.target.getBoundingClientRect().top;
        startX = parseInt(clientX_correct);
        startY = parseInt(clientY_correct);
        let index_clicked = 0;
        let sel = selections;
        for(let tb of tbls){
            if(isPointerInTbl(clientX_correct,clientY_correct,tb)){
                sel.is_dragging = true;
                sel.selectedTbl = index_clicked;
                setSelections(sel);
            }
            index_clicked+=1;
        }
        draw();
    }

    function handleMouseUp(event){
        event.preventDefault();
        let sel = selections;
        sel.is_dragging = false;
        setSelections(sel);
    }

    function tblDragHandler(event){
             
            if(!(selections.is_dragging)){
                return;
            }
            else{
                event.preventDefault();
                let clientX_correct = event.clientX - event.target.getBoundingClientRect().left;
                let clientY_correct = event.clientY - event.target.getBoundingClientRect().top;
                let mouseX = parseInt(clientX_correct);
                let mouseY = parseInt(clientY_correct);

                let dx = mouseX - startX;
                let dy = mouseY - startY;
                let all_tbls = tbls;
                all_tbls[selections.selectedTbl].x += dx;
                all_tbls[selections.selectedTbl].y += dy;
                setTbls(all_tbls);
                
                draw();
                startX = mouseX;
                startY = mouseY;
            }
    }


    //draw function draws all tables from the tbls state variable
    function draw(){
        const canvas = document.getElementById("canvas");
        const ctxt = canvas.getContext("2d");
        ctxt.font = '20px serif';
        ctxt.clearRect(0,0,canvas.width,canvas.height);
        let index = 0;
        for(let tbl of tbls){
            ctxt.strokeStyle = "orange";
            if(index===selections.selectedTbl){
                ctxt.strokeStyle = 'red';
            }
            ctxt.strokeRect(tbl.x,tbl.y,tbl.w,tbl.h); //drawing the outer rectangle
            //The origin for the text to be drawn is at the bottom left corner of the string

            //filling the header
            ctxt.fillText("Name",tbl.x+3,tbl.y+16);
            ctxt.fillText("Type",tbl.x+3+tbl.w/2,tbl.y+16);
            
            //creating the column seperator
            ctxt.beginPath();
            ctxt.moveTo(tbl.x+tbl.w*0.5,tbl.y);
            ctxt.lineTo(tbl.x+tbl.w*0.5,tbl.y+tbl.h);
            ctxt.stroke();

            //now creating all other fields and their upper row borders
            let row_index = 1;
            for(let row of tbl.fields){
                ctxt.beginPath();
                ctxt.moveTo(tbl.x,tbl.y+tbl.rh*(row_index));
                ctxt.lineTo(tbl.x+tbl.w,tbl.y+tbl.rh*(row_index))
                ctxt.stroke();
                ctxt.fillText(row.name,tbl.x+3,tbl.y+16+tbl.rh*(row_index));
                ctxt.fillText(row.type,tbl.x+3+tbl.w*0.5,tbl.y+16+tbl.rh*(row_index));
                row_index+=1;
            }
            index+=1;
        }
      }

    window.document.onload = draw;
    //adds fields to the selectedTblIndex table
    function addRow(){
        let key = document.querySelector("#field_name").value;
        let val = document.querySelector("#field_type").value;
        document.querySelector("#field_name").value = '';
        document.querySelector("#field_type").value = '';
        let all_tbls = tbls;
        all_tbls[selections.selectedTbl].h += 20;
        all_tbls[selections.selectedTbl].fields.push({name:key, type:val});
        setTbls(all_tbls);
        draw();
    }

    //deletes fields from the selectedTblIndex table
    function delRow(){
        let all_tbls = tbls;
        if(all_tbls[selections.selectedTbl].fields.length<2){
            return;
        }
        all_tbls[selections.selectedTbl].h -= 20;
        all_tbls[selections.selectedTbl].fields.pop();
        setTbls(all_tbls);
        draw();
    }

    //this function is used to add new table to the canvas
    function addTbl(){
        let all_tbls = tbls;
        let last_element = all_tbls[all_tbls.length-1];
        let new_element = {x:last_element.x+50,y:last_element.y+50,w:150,h:40,rh:20,fields:[{name:'id',type:'int'}]};
        new_element.x = last_element.x+50;
        new_element.y = last_element.y+50;
        all_tbls.push(new_element);
        setTbls(all_tbls);
        draw();
    }

    //zoom into the canvas
    function incsize(){
        const canvas = document.getElementById("canvas");
        const ctxt = canvas.getContext("2d");
        ctxt.scale(1.25,1.25);
        draw();
    }

    //zoom out of the canvas
    function decsize(){
        const canvas = document.getElementById("canvas");
        const ctxt = canvas.getContext("2d");
        ctxt.scale(0.75,0.75);
        draw();
    }
  return (
    <div className='m-3 border'>
        <canvas id='canvas' className='border border-danger' width='1000' height='600' onMouseDown={handleMouseDown} onMouseMove={tblDragHandler} onMouseUp={handleMouseUp}></canvas>
        <br></br>
        <button className='btn btn-secondary mx-2' onClick={incsize}>Zoom In</button>
        <button className='btn btn-secondary mx-2' onClick={decsize}>Zoom Out</button>
        <button className='btn btn-secondary mx-2' onClick={addRow}>Add Row</button>
        <button className='btn btn-secondary mx-2' onClick={delRow}>Delete Row</button>
        <button className='btn btn-success mx-2' onClick={addTbl}>Add Table</button>
        <input type='text' id='field_name'></input>
        <input type='text' id='field_type'></input>
    </div>
  )
}