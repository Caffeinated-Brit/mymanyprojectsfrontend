import React from 'react';
import { Link } from 'react-router-dom';

interface SectionProps {
    imageSrc: string;
    title: string;
    text: string;
    link: string;
    imageOnLeft: boolean;
}

const Projects = () => {
    return (
        <div style={styles.container}>
            <Section
                imageSrc="/images/cleaned_chairserver.jpg"
                title="This Site"
                text="This is the server this site right here your on now is hosted on. Yes yes I know a chair is not a good place for a server, its temporary. This server is running Proxmox with docker containers for this sites frontend and backend, both of witch are behind nginx proxy manager for the ssl with a bunch of other stuff like Home Assistant and some game servers."
                link="/Home"
                imageOnLeft={true}
            />
            <Section
                imageSrc="/images/logo512.png"
                title="MealFinder"
                text="This is an old project I did for a class that you enter keywords like ingredients or health or diet labels, note there is limited api access so dont spam it."
                link="/MealFinder"
                imageOnLeft={false}
            />
            <Section
                imageSrc="/images/cleaned_bees2.jpg"
                title="Ya like Bees?"
                text="Not really computer science related but thought id share anyway since I like my bees and its interesting."
                link=""
                imageOnLeft={true}
            />
            <Section
                imageSrc="/images/logo512.png"
                title="Title 4"
                text="Praesent mauris. Fusce nec tellus sed augue semper porta."
                link="/title4-details"
                imageOnLeft={false}
            />
        </div>
    );
};

const Section: React.FC<SectionProps> = ({ imageSrc, title, text, link, imageOnLeft }) => {
    return (
        <div
            style={{
                ...styles.section,
                flexDirection: imageOnLeft ? 'row' : 'row-reverse',
            }}
        >
            <img src={imageSrc} alt={title} style={styles.image} />
            <div style={styles.textContainer}>
                <Link to={link} style={{ textDecoration: 'none' }}>
                    <h2 style={styles.sectionTitle}>{title}</h2>
                </Link>
                <p style={styles.text}>{text}</p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        width: '100%',
        padding: '20px',
        borderRadius: '10px',
        backgroundColor: 'rgba(255, 127, 0, 1)',
        // backgroundImage: 'url("/public/images/background-image.jpg")'
    },
    section: {
        display: 'flex',
        alignItems: 'center',
        margin: '20px 0',
        padding: '20px',
        backgroundColor: 'rgba(242, 243, 244, 0.6)',
        borderRadius: '10px',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
    },
    image: {
        width: '30%',
        borderRadius: '10px',
        margin: '0 20px',
    },
    textContainer: {
        flex: 1,
    },
    sectionTitle: {
        fontSize: '1.5em',
        color: '#333',
        margin: '0 0 10px 0',
    },
    text: {
        fontSize: '1em',
        color: '#555',
        lineHeight: '1.6',
    },
};

export default Projects;
