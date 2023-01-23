import { useState } from "react";
import SliderButton from "./SliderButton";

export default function Slider(){
    // state

        const slides =
            [
                { src: './img/1.jpg', alt: 'Petite ruelle avec des poubelles et des murs taggés', legend: 'Street Art' },
                { src: './img/2.jpg', alt: 'Une route sur un pont avec une ville en arrière plan', legend: 'Fast Lane' },
                { src: './img/3.jpg', alt: 'Kuggen Building, un bâtiment suedois très coloré', legend: 'Colorful Building' },
                { src: './img/4.jpg', alt: 'Un immeuble de nuit avec des appartements éclairés', legend: 'Skyscrapers' },
                { src: './img/5.jpg', alt: 'Une rue de grande ville de nuit très éclairée, vue depuis le dernier etage d\'un immeuble', legend: 'City by night' },
                { src: './img/6.jpg', alt: 'La tour Eiffel de nuit', legend: 'Tour Eiffel la nuit' }
            ];

        const [currentImg, setCurrentImg] = useState (0);

        const [enabledButton, setEnabledButton] = useState(true);
    

    // event

    const sliderRightButton = () => {
        if (enabledButton === true) {
            setEnabledButton(false)

            setCurrentImg(currentImg + 1)
            if(currentImg === slides.length - 1){
                setCurrentImg(0);
            }

            setTimeout(() => {
                setEnabledButton(true);
            }, 1500)
        }
    }

    const sliderLeftButton = () => {
        if (enabledButton === true) {
            setEnabledButton(false)

            if(currentImg === 0){
                setCurrentImg(slides.length-1);
            }

            else{
                setCurrentImg(currentImg -1)
            }

            setTimeout(() => {
                setEnabledButton(true);
            }, 1500)
        }
    }

    // affichage
    
        return(
            <article>
                <SliderButton 
                onClickSlider={sliderLeftButton}
                direction={"chevronDirection"}
                ></SliderButton>

                <figure>
                    <img 
                        src={slides[currentImg].src}
                        alt={slides[currentImg].alt}
                    />
                    <figcaption>{slides[currentImg].legend}</figcaption>
                </figure>
                
                <SliderButton 
                onClickSlider={sliderRightButton}
                ></SliderButton>
            </article>
        
        )
}
