import React from 'react'
import { useHistory } from 'react-router';
import { DashDashboard } from '../components/DashDashboard';
import { UseFecthUsuario } from '../hooks/useFecthUsuario';

export const Dashboard = () => {
    const {data} = UseFecthUsuario ()
    const history =  useHistory()
    console.log(data.role);
    return (<DashDashboard/>);
}
