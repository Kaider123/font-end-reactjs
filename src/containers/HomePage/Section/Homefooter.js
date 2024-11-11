import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
class Homefooter extends Component {

    render() {
        return (
            <div className='home-footer'>
                <div className='footer'>
                    <div className='copyright'>
                        <p>&copy; 2024 Trần Hà Thanh Phong.</p>
                    </div>
                    <div className='logocontact'>
                        <i class="fas fa-square-facebook"></i>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homefooter);
