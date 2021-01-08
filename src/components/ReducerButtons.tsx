import {useContext} from 'react'
import {AppContext} from '../utils/AppState'


export const ReducerButtons = () => {
    const context = useContext(AppContext)
    const {returnValue, On, Off} = context
    return (
        <div>
            {returnValue && <div>Visable</div>}
            <button onClick={On}>Action One</button>
            <button onClick={Off}>Action Two</button>
        </div>
    )
}