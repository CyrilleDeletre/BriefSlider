export default function SliderButton({onClickSlider, direction}){
// V1
    // let buttonDirection
    // if (direction === "chevronDirection") {
    //     buttonDirection="<"
    // }
    
    // else {
    //     buttonDirection=">"
    // }     
    
    // return(
    //     <button onClick={onClickSlider}>

    //         {buttonDirection}
            
    //     </button>
    // );

//V2 REFACTO
    return(
        <button onClick={onClickSlider}>
            {direction === "chevronDirection" 
            ? "<" 
            : ">"}
        </button>
    );
}




