import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
function List(props) {

    return (
        <>
            <div className="list-item-div" >
                <button className="del-btn cmn2" onClick={() => { props.delButtonHandler(props.id) }}>
                    <CloseIcon style={{ color: "white" }} />
                </button>
                <li className='list-item cmn2' >{props.currentItemValue}</li>
            </div>
        </>
    );
}

export default List; 
