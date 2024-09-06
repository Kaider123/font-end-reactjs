import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ForYou.scss'
import { FormattedMessage } from 'react-intl';

class ForYou extends Component {

    render() {
        return (
            <div className='section-foryou'>
                <div className='foryou-content'>
                    <span>Dành cho bạn</span>
                </div>
                <div className='foryou-body'>
                    <div className='foryou-title'>
                        <div className='fy_image1'></div>
                        <span className='fy_text'>Bác sĩ</span>
                    </div>
                    <div className='foryou-title2'>
                        <div className='fy_image2'></div>
                        <span className='fy_text'>Chuyên khoa</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(ForYou);
