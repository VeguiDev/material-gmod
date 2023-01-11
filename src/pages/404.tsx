import {useLocation} from 'react-router-dom';

export function Page404() {

    let location = useLocation();
    console.log(JSON.stringify(location));

    return (
        <h1>Cannot GET </h1>
    )

}