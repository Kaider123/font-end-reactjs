import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss'
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../utils';
import { withRouter } from 'react-router';
import { changeLanguageApp } from '../../store/actions';

class HomeHeader extends Component {

    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language)
    }
    returnhome = () => {
        if (this.props.history) {
            this.props.history.push(`/home`)
        }

    }
    render() {
        let language = this.props.language;

        return (
            <React.Fragment>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <i className="fas fa-bars"></i>
                            <div className='header-logo' onClick={() => this.returnhome()}></div>
                        </div>
                        <div className='center-content'>
                            <div className='child-content'>
                                <div className='subs-title'><FormattedMessage id="homeheader.all" /></div>
                            </div>
                            <div className='child-content'>
                                <div className='subs-title'><FormattedMessage id="homeheader.at-home" /></div>
                            </div>
                            <div className='child-content'>
                                <div className='subs-title'><FormattedMessage id="homeheader.at-hospital" /></div>
                            </div>
                            <div className='child-content'>
                                <div className='subs-title'><FormattedMessage id="homeheader.healthy" /></div>
                            </div>
                            <div className='child-search'>
                                <i className="fa fa-search"></i>
                                <input type='text' placeholder='Tìm kiếm' />
                            </div>
                        </div>
                        <div className='right-content'>
                            <div className='hoptac'>
                                <i className="fas fa-handshake"></i>
                                <div><FormattedMessage id="homeheader.coop" /></div>
                            </div>
                            <div className='lichhen'>
                                <i className="fas fa-clock"></i>
                                <div><FormattedMessage id="homeheader.booking" /></div>
                            </div>
                            <div className='language'>
                                <div className={language === LANGUAGES.VI ? 'language-vi active' : 'language-vi'}><span onClick={() => this.changeLanguage(LANGUAGES.VI)}>VN</span></div>
                                <div className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'}><span onClick={() => this.changeLanguage(LANGUAGES.EN)}>EN</span></div>
                            </div>

                        </div>
                    </div>
                </div>
                {this.props.isShowBanner == true &&
                    <div className='home-header-banner'>
                        <div className='title'>Nơi khởi nguồn sức khỏe</div>
                        <div className='search'>

                            <input type='text' placeholder='Đặt câu hỏi với trợ lý AI' />
                            <i className="fas fa-paper-plane"></i>
                        </div>
                        <div className='options'>
                            <div className='option-child'>
                                <div className='option-logo1'></div>
                                <div className='text-option'>Làm thế nào để cải thiện chất lượng giấc ngủ?</div>
                            </div>
                            <div className='option-child'>
                                <div className='option-logo2'></div>
                                <div className='text-option'>Mắt đỏ lặp đi lặp lại nên đi khám không?</div>
                            </div>
                            <div className='option-child'>
                                <div className='option-logo3'></div>
                                <div className='text-option'>Sưng vùng lỗ tai bên ngoài phải làm sao?</div>
                            </div>
                        </div>
                    </div>
                }
            </React.Fragment>
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
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeHeader));
