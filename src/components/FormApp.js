import React from 'react';
import FormHeader from "./FormHeader";

class FormApp extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <FormHeader/>
            </div>
        );
    }
}

export default FormApp