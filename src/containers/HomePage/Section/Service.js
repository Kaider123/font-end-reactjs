import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Service.scss'
import { FormattedMessage } from 'react-intl';

class Service extends Component {

    render() {
        return (
            <div class="service-container">
                <h2>Dịch vụ toàn diện</h2>
                <div class="services-grid">
                    <div class="service-item">
                        <div className='icon icon-1'></div>
                        <span>Khám Chuyên khoa</span>
                    </div>
                    <div class="service-item">
                        <div className='icon icon-2'></div>
                        <span>Khám từ xa</span>
                    </div>
                    <div class="service-item">
                        <div className='icon icon-3'></div>
                        <span>Khám tổng quát</span>
                    </div>
                    <div class="service-item">
                        <div className='icon icon-4'></div>
                        <span>Xét nghiệm y học</span>
                    </div>
                    <div class="service-item">
                        <div className='icon icon-5'></div>
                        <span>Sức khỏe tinh thần</span>
                    </div>
                    <div class="service-item">
                        <div className='icon icon-6'></div>
                        <span>Khám nha khoa</span>
                    </div>
                    <div class="service-item">
                        <div className='icon icon-7'></div>
                        <span>Gói Phẫu thuật</span>
                    </div>
                    <div class="service-item">
                        <div className='icon icon-8'></div>
                        <span>Sống khỏe Tiểu đường</span>
                    </div>
                    <div class="service-item">
                        <div className='icon icon-9'></div>
                        <span>Bài Test Sức khỏe</span>
                    </div>
                    <div class="service-item">
                        <div className='icon icon-10'></div>
                        <span>Y tế gần bạn</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(Service);
