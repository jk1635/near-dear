import React from 'react';

import styled from '@emotion/styled';

import { Swiper, SwiperSlide } from 'swiper/react';
import { css } from '@emotion/react';

import 'swiper/css';

import Flower1 from '../../../../public/Img/1.jpg';
import Flower2 from '../../../../public/Img/2.jpg';
import Flower3 from '../../../../public/Img/3.jpg';

const SliderImg = () => {
    return (
        <Swiper css={ContainerStyles}>
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
