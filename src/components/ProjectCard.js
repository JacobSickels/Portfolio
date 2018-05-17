import React from 'react';
import { connect } from 'react-redux';

export class ProjectCard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`col s12 m${this.props.col}`}>
                <div className="card">
                    <div className="card-image">
                        <img src={ this.props.image } alt={this.props.alt_text} />
                        <span className="card-title">{ this.props.name }</span>
                        <a className="btn-floating halfway-fab waves-effect waves-light amber">
                            <i className="material-icons">visibility</i>
                        </a>
                    </div>
                    <div className="card-content">
                        <p>{ this.props.simple_desc }</p>
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state, props) => {
    
    const found = state.projects.find((entry) => entry.name.toLowerCase() === props.name.toLowerCase());

    return { ...found }

}

export default connect(mapStateToProps)(ProjectCard);