import { useState } from "react";

const Section = ({title,description,isVisible,setIsVisible}) => {
    // const [isVisible, setIsVisible] = useState(false);
    return (
        <div className="border border-black p-2 m-2">
            <h3 className="font-bold text-xl">{title}</h3>
            {isVisible ? ( 
            <button
            onClick={() => setIsVisible(false)}
            className="cursor-pointer underline">
                Hide</button>
            ) : (<button
            onClick={() => setIsVisible(true)}
            className="cursor-pointer underline">Show</button>
            ) }
           {isVisible && <p>{description}</p>}    
        </div>
    );
};



const Instamart = () => {
    const [visibleSection, setVisibleSection] = useState("careers") //I'm controlling all these sections with just one state variables which is a STRING... This is better code and follow this
    //     showAbout: false,
    //     showTeam : false,
    //     showCareers : false,
    // })
    return(
        <div> <h2>Assume there're 100's of components in it</h2>
             <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
            <Section 
            title={"About Instamart"}
            description={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
            }
            isVisible = {visibleSection === "about"}
            setIsVisible = {() =>
            // setSectionConfig({
            //     showAbout: true,
            //     showTeam : false,
            //     showCareers : false,
            // })}
            setVisibleSection("about")}
            />
            
            {/* Here, we can't HIDE but can see, this is bz the state is not getting updated properly.. FIX IT */}

            <Section 
            title={"Team Instamart"}
            description={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
            }
            isVisible = {visibleSection === "team"}
            setIsVisible = {() =>
                setVisibleSection("team")}
            />
            
            <Section 
            title={"Careers"}
            description={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
            }
            isVisible = {visibleSection === "careers"}
            setIsVisible = {() =>
                setVisibleSection("careers")}
            />
        </div>
    );
};

export default Instamart;