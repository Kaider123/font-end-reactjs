import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
class OutstandingDoctor extends Component {

    render() {
        return (
            <div className='section-share section-outstanding-doctor'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Bác sĩ nổi bật</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='outer-bg'>
                                    <div className='bg-image section-oustanding-doctor'></div>
                                    <div className='position text-center'>
                                        <div>Giáo sư, tiến sỉ Thanh Phong</div>
                                        <div>Cơ xương khớp</div>
                                    </div>

                                </div>

                            </div>
                            <div className='section-customize'>
                                <div className='outer-bg'>
                                    <div className='bg-image section-oustanding-doctor'></div>
                                    <div className='position text-center'>
                                        <div>Giáo sư, tiến sỉ Thanh Phong</div>
                                        <div>Cơ xương khớp</div>
                                    </div>

                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='outer-bg'>
                                    <div className='bg-image section-oustanding-doctor'></div>
                                    <div className='position text-center'>
                                        <div>Giáo sư, tiến sử Thanh Phong</div>
                                        <div>Cơ xương khớp</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='outer-bg'>
                                    <div className='bg-image section-oustanding-doctor'></div>
                                    <div className='position text-center'>
                                        <div>Giáo sư, tiến sử Thanh Phong</div>
                                        <div>Cơ xương khớp</div>
                                    </div>

                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='outer-bg'>
                                    <div className='bg-image section-oustanding-doctor'></div>
                                    <div className='position text-center'>
                                        <div>Giáo sư, tiến sử Thanh Phong</div>
                                        <div>Cơ xương khớp</div>
                                    </div>

                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='outer-bg'>
                                    <div className='bg-image section-oustanding-doctor'></div>
                                    <div className='position text-center'>
                                        <div>Giáo sư, tiến sử Thanh Phong</div>
                                        <div>Cơ xương khớp</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='outer-bg'>
                                    <div className='bg-image section-oustanding-doctor'></div>
                                    <div className='position text-center'>
                                        <div>Giáo sư, tiến sử Thanh Phong</div>
                                        <div>Cơ xương khớp</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='outer-bg'>
                                    <div className='bg-image section-oustanding-doctor'></div>
                                    <div className='position text-center'>
                                        <div>Giáo sư, tiến sử Thanh Phong</div>
                                        <div>Cơ xương khớp</div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor);
