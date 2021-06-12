import { useEffect } from "react";
import { BubbleContainer, BubbleItems, Bubbles } from "./LandingPageStyle";


const LandingPage = () => {

    /* useEffect(() => {

    }, [BubbleContainer, BubbleItems, Bubbles]) */

    return (
        <div>
            <BubbleContainer>
                <Bubbles>
                    <BubbleItems></BubbleItems>
                    <BubbleItems></BubbleItems>
                    <BubbleItems></BubbleItems>
                    <BubbleItems></BubbleItems>
                </Bubbles>
            </BubbleContainer>
        </div>
    )
}

export default LandingPage;
