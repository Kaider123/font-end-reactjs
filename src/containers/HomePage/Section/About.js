import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
class About extends Component {

    render() {
        return (
            <div className='section-share section-about'>
                <div className='section-container'>
                    <div className='section-about-header'>
                        Truyền thông nói về BookingCare
                    </div>
                    <div className='section-about-content'>
                        <div className='content-left'>
                            <iframe width="588" height="330"
                                src="https://www.youtube.com/embed/FyDQljKtWnI"
                                title="CÀ PHÊ KHỞI NGHIỆP VTV1 - BOOKINGCARE - HỆ THỐNG ĐẶT LỊCH KHÁM TRỰC TUYẾN"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                            </iframe>
                        </div>
                        <div className='content-right'>
                            <div className="about-item">
                                <div className='icon icon-1'></div>
                            </div>
                            <div className="about-item">
                                <div className='icon icon-2'></div>
                            </div>
                            <div className="about-item">
                                <div className='icon icon-3'></div>
                            </div>
                            <div className="about-item">
                                <div className='icon icon-4'></div>
                            </div>
                        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
