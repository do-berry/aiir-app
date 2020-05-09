import React from 'react';
import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/en';
import example from '../defaults/example.json';
import './JsonEditor.css';

class JsonEditor extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='jsonInput'>
                <JSONInput
                    id='jsonInput'
                    placeholder={this.props.placeholder}
                    locale={locale}
                    height='370px'
                    width='370px'
                    onChange={(e) => this.props.onChange(e)}
                />
            </div>
        );
    }
}

export default JsonEditor;