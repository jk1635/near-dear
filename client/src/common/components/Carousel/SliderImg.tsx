import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import 'swiper/css';

import Flower1 from '../../../../public/images/1.jpg';
import Flower2 from '../../../../public/images/2.jpg';
import Flower3 from '../../../../public/images/3.jpg';

const SliderImg = () => {
    return (
        <Swiper css={ContainerStyles} spaceBetween={5} rewind={true}>
            <SwiperSlide>
                <ImgItem src={Flower1} />
            </SwiperSlide>
            <SwiperSlide>
                <ImgItem src={Flower2} />
            </SwiperSlide>{' '}
            <SwiperSlide>
                <ImgItem src={Flower3} />
            </SwiperSlide>
        </Swiper>
    );
};

const ContainerStyles = css`
    width: 100%;
    height: 500px;
`;

const ImgItem = styled.img`
    width: 100%;
    height: 500px;
    object-fit: cover;
`;

export default SliderImg;
