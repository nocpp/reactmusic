import React from "react";
import Slider from '../../components/slider';
import RecommendList from '../../components/list';

function Recommend() {
    const bannerList = new Array(5).fill({
        imageUrl: "http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg"
    });

    let recommendList = new Array(10).fill(0);

    recommendList.forEach((item, index) => {
        recommendList[index] = {
            id: index + 1,
            picUrl: "https://p1.music.126.net/fhmefjUfMD-8qtj3JKeHbA==/18999560928537533.jpg",
            playCount: 17171122 + Math.floor(Math.random() * 100) + 1,
            name: "朴树、许巍、李健、郑钧、老狼、赵雷"
        };
    })

    return <div>
        <Slider bannerList={bannerList} />
        <RecommendList recommendList={recommendList}></RecommendList> 
    </div>;
}

export default React.memo(Recommend);