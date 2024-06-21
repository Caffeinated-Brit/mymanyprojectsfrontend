import { useNavigate, Link } from "react-router-dom";
import './Projects.css';
const Projects = () => {

    return (
        <div className="container">
            <Section
                imageSrc="/images/cleaned_chairserver.jpg"
                title="This Site"
                text="This is the server this site right here your on now is hosted on. Yes yes I know a chair is not a
                good place for a server, its temporary. This server is running Proxmox with this sites frontend in a
                docker container and the backend in another it also hosts the user database and a bunch of other
                personal stuff but thats all im willing to say publicly on the internet for security and even that may
                be a bit too much."
                imageOnLeft={true}
            />
            <Section
                imageSrc="/images/logo512.png"
                title="Title 2"
                text="Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
                imageOnLeft={false}
            />
            <Section
                imageSrc="/images/cleaned_bees2.jpg"
                title="Ya like Bees?"
                text="Not really computer science related but thought id share anyway since I like my bees and its
                interesting."
                imageOnLeft={true}
            />
            <Section
                imageSrc="/images/logo512.png"
                title="Title 4"
                text="Praesent mauris. Fusce nec tellus sed augue semper porta."
                imageOnLeft={false}
            />
        </div>
    );
};

const Section: React.FC<{ imageSrc: string; title: string; text: string; imageOnLeft: boolean }> = ({
                                                                                                        imageSrc,
                                                                                                        title,
                                                                                                        text,
                                                                                                        imageOnLeft,
                                                                                                    }) => {
    return (
        <div className={`section ${imageOnLeft ? '' : 'reverse'}`}>
            <img src={imageSrc} alt={title} className="image" />
            <div className="textContainer">
                <h2 className="section-title">{title}</h2>
                <p className="text">{text}</p>
            </div>
        </div>
    );
};




export default Projects