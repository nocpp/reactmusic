import React, { useEffect } from "react";
import Slider from '../../components/slider';
import RecommendList from '../../components/list';
import { Content } from "./style";
import Scroll from "../../components/scroll";
import { connect } from "react-redux";
import * as actionCreators from './store/actionCreators';

function Recommend(props) {
    const { bannerList, recommendList } = props;
    const { getBannerDataDispatch, getRecommendListDataDispatch } = props;

    useEffect(() => {
        getBannerDataDispatch();
        getRecommendListDataDispatch();
        //eslint-disable-next-line
    }, []);

    console.log(recommendList);

    const bannerListJS = bannerList ? bannerList.toJS() : [];
    const recommendListJS = recommendList ? recommendList.toJS() : [];

    return (
        <Content>
            <Scroll className="list">
                <div>
                    <Slider bannerList={bannerListJS} />
                    <RecommendList recommendList={recommendListJS}></RecommendList> 
                </div>
            </Scroll>
        </Content>
    );
}


const mapStateToProps = (state) => {
    return {
        bannerList: state.recommend.get('bannerList'),
        recommendList: state.recommend.get('recommendList')
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