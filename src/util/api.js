import axios from "axios";

const URL = process.env.FLASK_APP;

const apiFlask = axios.create({
    baseURL: URL
});

const createHeader = (token) => {

    let headers = {
        header: {
            'Accept': 'application/json',
        }
    };

    if ( token != 'none' ) headers.header['x-access-token'] = token;

    return headers;
}

export const GET = async ( endPoint, token = 'none' ) => {

    const header = createHeader(token);

    return apiFlask.get( endPoint , header );

}

export const POST = async ( endPoint, data = {} ,token = 'none' ) => {

    const header = createHeader(token);

    return apiFlask.post( endPoint, data, header );
    
}