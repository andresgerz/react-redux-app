import { createStore } from 'redux';
import { UPDATE_DATA } from './redux/actions';
import { updateData } from './redux/reducers';

const reducer = (state, action) => {
    
    switch(action.type) {
        case UPDATE_DATA:
            return updateData(state, action)
        
        default:
            return state         
    }
}
    

const initialState = {
    forecast: {
        city: "Buenos Aires, AR"
    }
    
}

export default createStore(reducer, initialState);