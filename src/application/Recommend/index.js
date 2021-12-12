import React, { useEffect } from "react";
import Slider from '../../components/slider';
import RecommendList from '../../components/list';
import { Content } from "./style";
import Scroll from "../../components/scroll";
import { connect } from "react-redux";
import * as actionCreators from './store/actionCreators';
import { forceCheck } from "react-lazyload";
import Loading from "../../baseUI/loading";

function Recommend(props) {
    const { bannerList, recommendList } = props;
    const { getBannerDataDispatch, getRecommendListDataDispatch, enterLoading } = props;

    useEffect(() => {
        if (!bannerList.size) {
            getBannerDataDispatch();
        }
        
        if (!recommendList.size) {
            getRecommendListDataDispatch();
        }
        //eslint-disable-next-line
    }, []);

    const bannerListJS = bannerList ? bannerList.toJS() : [];
    const recommendListJS = recommendList ? recommendList.toJS() : [];

    return (
        <Content>
            <Scroll className="list" onScroll={forceCheck}>
                <div>
                    <Slider bannerList={bannerListJS} />
                    <RecommendList recommendList={recommendListJS}></RecommendList> 
                </div>
            </Scroll>
            { enterLoading ? <Loading></Loading> : null }
        </Content>
    );
}


const mapStateToProps = (state) => {
    return {
        bannerList: state.recommend.get('bannerList'),
        recommendList: state.recommend.get('recommendList'),
        enterLoading: state.recommend.get('enterLoading')
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getBannerDataDispatch() {
            dispatch(actionCreators.getBannerList());
        },
        getRecommendListDataDispatch() {
            dispatch(actionCreators.getRecommendList());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Recommend));