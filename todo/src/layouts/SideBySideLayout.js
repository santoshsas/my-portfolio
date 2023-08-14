import { Menu } from '../components/Menu'
import { Outlet } from 'react-router-dom';
import './SideBySideLayout.css'
export function SideBySideLayout () {
    return (
        <div className='side-layout'>
            <Menu></Menu>
            <div className='main'>
                <Outlet></Outlet>
            </div>
        </div>
    )
}