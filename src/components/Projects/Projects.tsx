import { useNavigate, Link } from "react-router-dom";
const Projects = () => {

    return (
        <div style={styles.container}>
            <Section
                imageSrc="/images/logo512.png"
                title="This Site"
                text="This is the server this site right here your on now is hosted on."
                imageOnLeft={true}
            />
            <Section
                imageSrc="/images/logo512.png"
                title="Title 2"
                text="Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
                imageOnLeft={false}
            />
            <Section
                imageSrc="/images/logo512.png"
                title="Title 3"
                text="Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum."
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
        <div style={{ ...styles.section, flexDirection: imageOnLeft ? 'row' : 'row-reverse' }}>
            <img src={imageSrc} alt={title} style={styles.image} />
            <div style={styles.textContainer}>
                <h2 style={styles.title}>{title}</h2>
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
        backgroundColor: '#f0f0f5',
    },
    section: {
        display: 'flex',
        alignItems: 'center' as 'center',
        margin: '20px 0',
        padding: '20px',
        backgroundColor: '#fff',
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
    title: {
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


export default Projects