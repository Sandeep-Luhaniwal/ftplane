import React from "react";
import { StackedCarousel, ResponsiveContainer } from "react-stacked-center-carousel";
import { Slide } from "./Slide";
import dotted from '../assets/images/png/dotted_line.png'
import { LeftarrowIcon, RightarrowIcon } from "./Icon";

const data = [
    {
        id: "1",
        heading: "Economy Saver",
        heading1: "Economy",
        Passenger: "Raju Mullah",
        flight: "#5486626661",
    },
    {
        id: "2",
        heading: "Busniness Saver",
        heading1: "Busniness",
        Passenger: "Raju",
        flight: "#5486626662",
    },
    {
        id: "3",
        heading: "First Saver",
        heading1: "First",
        Passenger: "Ankit",
        flight: "#5486626689",
    },
    {
        id: "4",
        heading: "Economy Saver",
        heading1: "Economy",
        Passenger: "Lakshay",
        flight: "#5486626690",
    },
    {
        id: "5",
        heading: "Busniness Saver",
        heading1: "Busniness",
        Passenger: "Sachin",
        flight: "#5486626623",
    },
    {
        id: "6",
        heading: "First Saver",
        heading1: "First",
        Passenger: "Anil",
        flight: "#5486626697",
    }
];

function Pagination(props) {
    const { centerSlideDataIndex, updatePosition } = props;
    console.log("🚀 ~ centerSlideDataIndex--000", centerSlideDataIndex);
    return (
        <div
            className="dots"
        >
            {data.map((_, index) => {
                const isCenterSlide = props.centerSlideDataIndex === index;
                return (
                    <div
                        onClick={() => {
                            updatePosition(index);
                        }}
                        style={{
                            height: 10,
                            width: 10,
                            borderRadius: "100%",
                            background: isCenterSlide ? "white" : "#1A1B39",
                            cursor: "pointer",
                        }}

                    />
                );
            })}
        </div>
    );
}

const CardExample = () => {
    const ref = React.useRef(StackedCarousel);
    const [centerSlideDataIndex, setCenterSlideDataIndex] = React.useState(0);
    const onCenterSlideDataIndexChange = (newIndex) => {
        setCenterSlideDataIndex(newIndex);
    };

    const updatePosition = (index) => {
        console.log("🚀 ~ ition ~ index", index);
        console.log("🚀 ~centerSlideDataIndex--111", centerSlideDataIndex);
        console.log("🚀 subtract", index - centerSlideDataIndex);
        ref?.current?.swipeTo(index - centerSlideDataIndex);
    };

    return (
        <div className="position-relative ps-1 ms-sm-4 ps-sm-3 ps-md-0 ms-md-0 ">
            <div style={{ width: "100%", position: "relative" }}>
                <ResponsiveContainer
                    carouselRef={ref}
                    render={(width, carouselRef) => {
                        return (
                            <StackedCarousel className="pb-500"
                                ref={carouselRef}
                                slideComponent={Slide}
                                slideWidth={450}
                                carouselWidth={width}
                                data={data}
                                maxVisibleSlide={5}
                                disableSwipe
                                transitionTime={1000}
                                onActiveSlideChange={onCenterSlideDataIndexChange}
                            />
                        );
                    }}
                />
                <div
                    className="leftBtn"
                    size="small"
                    onClick={() => ref.current?.goBack()}
                >
                    <LeftarrowIcon />
                </div>
                <div
                    className="rightBtn"
                    size="small"
                    onClick={() => ref.current?.goNext()}
                >
                    <RightarrowIcon />
                </div>
                <div className="dottedLine d-none d-sm-block d-md-none d-lg-block">
                    <img src={dotted} alt="dotted" />
                </div>
            </div>
            <Pagination
                updatePosition={updatePosition}
                centerSlideDataIndex={centerSlideDataIndex}
            />
        </div>
    );
};

export default CardExample;