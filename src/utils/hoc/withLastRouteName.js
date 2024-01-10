import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setpreviousRoute } from '../../redux/reducer/appState';
import { useNavigation } from '@react-navigation/native';

const withLastRouteName = (Component) => (props) => {
    const dispatch = useDispatch();

    // const navigation = useNavigation();
    // const routes = navigation.getState()?.routes;
    // const prevRoute = routes[routes.length - 2].name;
    // console.log(routes,'routes sss ')
    // console.log(prevRoute,'prev route')
    const {route} = props;
    useEffect(() => {
        if(route && route.name) {
            dispatch(setpreviousRoute(route.name))
        }
    },[])
    return <Component>{props}</Component>
}
export default withLastRouteName;