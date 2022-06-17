import React from 'react'
import "./Receipe.css"
import Button from 'react-bootstrap/esm/Button'

const HeadReceipe = (props) => { 
    const {search,onChnageEvent}=props;
    return (
        <>
            <div className='headreceipe'>
                <h1 className='display-1'>
                    <i className='material-icons'>fastfood</i>Food Recepe
                </h1>
                <div className="input-group mx-auto w-50">
                    <input type="text" 
                    className="form-control" 
                    placeholder='Search your favorite food...'
                    value={search}
                    onChange={onChnageEvent} />
                    <div className='input-group-append'>
                        <Button variant='dark'>Search Recepe</Button>
                    </div> 
                </div>
            </div>
        </>
    )
}

export default HeadReceipe
