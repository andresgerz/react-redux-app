import React from 'react';
import { connect } from 'react-redux';
import { UPDATE_DATA } from '../redux/actions';
import store from '../store';


const change = props => {
    
    let city = document.getElementById("a-city").value;
    props.updateData(city);
}


const Calculator = props => (
    <div>
        <h1>React Redux App</h1>
        <form onSubmit={e => {
            e.preventDefault()
        }}>
         
            <input
                type="text" 
                placeholder="Write a city" 
                id="a-city">
            </input>
            <br/>
            
            <button
                onClick={() => change(props)}>
                Update
            </button>
            <h4>City: {props.forecast.city}</h4>
        </form>
    </div>
)

const mapStateToProps = state => ({
    forecast: {
        city: state.city
    }
})

const mapDispatchToProps = dispatch => ({
    updateData(city) {
        dispatch({
            type: UPDATE_DATA,
            city
        })
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);